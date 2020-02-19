const express = require("express")
const bp = require("body-parser")
const app = express()
const port = 8080

app.use(bp.urlencoded())

app.set("view engine", "ejs")

let funcoes = {
  soma: (a, b) => a + b,
  mult: (a, b) => a * b,
  sub: (a, b) => a - b,
  div: (a, b) => a / b,
}

app.get("/", function(req, res) {
  res.render("index")
})

app.post("/calc", function(req, res) {
  let n1 = parseInt(req.body.n1, 10)
  let n2 = parseInt(req.body.n2, 10)
  console.log(req.body)
  let resultado = funcoes[req.body.op](n1, n2);

res.render("resultado", {
    resultado: resultado
  })
})

app.listen(port, function() {
  console.log(`Rodando na porta ${port}!`)
})

