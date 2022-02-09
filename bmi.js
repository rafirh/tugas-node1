const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res) => {
    res.send({
        "message": "Berhasil pemanggilan get"
    })
})

app.post("/bmi",(req,res) => {
    let berat = req.body.berat;
    let tinggi = req.body.tinggi;
    let tinggim = tinggi * 0.01;
    let bmi = berat / (tinggim * tinggim);
    let message;

    if(bmi < 18.5){
        message = "Kekurangan berat badan"; 
    }else if(bmi >= 18.5 && bmi <= 24.9){
        message = "Normal (ideal)";
    }else if(bmi >= 25 && bmi <= 29.9){
        message = "Kelebihan berat badan";
    }else if(bmi >= 30){
        message = "Kegemukan (obesitas)";
    }
    res.send({
        "berat": berat,
        "tinggi": tinggi,
        "result": {
            "message": message
        }
    })
})

const port = 8080;
app.listen(port, () => {
    console.log(`Aplikasi berjalan di port 8080`)
})