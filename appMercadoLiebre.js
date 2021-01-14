const express = require("express");

const path = require("path");

const app = express();

const publicFolderPath = path.resolve(__dirname, "./mercadoLiebreDH/public");
app.use(express.static(publicFolderPath));

app.listen(3003, () => {
    console.log("El servidor 3000 está corriendo");
});

app.get("/home", (req, res) => {
    let htmlPath= path.resolve(__dirname, "./mercadoLiebreDH/views/homeMercadoLiebre.html");
    res.sendFile(htmlPath);
})
