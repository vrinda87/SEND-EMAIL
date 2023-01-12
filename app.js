const { response }= require('express');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

function sendEmail(){
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'vrindakv2@gmail.com',
                pass:'uspyxodmaygpfxnq'
            }
        })
        const mail_configs ={
            from:'vrindakv2@gmail.com',
            to:'anoopvrinda3@gmail.com',
            subject:'testing coding',
            text:"checking if this email will be sent"
        }
        transporter.sendMail(mail_configs , function(error,info){
            if(error){
                console.log(error);
                return reject({message:"an error has ocuured"})
            }
            return resolve({message:"email send successfully"})
        });

    })
}


app.get('/',(req,res) => {
    sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))
})

app.listen(port, () =>{
    console.log('nodemailerproject is listening to port 5000');
})