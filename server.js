/**
 * Created by en7b33_r00t on 4/8/17.
 */
var express     = require('express');
var mongoose    = require('mongoose');


var app = express();
app.use(express.static(__dirname+"/public"));
mongoose.connect('mongodb://cyborg_root:pass123$@ds149800.mlab.com:49800/pharmacy',function(){
    console.log('connection successful');
}, function(error){
    console.log(error);
});

//port for the server to listen on
var port = process.env.PORT || 6809;

app.listen(port, function(){
    console.log("Listening on port "+port);
});

app.get('/', function(req,res){
    res.sendfile('public/app/views/index.html');
})