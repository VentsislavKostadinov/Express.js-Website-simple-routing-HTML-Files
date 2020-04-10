let express = require("express");

let path = require("path");

let app = express();


app.use("/cssFiles", express.static(__dirname));

app.get("/", function (req, res) {

    res.sendFile("Main.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/Adewale", function (req, res) {

    res.sendFile("Adewale.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/AnneBonny", function (req, res) {

    res.sendFile("AnneBonny.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/AnneBonny", function (req, res) {

    res.sendFile("AnneBonny.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/BenjaminHornigold", function (req, res) {

    res.sendFile("BenjaminHornigold.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/CharlesVane", function (req, res) {

    res.sendFile("CharlesVane.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/EdwardKenway", function (req, res) {

    res.sendFile("EdwardKenway.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/EdwardThatch", function (req, res) {

    res.sendFile("EdwardThatch.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/JackRackham", function (req, res) {
    res.sendFile("JackRackham.html", {root: path.join(__dirname)});
});

app.use("/cssFiles", express.static(__dirname));

app.get("/Trailers", function (req, res) {

    res.sendFile("Trailers.html", {root: path.join(__dirname)});

});


app.use("/cssFiles", express.static(__dirname));

app.get("/Havana", function (req, res) {

    res.sendFile("Havana.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/History", function (req, res) {

    res.sendFile("History.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/JaackRackham", function (req, res) {

    res.sendFile("JackRackham.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/Kingston", function (req, res) {

    res.sendFile("Kingston.html", {root: path.join(__dirname)});

});

app.use("/cssFiles", express.static(__dirname));

app.get("/Nassau", function (req, res) {

    res.sendFile("Nassau.html", {root: path.join(__dirname)});


})


    .listen(8080);
console.log("http://localhost:8080");