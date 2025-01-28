const nodemailer = require("nodemailer");
require('dotenv').config();

exports.transporterEmail = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,                //SMTP server
        port: process.env.SMTP_PORT,                //Port TLS
        secure: true,                               // Use TLS (secure: false for port 587)
        auth: {
            user: process.env.SMTP_EMAIL,          // Your smtp email address
            pass:  process.env.SMTP_PASSWORD       // Your smtp email password
        },
        tls: {
            rejectUnauthorized: false
        }
    });
}

exports.mailOption = (req) => {
    return {
        from: process.env.SMTP_EMAIL,
        to: req.email,
        bcc: process.env.EMAIL_OWNER,
        subject: req.subject,
        text: req.message,
        html: contentHTML(req),
    }
}

function contentHTML(req){
    return  `
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
            }
            p {
                font-size: 16px;
                color: #555;
            }
            .message {
                background-color: #f1f1f1;
                padding: 10px;
                border-left: 5px solid #2a9d8f;
                font-style: italic;
                margin-top: 20px;
            }
            .footer {
                margin-top: 30px;
                padding: 10px;
                color: #070707;
                text-align: center;
                border-radius: 4px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Hello ${req.name},</h1>
            <p>Thanks for your message! <br> I will respond as soon as possible.</p>
            
            <div class="message">
                <strong>Your Message:</strong>
                <p>${req.message}</p>
            </div>
        </div>
        
        <div class="footer">
            <p> Thank you for getting in touch! If you need more information, feel free to email me directly at.
             <a href="mailto:${process.env.EMAIL_OWNER}">${process.env.EMAIL_OWNER}</a>.</p>
        </div>
    </body>
    </html>
`;
}