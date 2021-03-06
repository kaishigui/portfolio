export default function (req, res) {
    require('dotenv').config()
    const PASSWORD = process.env.password

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'demo@demo.gmail',
          pass: 'password',
        },
        secure: true,
    });

    const mailData = {
        from: 'demo@demo.com',
        to: 'your email',
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: <div>{req.body.message}</div>
       }

    console.log(req.body)
  }