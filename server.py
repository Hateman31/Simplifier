from flask import Flask, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    done = db.Column(db.Boolean, default=False)

    def __init__(self, content):
        self.content = content
        self.done = False

    def __repr__(self):
        return '<Content %s>' % self.content

db.drop_all()
db.create_all()

@app.route("/app")
def get_app():
	return send_from_directory('','app.js')
	
@app.route("/")
def index():
	return send_from_directory('','index.html')

@app.route("/list")
def get_users():
	tasks = Task.query.all()
    return jsonify(tasks)

@app.route("/<int:id>")
def get_users():
	tasks = Task.query.all()
    return jsonify(tasks)

@app.route("/<int:id>/answers")
def get_users():
	tasks = Task.query.all()
	answers = Answer.query.all(task)
	
    return jsonify(tasks)

@app.route('/new',methods=['POST'])
def add_task():
	return

@app.route('/subtask/<int:task_id>',methods=['POST'])
def add_task():
	return
	
@app.route('/resolve/<int:task_id>',methods=['POST'])
def add_task():
	return

@app.route('/accept/<int:task_id>',methods=['POST'])
def add_task():
	return

@app.route('/<int:user_id>/events')
def add_task():
	events = {}
	return jsonify(events)

def delete_task(task_id):
    task = Task.query.get(task_id)
    db.session.delete(task)
    db.session.commit()

@app.route('/accept/<int:task_id>',methods=['POST'])
def resolve_task(task_id):
    task = Task.query.get(task_id)

    if not task:
        return redirect('/')
    if task.done:
        task.done = False
    else:
        task.done = True

    db.session.commit()
    return redirect('/')
        
app.run(debug=True)
