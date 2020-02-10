from flask import Flask,request,redirect
import json
from flask_cors import CORS
app = Flask(__name__)
# app.secret_key = "thisisimportan"
CORS(app)

@app.route('/validate',methods=['POST'])
def validate():
    data = json.loads(request.data.decode('utf8').replace("'", '"'))
    if request.method == "POST":
        if data['pass'] == "arjun":
            return "success"
        else:
            return "failed"

# @app.route('/check',methods=['GET'])
# def check():
#     if login == True:
#         return "success"
#     return "failed"


if __name__ =='__main__':
    app.run()