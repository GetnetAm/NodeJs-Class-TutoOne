// var calc =require('./calc.js')


// retsult =calc.add(6, 5);
// subresult= calc.sub(10, 7);


// console.log("the output is " +retsult)

// console.log("The substraction is " +subresult)


// var fs =require('fs')

// fs.appendFile('calc.js', 'console.log("this is done")', function(err){
//     console.log("Data is saved")
// })


const express =require('express');

const app =  express();


app.get('/', function(req, resp){
    resp.send("Hello Ethiopia");
})

app.get('/about', function(req, resp){
    resp.send("about our Country war")
})



app.get('/getnet/:id', function (req, resp){
    const id =req.params.id
    resp.send("Hey Navin" +id)
})








app.listen(9000, function(req, res){
    console.log("Server Running...")
});