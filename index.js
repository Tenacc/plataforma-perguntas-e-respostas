const express = require('express')
const app = express()
const connection = require('./database/database')

//database
connection
    .authenticate()
    .then(()=>{
        console.log('conexão feita com o banco de dados')
    })
    .catch((erro) => {
        console.log(erro)
    })


app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get('/',(req,res) => {
    res.render('index')
})

app.get('/perguntar', (req,res) =>{
    res.render('perguntar')
})

app.post('/salvarpergunta', (req,res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send('O titulo é' + titulo +  'e a descricao é ' + descricao)

})


app.listen(8080, () => {
    console.log('app rodando')
})