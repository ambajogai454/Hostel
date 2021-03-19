var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
//const creds = require('./config');

var transport = {
    host: 'smtp.example.com',
    service:'gmail', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: 'renukamatekar123@gmail.com',
    pass: 'Renukamatekar@123456789'
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var lname=req.body.lname
  var email = req.body.email
  var contact=req.body.contact
  var message = req.body.message
  var content = `FirstName: ${name} \n LastName: ${lname} \n Email addresss: ${email} \n Contact Number: ${contact} \n Message: ${message} `

  var mail = {
    from: name,
    to: 'renukamatekar123@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)