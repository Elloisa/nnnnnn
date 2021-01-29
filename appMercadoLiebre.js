const express = require("express");

const path = require("path");

const app = express();

const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));

app.listen(process.env.PORT || 3010, () => {
    console.log("El servidor 3010 está corriendo");
});

app.get("/home", (req, res) => {
    let htmlPath= path.resolve(__dirname, "./views/index.html");
    res.sendFile(htmlPath);
});

app.get("/register", (req, res) => {
    let htmlPath= path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlPath);
});

app.get("/login", (req, res) => {
    let htmlPath= path.resolve(__dirname, "./views/login.html");
    res.sendFile(htmlPath);
})

