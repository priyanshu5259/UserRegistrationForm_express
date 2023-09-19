const { error } = require('console');
const express =require('express');

const port=process.env.PORT || 3001;

const app=express();

const mongoose=require("mongoose");

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static('public'));



app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

app.post('/formPost',(req,res)=>{
    const { firstname,lastname, email, password } = req.body;

    console.log('Received form data:');
    console.log('Firstname:', firstname);
    console.log('Lastname:', lastname);
    console.log('Email:', email);
    console.log('Password:', password);

    // Respond to the client
    res.send('Form data received successfully.');
});

mongoose.connect("mongodb+srv://dayaramanipriyanshu6908:priyanshu@cluster0.p5j25ve.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(port,()=>{
        console.log('Server started at http://localhost:${port}');
    });
})
.catch((error)=>{
    console.log(error);
})

