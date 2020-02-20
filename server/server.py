from flask import Flask,request,redirect
import json
from flask_cors import CORS
import sys
import socket, threading
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'arjun'
socketio = SocketIO(app,  cors_allowed_origins="*")
CORS(app)

@app.route('/validate',methods=['POST'])
def validate():
    data = json.loads(request.data.decode('utf8').replace("'", '"'))
    if request.method == "POST":
        if data['pass'] == "arjun":
            return "success"
        else:
            return "failed"

# @app.route('/connect')
# def connect_to_bot():
#     socketio.send('initiate')

@socketio.on('message')
def can_u_hear_me(msg):
    # values = list(map(float, msg.split()))
    # if len(values) == 3:
    socketio.send(msg, broadcast=True)
    # if msg == "yes":
    #     Start_Talking()
    # else:
    #     socketio.send("Bot is sleeping!", broadcast = True)
# @app.route('/disconnect')
# def disconnect():
#     socketio.close_room()
@socketio.on('end')
def disconnect():
    socket.disconnect(0)
# def Start_Talking():
#     pass


if __name__ =='__main__':
    socketio.run(app)
