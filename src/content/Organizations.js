import React from 'react';

const organizations = {
  headlineParagraphs: [
    'In the book of Matthew, Jesus commands us to go and make disciples of all nations. More than simply through the clothing we wear or produce, YHWH Apparel wants to take up this call in action alongside the rest of the Church. And YOU are the Church! As you labor for the Lord, we want to partner with you and support you in the specific mission God has given you. As you are faithful to your part, we also want to be faithful with what God has given us.',
    'Below are some friends whom you’ve supported and are responding to this to share the gospel of Jesus Christ. Join us in praying for these groups and the people they come across, that the love of God would be known.',
  ],
  missionaryTitle: 'Sponsored Organizations',
  missionaries: [
    {
      name: 'Laundry Love',
      imgSrc: require('../images/community-outreach/laundrylove.jpg'),
      location: 'Bing Wong Wash Center - Berkeley, CA',
      date: '',
      description: (
        <p>
          Laundry Love aims to tend to the needs of the homeless in Berkeley,
          dealing with their material and immaterial ailments. We offer laundry
          services to alleviate the problems of sickness and poverty, and return
          to them a sense of dignity and self worth. Laundry must be done
          continuously, but grace saves a person forever. The church grows
          through attraction, and what better way to evangelize than to
          demonstrate the love given to us by serving the least of us!
        </p>
      )
    }, {
      name: 'Dorothy Day House Berkeley',
      imgSrc: require('../images/community-outreach/dorothy_day.jpg'),
      location: 'Berkeley, CA',
      date: '',
      description: (
        <p>Dorothy Day House Berkeley is a volunteer-based non-profit organization that for over 30 years has provided meals, shelter, and employment for low income residents and people who experience homelessness in Berkeley, California. You can learn more about them at <a href="https://www.dorothydayhouseberkeley.org/">https://www.dorothydayhouseberkeley.org/</a>.</p>
      )
    }
  ]
};

export default organizations;
