from flask import Flask
app = Flask(__name__)

@app.route('/validate',methods=['POST'])
def validate():
    console.log(request, request['pass'])
    if request['pass'] == "arjun":
        return "success"
    else:
        return "failed"


if __name__ =='__main__':
    app.run()