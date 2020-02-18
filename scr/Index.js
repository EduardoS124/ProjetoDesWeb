const express = require('express')
const app = express()
const port = 8080

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  let op = req.query.op
  let n1 = parseInt(req.query.n1, 10)
  let n2 = parseInt(req.query.n2, 10)
  let resultado = 0

  if (op === "soma"){
    resultado = n1 + n2
  }
  res.render("index", {
    resultado: resultado
  })
})

app.get("/soma/:num1/:num2", function(req, res) {

})

app.listen(port, function() {
  console.log(`Rodando na porta ${port}!`)
})
