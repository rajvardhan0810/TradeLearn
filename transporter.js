const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',  
    port: 587,  
    secure: false,
    type: "login",
    auth: {
        user: "ushabhjain07@gmail.com", 
        pass: "vhir zwfa pslk sdse"
}});

module.exports=transporter;