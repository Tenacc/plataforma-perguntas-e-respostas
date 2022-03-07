const express = require('express')
const app = express()


app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/',(req,res) => {
    res.render('index')
})

app.get('/perguntar', (req,res) =>{
    res.render('perguntar')
})

app.post('/salvarpergunta', (req,res) => {

})


app.listen(8080, () => {
    console.log('app rodando')
})