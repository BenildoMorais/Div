// Usando a framework web Express
const express = require('express')
const app = express()

// Esta funcionalidade expoe todos ficheiros estaticos na pasta
// Funciona seguindo o caminho do url e fazendo a correspondencia com a localizacao no diretorio
app.use(express.static('public'))

app.use(express.json());     
app.use(express.urlencoded());

app.post('/vendas', function (req, res) {
  console.log(req.body)
  // A função abaixo deve responder com um objecto enviado no formato JSON com a estrutura
  //  {
  //    success: <true/false>,
  //    data: <dados recebidos do formulario>
  //  }
  if (!req.body.preco || !req.body.produto){
    // retornar JSON com success = false
      res.status(400).send({
        sucess: false,
        //data: req.body
      })
  } else {
    // retornar JSON com success = true e data = dados enviados pelo frontend
      res.json({
        sucess: true,
        data: req.body
      })
  }

  
})
app.get('/vendas', function (req, res) {
  res.send('Listar')
})
app.get('/vendas/123', function (req, res) {
  res.send('Listar um')
})
app.put('/vendas/123', function (req, res) {
  res.send('Actualizar um')
})
app.delete('/vendas/123', function (req, res) {
  res.send('Remover um')
})

app.listen(8080, function () {
  console.log('Servidor disponivel em http://localhost:8080')
})
