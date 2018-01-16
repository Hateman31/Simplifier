from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)

@app.route("/app")
def get_app():
	return send_from_directory('','app.js')
	
@app.route("/")
def index():
	return send_from_directory('','index.html')

@app.route("/users")
def get_users():
    data = [
        [
			{'value':'John', 'edit': False },
			{'value': 0, 'edit': False },
			{'value':2,'edit': False },
			{'value':0,'edit': False },
        ]
    ]
    
    return jsonify(data)
        
app.run(debug=True)
