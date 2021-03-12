const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// var cors = require('cors');

const mailchimpListID = '8889cc916c';

mailchimp.setConfig({
  apiKey: '545d2dcab938ca95e99557da66a951dd-us17',
  server: 'us17'
});

app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());

//Get Test
app.get('/gettest', async (req, res) => {
  res.send('is this working?');
});

//Signup Route for Subcription Form
app.post('/signup', async (req, res) => {
  const { fname, lname, email } = req.body;
  console.log(req.body);

  try {
    const response = await mailchimp.lists.addListMember(mailchimpListID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: fname,
        LNAME: lname
      }
    });
    console.log('response: ', response);
    // res.redirect('http://localhost:3000/about');
    res.send(`I received your POST request. Here is the response from mailchimp: ${response}`);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
