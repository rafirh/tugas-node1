const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res) => {
    res.send({
        "massage": "Berhasil pemanggilan GET."
    })
})

app.get("/celcius/:suhu", (req,res) => {
    var celcius = req.params.suhu;
    var reamur = 4 * celcius / 5;
    var fahrenheit = 9 * celcius / 5 + 32;
    var kelvin = parseInt(celcius) + 273;
    res.send({
        "celcius": celcius,
        "result":{
            "reamur": reamur,
            "fahrenheit": fahrenheit,
            "kelvin": kelvin
        } 
    })
})

app.get("/reamur/:suhu", (req,res) => {
    var reamur = req.params.suhu;
    var celcius = 5 * reamur / 4;
    var fahrenheit = 9 * reamur / 4 + 32;
    var kelvin = 5 * reamur / 4 + 273;
    res.send({
        "reamur": reamur,
        "result":{
            "celcius": celcius,
            "fahrenheit": fahrenheit,
            "kelvin": kelvin
        } 
    })
})

app.get("/fahrenhait/:suhu", (req,res) => {
    var fahrenhait = req.params.suhu;
    var celcius = 5 * (fahrenhait - 32) / 9;
    var reamur = 4 * (fahrenhait - 32) / 9;
    var kelvin = (fahrenhait - 32) * 5 / 9 + 273;
    res.send({
        "fahrenhait": fahrenhait,
        "result":{
            "celcius": celcius,
            "reamur": reamur,
            "kelvin": kelvin
        } 
    })
})

app.get("/kelvin/:suhu", (req,res) => {
    var kelvin = req.params.suhu;
    var celcius = kelvin - 273;
    var reamur = 4 * (kelvin - 273) / 5;
    var fahrenhait = 9 * (kelvin - 273) / 5 + 32;
    res.send({
        "kelvin": kelvin,
        "result":{
            "celcius": celcius,
            "reamur": reamur,
            "fahrenhait": fahrenhait
        } 
    })
})

app.get("/celcius/:suhu", (req,res) => {
    var reamur = req.params.suhu;
})

app.get("/celcius/:suhu", (req,res) => {
    var fahrenheit = req.params.suhu;
})

app.get("/celcius/:suhu", (req,res) => {
    var kelvin = req.params.suhu;
})

app.listen(port, () => {
    console.log(`App running post ${port}`);
})