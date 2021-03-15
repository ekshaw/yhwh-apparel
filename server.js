const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

var cors = require('cors');

const mailchimpListID = '8889cc916c';

mailchimp.setConfig({
  apiKey: 'fbaf062ffda008ba5886b71d091ec44a-us17',
  server: 'us17'
});

app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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
    res.send(res.statusCode);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
