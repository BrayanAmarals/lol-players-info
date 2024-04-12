const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

function dataRequest() {
  fetch("https://victti-dev.com.br/api/lolpros/bootcamp/players")
    .then((res) => res.json())
    .then((resultado) => {
      app.get("/bootcamp", (req, res) => {
        return res.json(resultado);
      });
    });
}

dataRequest();

let timer = 0;

setInterval(() => {
  dataRequest();
  timer++;
  console.log(`Programando a ${(timer * 2) / 60} horas`);
}, 120000);

const port = 5000;

app.listen(port, () => {
  console.log("Iniciando...");
});
