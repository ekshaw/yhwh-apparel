import React from 'react';

const Organizations = [
  {
    title: 'Laundry Love',
    location: 'BERKELEY, CALIFORNIA',
    date: '',
    description: (
      <div>
        Laundry Love aims to tend to the needs of the homeless in Berkeley, dealing with their
        material and immaterial ailments. We offer laundry services to alleviate the problems of
        sickness and poverty, and return to them a sense of dignity and self worth. By building
        these relationships of trust and care, we are then able to effectively share the Gospel of
        Jesus. Laundry must be done continuously, but grace saves a person forever. What better way
        to evangelize than to demonstrate the love given to us than by serving the least of us!
      </div>
    ),
    imgSrc: require('../images/partnerships/laundry_love.jpg')
  },
  {
    title: 'Letters of Hope',
    location: 'HENDERSON, NEVADA',
    date: '',
    description: (
      <div>
        Letters of Hope is an initiative that strives to empower and encourage folks in prison
        through the delivery of personally-written letters and the donation of Bibles. It's a
        program within a larger organization called God Behind Bars that uses their resources to
        introduce families to Christ, helping inmates grow with their loved ones in faith. They also
        equip prisoners with the skills and knowledge to reintegrate themselves into society by
        allocating their funds towards helping prisoners find jobs, buy homes, take advantage of
        academic opportunities, and reconnect with their families.
      </div>
    ),
    imgSrc: require('../images/partnerships/letters_of_hope.jpg')
  }
];

export default Organizations;
