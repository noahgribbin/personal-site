

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser').json();
const PORT = process.env.PORT || 8000;
require('dotenv').config({path: `${__dirname}/.env`});
module.exports = {};

console.log(`${__dirname}/build`)
app.use(express.static( `${__dirname}/build` ) );
app.use(bodyParser)
app.use(cors())

app.get('/', function(req, res) {
  console.log('im up');
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.post('/send-email', function(req, res) {
  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noahagribbin@gmail.com',
      pass: process.env.pass
    }
  })
  let mailOptions = {
    from: `${req.body.email} ${req.body.name}`,
    to: 'noahagribbin@gmail.com',
    text: req.body.body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return console.log(error);
    console.log('Message %s sent: %s', info.messageId, info.response);
    return res.status(200)
  });
});
app.listen(PORT, function(){
  console.log('Server is running at: ',PORT);
});
