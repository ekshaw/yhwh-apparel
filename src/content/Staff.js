import React from 'react';

const Staff = [
  {
    team: 'Executive',
    members: [
      {
        name: 'Maddie Kong',
        role: 'CEO',
        description: (
          <div>
            <h3>
              Hola! I’m Maddie, a child of God (hehe), and I’m a student studying Cognitive Science!
              As a product designer, I have been challenged to intentionally create with the purpose
              of proclaiming the gospel. It is a joy to lead this team of broken but God-loving
              people. Outside of YHWH Apparel, I spend my time playing keys on praise team, dancing
              on ABBA Modern, and spending quality time with friends.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/maddie.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/maddie.png')
      },
      {
        name: 'Megan Lui',
        role: 'Vice President',
        description: (
          <div>
            <h3>
              Hello, hello! I’m Megan, a student studying Cognitive Science and MCB-Neurobiology. I
              joined YHWH Fall ‘20 with an intent to empower Christians in our mission to glorify
              God. It has been an absolute joy and blessing to serve with this incredible team. I am
              so excited to share our passions through our apparel and partnerships. Apart from
              YHWH, you can find me watching C/K-dramas, playing tennis, dancing, and attempting
              volleyball.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/megan.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/megan.png')
      }
    ]
  },
  {
    team: 'Marketing',
    members: [
      {
        name: 'Hannah Park',
        role: 'Marketing Associate',
        description: (
          <div>
            <h3>
              Hi! I'm Hannah and I'm studying Psychology and Data Science at Cal. As part of the
              marketing team, I take on the responsibility of spreading the purpose and mission of
              YHWH to the public. I am very blessed to be a part of this team and be able contribute
              to spreading the glory of God through methods of apparel production! I generally enjoy
              reading, listening to music, watching kdramas, and journaling/creative writing.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/hannah.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/hannah.png')
      }
    ]
  },
  // {
  //   team: 'Web Development',
  //   members: [
  //     {
  //       name: '',
  //       role: 'Web Developer',
  //       description: (
  //         <div>
  //           <h3>

  //           </h3>
  //         </div>
  //       ),
  //       imgSrcDesktop: require(''),
  //       imgSrcMobile: require('')
  //     }
  //   ]
  // },
  // {
  //   team: 'Product Design',
  //   members: [
  //     {
  //       name: '',
  //       role: 'Product Designer',
  //       description: (
  //         <div>
  //           <h3>

  //           </h3>
  //         </div>
  //       ),
  //       imgSrcDesktop: require(''),
  //       imgSrcMobile: require('')
  //     }
  //   ]
  // },
  {
    team: 'Business Operations',
    members: [
      {
        name: 'Daniel Xiao',
        role: 'Business Operations',
        description: (
          <div>
            <h3>
              HELLO! I am Daniel, a student studying Economics and Data Science. I joined YHWH as a
              way to serve God outside of church and in the Berkeley community. I can't wait to
              glorify God through the products that YHWH puts out! You can find me yoyo-ing and
              struggling to play guitar in my free time.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/daniel.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/daniel.png')
      },
      {
        name: 'Seowoo Wang',
        role: 'Business Operations',
        description: (
          <div>
            <h3>
              Hi! I'm Seowoo, a student studying Integrative Biology at Cal. Joining YHWH has helped
              me to spread the gospel and create products that reflect God’s glory. I can’t wait to
              make a positive impact in our community through our apparel! In my spare time, I enjoy
              playing Go, tennis, watching kdrama, and studying at cafes!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/seowoo.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/seowoo.png')
      },
      {
        name: 'Nathaniel Davila',
        role: 'Business Operations',
        description: (
          <div>
            <h3>
              Hello! My name is Nathaniel, I am majoring in Public Health and minoring in Data
              Science. In my off time you can catch me in the gym, taking lots of pictures, or with
              my friends.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/nathaniel.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/nathaniel.png')
      }
    ]
  }
];

export default Staff;
