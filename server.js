var http = require('http');
var app = require('./config/express')();
const url = 
'mongodb+srv://aplicacao:aplicacaomeanstack@cluster0.waikd.mongodb.net/ifsp?retryWrites=true&w=majority';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'),function(){
    console.log('Express Server escutando na porta ' + app.get('port'));
});