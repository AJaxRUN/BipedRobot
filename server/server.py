from flask import Flask,request,redirect
import json
from flask_cors import CORS
import sys
import socket, threading
app = Flask(__name__)
CORS(app)

@app.route('/validate',methods=['POST'])
def validate():
    data = json.loads(request.data.decode('utf8').replace("'", '"'))
    if request.method == "POST":
        if data['pass'] == "arjun":
            return "success"
        else:
            return "failed"

def Start_Talking():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    HOST = ''
    PORT = 1100
    try:
        s.bind((HOST, PORT))
    except socket.error as msg:
        print('Bind failed. Error Code : ', msg)
        sys.exit()
        
    print('Socket bind complete')

    #Start listening on socket
    s.listen(10)
    while True:
        message = str(input())
        s.send(message.encode('utf-8'))
        data = s.recv(1024)
        a = data.decode("utf-8") 
        print(a)


if __name__ =='__main__':
    t = threading.Thread(target=Start_Talking)
    t.daemon = True
    t.start()
    app.run(debug=True)
