const express = require("express");
const app = express();
app.get("/home", (req, res) => {
    res.send("Hola Mundo!");
});
app.listen(3003, () => {
    console.log("El servidor 3000 está corriendo");
})