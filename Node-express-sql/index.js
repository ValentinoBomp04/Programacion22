import express from 'express'

const app = express()

app.listen ('8000', function(){
    console.log('app iniciada en el puerto 8000')
})
// Configuracion de pug
app.set('views', './vistas')
app.set('view engine', 'pug')
// Configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))


app.get('/', function(req, res){
    res.render('index', {titulo: 'Aplicacion de contactos', dato: 'cualquier cosa'})
})