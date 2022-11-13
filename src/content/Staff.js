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
              Hi, I’m Maddie and I’m a senior studying Cognitive Science serving in YHWH Apparel’s 
              product design team! But first and foremost, my goal is to live out my identity as a 
              child of God in my everyday. My time in YHWH Apparel has challenged me to reflect on
              the Word and intentionally create to glorify God. I am grateful for the people God has
              clearly placed in this team and I only exist as a vessel (ignore the CEO title 
              formality) to remind us that we are centered on Christ. Outside of YHWH Apparel, 
              I enjoy playing keys on praise team, dancing on ABBA Modern, sleeping (in class),
              and spending quality time with friends!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/maddie.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/maddie.jpg')
      },
      {
        name: 'Megan Lui',
        role: 'Vice President',
        description: (
          <div>
            <h3>
              Hello, hello! I’m Megan, a third-year at UC Berkeley studying Cognitive Science and 
              MCB-Neurobiology. YHWH Apparel has been my family for the past 4 semesters, and I 
              have been so blessed to proudly (and loudly) proclaim God’s love with this amazing 
              team. As a part of business operations, I have the opportunity to converse with many 
              people throughout campus as well as nonprofit organizations about YHWH’s mission and 
              our faith. When I’m not napping, I love to cafe hop, watch C/K-dramas, play tennis, 
              dance, and teach little kids how to play piano!
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
        imgSrcDesktop: require('../images/staff/desktop-staff/hannah.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/hannah.jpg')
      }, 
      {
        name: 'Wilson Fung',
        role: 'Marketing Associate',
        description: (
          <div>
            <h3>
              Hi! I’m Wilson, a second year studying Data Science, and I’m on YHWH Apparel’s marketing 
              team! This is my first semester on YHWH but it’s already been so much fun working and 
              learning with this team to create something to spread His Word and His Glory. It really 
              is a blessing to be able to be a part of YHWH’s marketing and use the gifts God has 
              given me to glorify Him. In my free time, I enjoy photography, vibing with friends, 
              finding new study spots whether it be a cafe or library, and fashion!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/wilson.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/wilson.jpg')
      },
      {
        name: 'Kristen Chang',
        role: 'Marketing Associate',
        description: (
          <div>
            <h3>
              Hi I’m Kristen! I am a junior studying Nutritional Science (physiology & metabolism), 
              on the pre-medical track. I am on the marketing team for YHWH apparel, and am so 
              excited to be able to share the gospel through this apparel brand. My goal is to 
              glorify God in everything that I do, so to be able to express my love for fashion 
              and honor Him through it, is such a privilege. My life motto is: “seek first His 
              kingdom”, and so everything I do is because I want to serve and seek Him first. 
              I am compelled to love and serve others because He has loved me first. Some fun 
              facts about me: I LOVE coffee, going on spontaneous adventures, playing soccer, 
              taking fit & food pics, and talking about Jesus! I am excited for this next year 
              to come & if you ever want to hear more about Jesus or just grab coffee, 
              I will always be down!!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/kristen.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/kristen.jpg')
      },
      {
        name: 'Kristin Joe',
        role: 'Marketing Associate',
        description: (
          <div>
            <h3>
              Hi, I’m Kristin! I’m one of the Marketing Associates for YHWH this year!! Coming 
              to a totally new environment, I joined YHWH as a means of making new friends and 
              growing with a Christian community as well as taking on God’s call for boldness 
              in faith. I’m reallyy excited for you all to boldly wear these pieces and see the 
              heart that God has poured into them. Some little snippets about me: I’m a freshman 
              majoring in Cognitive Science. I’m also an INFP on the Myers Briggs scale. During 
              my free time, I love to go out with friends, play guitar, and curate Spotify playlists.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/kristin.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/kristin.jpg')
      }
    ]
  },
  {
    team: 'Product Design',
    members: [
      {
        name: 'Madison Kwon',
        role: 'Product Designer',
        description: (
          <div>
            <h3>
              Hey! I’m Madison and I’m a student studying Sustainable Environmental Design. 
              As a part of the product design team, my goal is to glorify God through design. 
              It has been a joy creating physical products that are intentional in proclaiming 
              the gospel. Apart from YHWH Apparel, I enjoy baking, playing the drums, hiking, 
              and spending time with friends.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/madison.jpg'),
        imgSrcMobile: require('../images/staff/desktop-staff/madison.jpg')
      }
    ]
  },
  {
    team: 'Business Operations',
    members: [
      {
        name: 'Daniel Xiao',
        role: 'Business Operations',
        description: (
          <div>
            <h3>
              HEeY! I am Daniel, a Berkeley student studying Data Science and Economics serving in 
              YHWH Apparels’ business operations team! As a Christian we are called to do everything 
              for the glory of God. Although I am far from it, being a part of YHWH Apparel and serving 
              God outside of church gives me a way to better center my life on Christ and spread the 
              good news. You can catch me (outside) playing guitar or yo-yoing in my free time.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/daniel.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/daniel.jpg')
      },
      {
        name: 'Seowoo Wang',
        role: 'Business Operations',
        description: (
          <div>
            <h3>
              Hi! I'm Seowoo, a student studying Integrative Biology at Cal. Joining YHWH last Spring 
              has helped me to spread the gospel and create products that reflect God’s glory. I am 
              looking forward to this year’s launch and can’t wait to seek and serve Him through our 
              apparels! In my spare time, I enjoy playing Go, tennis, watching kdrama, and studying 
              at cafes!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/seowoo.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/seowoo.jpg')
      }
    ]
  }, 
  {
    team: 'Web Development',
    members: [
      {
        name: 'Hyo Won Jeong',
        role: 'Web Developer',
        description: (
          <div>
            <h3>
              Hello! My name is Hyo Won and I am fourth year studying EECS at UC Berkeley, and I’m
              excited to be a part of YHWH as a web developer. Being in YHWH has challenged me to
              center my life on the Gospel and contribute to God’s kingdom in interesting and
              creative ways. On most days, you can catch me at the gym, playing volleyball,
              or bouldering.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/hyowon.jpg'),
        imgSrcMobile: require('../images/staff/mobile-staff/hyowon.jpg')
      }
    ]
  }
];

export default Staff;
