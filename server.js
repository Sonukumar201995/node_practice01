const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my hotels............ How can I help you  ?');
});

app.get('/idli',(req,res)=>{
    const item={
        "name": "Masala Idli",
        "price": 60
    }
    res.send(item);
})

app.get('/chicken',(req,res)=>{
    res.send('sure sir, i would love to serve chicken')
})

app.listen(3000, () => {
    console.log('Server is listening.........');
});