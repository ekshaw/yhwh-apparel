const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

//Email Setup
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yhwhapparel@gmail.com',
    pass: '@RunW/3ndu4an$e1!'
  }
});

contactEmail.verify(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Go!');
  }
});

//Mailchimp Setup
const mailchimpListID = '8889cc916c';

mailchimp.setConfig({
  apiKey: '7d9de18e6300a8829bef1e0c3fbfdc64-us17',
  server: 'us17'
});

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Route for Subcription Form
app.post('/signup', async (req, res) => {
  const { fname, lname, email } = req.body;

  try {
    const response = await mailchimp.lists.addListMember(mailchimpListID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: fname,
        LNAME: lname
      }
    });
    res.send(res.statusCode);
  } catch (error) {
    res.send(error.response.text);
  }
});

//Route for Contact Form
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const mail = {
    from: name,
    to: 'yhwhapparel@gmail.com',
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`
  };

  contactEmail.sendMail(mail, error => {
    if (error) {
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'Message Sent' });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
