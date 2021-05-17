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
        imgSrcMobile: require('../images/staff/mobile-staff/kristen.jpg')
      },
      {
        name: 'Emily Shaw',
        role: 'Vice President, Web Development Lead',
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
        imgSrcMobile: require('../images/staff/mobile-staff/emily.jpg')
      }
    ]
  },
  {
    team: 'Marketing',
    members: [
      {
        name: 'Aaron Wu',
        role: 'Marketing Lead',
        description: (
          <div>
            <h3>
              Hi, I'm Aaron, a student studying Cognitive Science. I joined YHWH Apparel to use my
              love for design and fashion for God's glory. I love the process of translating
              Scripture into physical designs.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/aaron.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/aaron.jpg')
      },
      {
        name: 'Sooyoung Park',
        role: 'Marketing Designer',
        description: (
          <div>
            <h3>
              Hi!! I'm Sooyoung and I'm currently a senior studying Molecular and Cell Biology
              (Neuro emphasis) and minoring in Music. I joined YHWH my sophomore year and it's
              honestly been such a blessing to not only be able to pray and share life with this
              amazing team, but also to witness my personal growth in my faith in the process.
              Outside of YHWH and classes, I enjoy messing around on Procreate, playing basketball
              and piano, and going on food adventures!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/sooyoung.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/sooyoung.jpg')
      },
      {
        name: 'Persis Gan',
        role: 'Marketing Editor',
        description: (
          <div>
            <h3>
              Hi! I'm Persis, a Global Studies major and I joined YHWH Apparel because I love
              fashion, am interested in marketing and wanted to be apart of a closer Christian
              community on campus. I love running outdoors, going for spin class, or staying in
              curled up with a good book and listening to music. I also absolutely love dogs, making
              random Spotify playlists and online shopping (heh).
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/persis.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/persis.jpg')
      }
    ]
  },
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
        imgSrcMobile: require('../images/staff/mobile-staff/christie.jpg')
      }
    ]
  },
  {
    team: 'Product Design',
    members: [
      {
        name: 'Daniel Lee',
        role: 'Product Design Lead',
        description: (
          <div>
            <h3>
              Hello, I'm Daniel! I joined YHWH in Fall 2020, and I was drawn by YHWH's diligence in
              actively being apart of communities despite the chaos COVID-19 brought. YHWH's team
              constantly strives to glorify God in all of its activities, and it is encouraging to
              be apart of such a team, in which each member offers unique gifts bestowed from God.
              During my free time, I like to exercise, draw, play video games, and learn history!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/daniel.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/daniel.jpg')
      },
      {
        name: 'Angela Ea',
        role: 'Product Designer',
        description: (
          <div>
            <h3>
              Hello, I am a senior at Berkeley who loves Jesus. I joined YHWH because of the thought
              that goes behind each piece of clothing, and apparel is a way I can display my faith
              through the things I wear. When I am not in classes, I enjoy dancing especially when
              no one is watching. In my free time, I create Christian-Pun knick knacks that reflect
              how God can meet us in just one of many creative ways.
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/angela.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/angela.jpg')
      },
      {
        name: 'Kylie Ren',
        role: 'Product Designer',
        description: (
          <div>
            <h3>
              Hey I'm Kylie and am currently studying MEB and (potentially, hopefully?) CS. I joined
              YHWH as a product designer because I wanted to use my hobby as a way to serve God and
              grow closer with Him while also getting to know the faith a bit more! God has let me
              know that this is a place of acceptance and exploration, and I'm so excited to be able
              to empower others in Christ through design! Aside from designing, I also love to
              dance, game, take photos, and researching biology topics that I'm passionate about!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/kylie.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/kylie.jpg')
      },
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
        imgSrcMobile: require('../images/staff/mobile-staff/maddie.jpg')
      }
    ]
  },
  {
    team: 'Business Operations',
    members: [
      {
        name: 'Rachel Miller',
        role: 'Business Operations Lead',
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
        imgSrcMobile: require('../images/staff/mobile-staff/rachel.jpg')
      },
      {
        name: 'Megan Lui',
        role: 'Business Operations Associate',
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
        imgSrcMobile: require('../images/staff/mobile-staff/megan.jpg')
      },
      {
        name: 'Christine Oh',
        role: 'Business Operations Associate',
        description: (
          <div>
            <h3>
              Heyo! I'm Christine! I'm from Tallahassee, FL and currently studying Business
              Administration and Media Studies. I joined YHWH to put my faith into action and action
              into purpose! Through the YHWH community and work environment, Jesus has already
              greatly rocked my heart to teach me that He is in all things forever and always. I'm
              way thankful to bask in the true mercy, love, and generosity of Christ alongside
              people who do the same. I love to swim, hike, and paint, and you can probably find me
              eating a chicken burrito in between!
            </h3>
          </div>
        ),
        imgSrcDesktop: require('../images/staff/desktop-staff/christine.png'),
        imgSrcMobile: require('../images/staff/mobile-staff/christine.jpg')
      }
    ]
  }
];

export default Staff;
