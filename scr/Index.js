const express = require('express')
const app = express()
const port = 8080

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  res.render("index", {
    nome: "Gelzo Neto"
  })
})

app.get("/user/:nome", function(req, res) {
    res.send("Este é o perfil de: " + req.params.nome)
})

app.listen(port, function() {
  console.log(`Rodando na porta ${port}!`)
})
