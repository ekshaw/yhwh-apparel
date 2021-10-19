import React from 'react';

const Staff = [
  {
    team: 'Executive',
    members: [
      {
        name: 'Kristen Yee',
        role: 'CEO',
        description: (
          <div>
            <h3>
              Hi! I'm Kristen, a student studying English. The semester that I joined YHWH, serving
              and giving back to the Berkeley Christian community was heavy on my heart, and I'm so
              grateful for the ways that YHWH has helped me incorporate my academic pursuits with my
              faith. I am a huge coffee-lover, oversleeper, and #1 fan of my amazing marketing team
              :)
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/kristen.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/kristen.png')
      },
      {
        name: 'Emily Shaw',
        role: 'Vice President, Web Development',
        description: (
          <div>
            <h3>
              Hello hello! I’m Emily and I’m an EECS major also pursing the Berkeley Certificate in
              Design Innovation. Joining YHWH has been such a blessing in showing me how my passions
              and career pursuits can be used to glorify God. My heart is so happy to see how our
              products are used to spark conversations about Him. Apart from YHWH, I enjoy swimming,
              hiking, and baking!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/emily.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/emily.png')
      }
    ]
  },
  // {
  //   team: 'Marketing',
  //   members: [
  //     {
  //       name: '',
  //       role: '',
  //       description: (
  //         <div>
  //           <h3>
  //
  //           </h3>
  //         </div>
  //       ),
  //       imgSrcDesktop: require(''),
  //       imgSrcMobile: require('')
  //     }
  //   ]
  // },
  {
    team: 'Web Development',
    members: [
      {
        name: 'Christie Lum',
        role: 'Web Developer',
        description: (
          <div>
            <h3>
              Hello! I'm Christie and am majoring in CS and data science. I joined YHWH this
              semester as a web developer and am so excited to be able to combine my passion for
              design, coding, and God together. As someone who loves serving, it's such a blessing
              to be able to glorify the Lord and spread the gospel through fashion in this team. In
              my free time, I love bullet journaling, singing with my Christian a cappella group,
              playing TFT, and playing volleyball.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/christie.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/christie.png')
      },
      {
        name: 'Su Min Kim',
        role: 'Web Developer',
        description: (
          <div>
            <h3>
              Hello, I'm Su Min! I'm a senior studying Computer Science and minoring in Cal Teach. I
              joined YHWH during Fall 2021. I was drawn to YHWH because of our mission to start
              conversations about the wonderful name of our Lord. I'm grateful that this community
              is drawing me closer to students from all different fellowships!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/sumin.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/sumin.png')
      }
    ]
  },
  {
    team: 'Product Design',
    members: [
      {
        name: 'Maddie Kong',
        role: 'Product Designer',
        description: (
          <div>
            <h3>
              AnyeonghasaYO, I’m Maddie and I’m studying Cognitive Science! I joined YHWH as a
              product designer spring 2021 because I found YHWH’s mission to be refreshingly
              unashamed in declaring the gospel and the intentional heart posture clearly manifested
              in the designs. Excited to witness how God moves! In my free time, I love learning new
              instruments, watching kdramas, and spending time outside.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/maddie.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/maddie.png')
      }
    ]
  },
  {
    team: 'Business Operations',
    members: [
      {
        name: 'Rachel Miller',
        role: 'Business Operations',
        description: (
          <div>
            <h3>
              Hi, I’m Rachel and I’m serving as YHWH’s Business Operations lead. Since joining the
              team, YHWH has helped me see the way God can use our passions, uncertainties, busy
              schedules, professional skills, and many shortcomings to create relationships and
              products that reflect His glory! In my spare time, you can catch me thrift shopping,
              hanging out at the beach, or playing soccer.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/rachel.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/rachel.png')
      },
      {
        name: 'Megan Lui',
        role: 'Business Operations',
        description: (
          <div>
            <h3>
              Hi, I’m Megan! I’m at Cal studying Cognitive Science and MCB-Neurobiology. I joined
              YHWH’s business operations team because I wanted to empower Christians in our mission
              to glorify God. I’m so excited to see how we can impact communities around campus
              through our apparel and donations. In my spare time, I enjoy watching K-dramas,
              playing tennis, and exploring cafes.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/megan.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/megan.png')
      }
    ]
  }
];

export default Staff;
