const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const path = require('path');
// var cors = require('cors');

const app = express();
var router = express.Router();
const port = process.env.PORT || 5000;

const mailchimpListID = '8889cc916c';

mailchimp.setConfig({
  apiKey: '545d2dcab938ca95e99557da66a951dd-us17',
  server: 'us17'
});
app.use(express.static(path.join(__dirname, 'client')));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

//Test with get
app.get('/signupget', async (req, res) => {
  res.send('is this working?');
});

//Signup Route
app.post('/signup', async (req, res) => {
  const { fname, lname, email } = req.body;
  console.log(req.body);
  console.log('cryy');

  // Construct req data
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: fname,
      LNAME: lname
    }
  };

  const postData = JSON.stringify(data);

  try {
    const response = await mailchimp.lists.addListMember(mailchimpListID, { postData });
    console.log('response: ', response);
    res.send(`I received your POST request. Here is the response from mailchimp: ${response}`);
  } catch (error) {
    console.log('cry');
    console.error(error);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
