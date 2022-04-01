from flask import Flask, redirect, render_template, url_for, request, redirect, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from sqlalchemy import JSON
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
import json

# ^ important imports ^

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


# Initializing extensions
db = SQLAlchemy(app)
migrate = Migrate()
ma = Marshmallow(app)
cors = CORS()
app.config['SECRET_KEY'] = 'notimportant'



# Creating the Todo database
class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    created_by = db.Column(db.String(10)) 
    completed = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'{self.id} {self.content} {self.date_created} {self.created_by} {self.completed}'
    
def todo_serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content,
        'date_created': todo.date_created,
        'creator': todo.created_by,
        'completed': todo.completed
    }

@app.route('/', methods=['GET','POST'])
def index():
    return jsonify([list(map(todo_serializer, Todo.query.all()))])

# Add entries to database
@app.route('//create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    todo = Todo(content=request_data['content'])

    db.session.add(todo)
    db.session.commit()

    return {'201': 'todo created!'}

# code for deleting entries
@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete = Todo.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return 'Opps, that went wrong :c'
       


if __name__ == '__main__':
    app.run(debug=True)
