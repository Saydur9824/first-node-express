const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send('top card')
})

const users = [
    {id:0, name:'tapos', email :'tapos@gmail.com', phone: '097072'},
    {id:1, name:'popu',  email :'popu@gmail.com', phone: '09707562'},
    {id:2, name:'quata',  email :'quata@gmail.com', phone: '09707256'},
    {id:3, name:'notak', email :'notak@gmail.com', phone: '09707362'}
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
});

// app method
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits', (req, res)=>{
    res.send(['langra','orange'])
})
app.get('/fruits/mango', (req,res)=>{
    res.send('foxli ammmm')
})


app.listen(port, () => {
    console.log('Listening to port ', port)
})


