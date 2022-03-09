const express = require('express')
const app = express()
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')

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
    Pergunta.findAll({raw: true, order: [
        ['id', 'DESC']
    ]}).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        })
    })
    
})

app.get('/perguntar', (req,res) =>{
    res.render('perguntar')
})

app.post('/salvarpergunta', (req,res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    })

})

app.get('/pergunta/:id', (req,res) =>{
    var id = req.params.id
    Pergunta.findOne({
        where: {id:id}
    }).then(pergunta => {
        if(pergunta != undefined) {
            res.render('pergunta', {
                pergunta: pergunta
            })
        }else {
            res.redirect('/')
        }
    })
})


app.listen(8080, () => {
    console.log('app rodando')
})