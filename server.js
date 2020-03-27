const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express()

app.set('views', path.join(__dirname,'views'))
app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended:true}))

app.set('port', process.env.PORT || 3000)

//loop through values eg. from db
//const people = ['halley','izzy','mouadh','umayma']
// const people = [
//     {
//         firstname:"john",
//         lastname:"doe"
//     }
// ]

//routes
// app.get('/', function(req, res){
//     res.render('home',{
//         content: 'this is some content',
//         published: true,
//         people: people
        
//     })
// })

app.get('/', function(req,res){
    res.redirect('/login')
})

app.get('/login', function(req, res){
    res.render('login')
})
app.get('/signin', function(req, res){
    res.render('signin')
})
app.post('/submit-login', function(req, res){
    return res.send(req.body) 
})
app.post('/submit-signin', function(req, res){
    return res.send(req.body)
})
app.listen(app.get('port'), function(){
    console.log('server started on port '+ app.get('port'))
})