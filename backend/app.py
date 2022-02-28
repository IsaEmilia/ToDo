from flask import Flask, redirect, render_template, url_for, request, redirect, session, jsonify, Response
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from sqlalchemy import ForeignKey
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt

# ^ important imports ^

app = Flask(__name__)
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



# Add entries to database
class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    #date_created = db.Column(db.DateTime, default=datetime.utcnow)
    #created_by = db.Column(db.String(10),) 
    #completed = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'{self.id} {self.content}'

        
# Add users to database
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    password = db.Column(db.String(80), nullable=False )

    def __repr__(self):
        return '<User %r>' % self.id


def todo_serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content
    }

@app.route('/', methods=['GET','POST'])
def index():
    return jsonify([list(map(todo_serializer, Todo.query.all()))])


if __name__ == '__main__':
    app.run(debug=True)
