import React from 'react';

const Staff = [
  {
    team: 'Executive',
    members: [
      {
        name: 'Hannah Park',
        role: 'CEO',
        description: (
          <div>
            <h3>
              
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/hannah.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/hannah.jpg')
      },
      {
        name: 'Megan Lui',
        role: 'Vice President',
        description: (
          <div>
            <h3>
              
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/megan.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/megan.jpg')
      }
    ]
  },
  {
    team: 'Marketing',
    members: [
      {
        name: 'Kristin Joe',
        role: 'Marketing Lead',
        description: (
          <div>
            <h3>
              Hi! I’m Kristin :) A little bit about me: I’m a first year prospectively majoring in
              Data Science and Cognitive Science. I’m a INFP on the Myers Briggs scale—an introvert
              who thrives on one-on-one conversations, going out with friends, and her quiet time
              (reading, exploring new music, etc.). I joined YHWH last semester after falling in love
              with its mission of living out a bold faith, and I hope our products continue to capture
              unconventional aesthetics that can spark conversations and appeal to all audiences.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/kristin.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/kristin.jpg')
      }, 
      {
        name: 'Enoch Mun',
        role: 'Marketing Associate',
        description: (
          <div>
            <h3>
              Hello, I’m Enoch, a first year who is part of YHWH apparel’s marketing team and is
              currently studying statistics. I was first called to YHWH by the In The Waiting
              collection as I really liked the design of the hoodie and saw how YHWH seeked to
              proclaim God’s message continually through articles of clothing. I too wished to be
              part of something that worked to proclaim God’s wonders, and since joining YHWH, can
              confidently say I have no regrets as it is such a joy to be able to serve Him and
              connect with my fellow brothers and sisters. My passions including sports (baseball
              fan), lifting, and playing videogames. I enjoy meeting new people as well so always
              feel welcome to come and talk to me about anything.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/enoch.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/enoch.jpg')
      },
      {
        name: 'Jaemin Shin',
        role: 'Marketing Associate',
        description: (
          <div>
            <h3>
            Hey, I’m Jaemin, a first year student majoring in psychology. I joined YHWH in hopes to
            be able to spread the love of God through a medium of apparel. Fashion has been a huge
            interest of mine, and YHWH was perfect opportunity to be able to combine the two of my
            passions together. Being a part of YHWH has been amazing, there is so much joy in serving
            God and his people. My hobbies include volleyball, playing games, and watching movies. I
            love hanging out with people and getting to know my brothers and sisters, so hit me up anytime.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/jaemin.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/jaemin.jpg')
      }
    ]
  },
  {
    team: 'Product Design',
    members: [
      {
        name: 'Madison Kwon',
        role: 'Product Design Lead',
        description: (
          <div>
            <h3>
            Hi!! I’m Madison and I’m a 2nd year studying sustainable environmental design. This is my
            second semester on the product design team for YHWH apparel! I’ve learned a lot about how
            to design with intention and glorify God with the creativity He has blessed me with. It is
            so clear that God is working through this team and our mission. I have loved creating these
            inter-fellowship connections, which has reaffirmed to me that God’s presence is right here
            in Berkeley and His goodness is pursuing all of us.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/madison.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/madison.jpg')
      },
      {
        name: 'Julia Hwang',
        role: 'Product Designer',
        description: (
          <div>
            <h3>
            heyyyy 😏 
            my name’s julia and i’m a second year studying psychology on the pre-med track! i’m on the product
            design team working to create a fire product for this spring’s launch. SO HYPE!! i joined yhwh
            apparel because i wanted to surround myself with a community that is genuinely seeking after Christ
            and i personally wanted to create something meaningful that is rooted in and glorifying the Lord.
            in my free time, i absolutely LOVE watching the newest and hottest kdramas or creating the ultimate
            outfits pinterest board of my dreams. disclaimer, i don’t drink caffeine and am a BIG talker, so when
            i’m not doing the things above, you can find me sipping a nice matcha and talking for DAYS with friends.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/julia.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/julia.jpg')
      }
    ]
  },
  {
    team: 'Business Operations',
    members: [
      {
        name: 'Daniel Xiao',
        role: 'Business Operations Lead',
        description: (
          <div>
            <h3>
              Hello! My name is Daniel and I am a junior majoring in Economics and Data Science. I am
              currently on the business operations team at YHWH Apparel! It has been a true joy serving
              God through YHWH Apparel over the past few semesters. I first joined the business operations
              team in the spring semester of my sophomore year looking for a way to serve God outside of
              my local Church. Since then, my peers in YHWH Apparel have been a great source of encouragement
              through our Bible studies and the care that we place into our product designs. I cannot way
              to continue our mission to share the good news through our products and partnerships!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/daniel.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/daniel.jpg')
      },
      {
        name: 'Ashley Kwon',
        role: 'Business Operations Associate',
        description: (
          <div>
            <h3>
            Hi! I’m Ashley, a third-year studying Economics, and I’m on YHWH Apparel’s Business
            Operations team. This is my first semester in YHWH but I have already had a lot of fun
            getting to know the team because everyone has been very welcoming! :) I joined YHWH
            because I believed that this club’s mission was something different and more special, as
            everything that goes on in the organization is solely for the purpose of glorifying our
            Father God. Through YHWH, I wish to spread His word and help people experience the love
            that I received from God. In my spare time, I enjoy film photography, traveling, getting
            an iced matcha latte at Strada, and spending time with friends!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/ashley.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/ashley.jpg')
      },
      {
        name: 'Wilson Fung',
        role: 'Business Operations Associate',
        description: (
          <div>
            <h3>
              Hi! I’m Wilson, a second year studying Data Science, and I’m on YHWH Apparel’s business
              operations team! This is my second semester on YHWH but it’s already been so much fun
              working and learning with this team to create something to spread His Word and His Glory.
              I really liked YHWH Apparel’s mission of sparking conversation through clothing and decided
              to join to utilize the gifts God has given me! In my free time, I enjoy photography,
              vlogging, singing, vibing with friends, and finding new study spots whether it be a cafe
              or library!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/wilson.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/wilson.jpg')
      }
    ]
  }, 
  {
    team: 'Web Development',
    members: [
      {
        name: 'Elisabeth Shin',
        role: 'Web Developer',
        description: (
          <div>
            <h3>
              hey!!👋 i’m elisabeth, a first year studying cog sci and i’m on the web development team
              working on the ui/ux side of things. i joined yhwh because i love their hoodies and members,
              but i was also drawn to the club’s heart to be a light in berkeley and share the gospel
              through creativity and design. when i’m not scouring bookstores or stalking people on spotify 👀,
              you can find me at sodoi (my second 🏡) drinking a cold brew and hanging out with friends!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/elisabeth.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/elisabeth.jpg')
      },
      {
        name: 'Eric Choi',
        role: 'Web Developer',
        description: (
          <div>
            <h3>
              Hey! I’m Eric, a first year studying EECS and I’m part of YHWH Apparel’s web development
              team! YHWH’s mission to spread His Word through clothing was very appealing, and I felt
              inspired by members’ hearts to share the gospel in creative ways. Plus, I didn’t want to
              pass on an amazing opportunity to use my skills for His kingdom! When I’m not studying, I
              love to edit videos, produce music, hang out with friends, and discover the latest k
              r&b/hiphop artists!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/eric.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/eric.jpg')
      }
    ]
  }
];

export default Staff;
