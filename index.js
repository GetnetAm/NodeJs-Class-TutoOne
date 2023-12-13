// var hi =require("./print")

// hi.sayhi();
// hi.num();

// var fs =require('fs')

// var write =fs.writeFileSync("myfilethree.txt", "ጌትነት አምሳሉ ", function(err){
//     if(err) throw err;
//     console.log('the file has been saved');
// });

// write();


var express = require('express')

var app = express();

// app.get('/', function(require, response){
//     response.send('All files hire')
// })

// app.get('/about', function(require, response){
//     response.send('About files hire')
// })


// app.get('/contact', function(require, response){
//     response.send('Contact us')
// })



app.get('/', function(require, response){
    response.sendfile(__dirname + '/index.html');
})

app.get('/about', function(require, response){
    response.sendfile(__dirname + '/about.html');
})
app.get('/contact', function(require, response){
    response.sendfile(__dirname + '/contact.html');
})







app.listen(4000);