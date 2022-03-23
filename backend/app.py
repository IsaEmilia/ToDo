from flask import Flask, redirect, render_template, url_for, request, redirect, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from sqlalchemy import JSON, ForeignKey
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt
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
bcrypt = Bcrypt(app)
app.config['SECRET_KEY'] = 'notimportant'

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

# Creating the User database
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    password = db.Column(db.String(80), nullable=False )

    def __repr__(self):
        return '<User %r>' % self.id


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

# Delete entries from database
@app.route('/delete/<int:id>', methods=['DELETE'])
#@login_required
def delete_todo(id):
    response = {}
    todo = Todo.query.get(id)
    response['id'] = todo.id  
    db.session.delete(todo)
    db.session.commit()  
    return 'Done', 201
       


if __name__ == '__main__':
    app.run(debug=True)
