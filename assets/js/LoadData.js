const eavesdrop = (type) => {
    const socket = io.connect("http://localhost:5000");
    if(type==="connect") {
        socket.on('connect', function() {
            //socket.send('hii');
            console.log('Connected to bot!');
        });
        socket.on('message', function(msg){
            var values = msg.split(" ");
            if(values.length == 3)
            {
                $("#acc_table").prepend('<tr><td>'+values[0]+'</td><td>'+values[1]+'</td><td>'+values[2]+'</td></tr>');
            }
            else {
                $("#act_table").prepend('<tr><td>'+msg+'</td></tr>');
            } 
            // var objDiv = document.getElementById("acc_div");
            // objDiv.scrollTop = objDiv.scrollHeight; 
        });
    }
    else {
        var io = io();
        io.emit('end');
    }
}


export default eavesdrop;