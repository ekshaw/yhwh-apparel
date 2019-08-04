import React from 'react';

const staff = {
  headlineParagraphs: [
    'Hebrews 10: 24-25 tells us to "spur one another toward love and good deeds, meet up together, and encourage one another". As a team, we strive to inspire ourselves and others to serve God and carry out His mission.',
    'We want to be open and personal with you. Meet the team members who help make YHWH such an awesome team!',
    "Interested in joining the team? Click the buttons below to learn more about the different roles and apply! Applications close Saturday, August 31, 2019, 11:59pm. We can't wait to meet all of you!"
  ],
  staffTitle: 'Meet the Team',
  members: [
    {
      name: 'Hannah Lee',
      role: 'CEO / Manager',
      imgSrc: require('../images/staff/hannah_lee.jpg'),
      fellowship: 'Presence Livingwater',
      description: (
        <div>
          <p>
            "Hi, I'm Hannah and a senior at Cal. I joined YHWH my freshman year
            and have been loving every season of it. I love binging sitcoms,
            funny puppy videos, and learning random facts from the Internet.
            Hope you are also encouraged by YHWH!"
          </p>
        </div>
      )
    },
    {
      name: 'Joseph Kim',
      role: 'Design',
      imgSrc: require('../images/staff/joseph_kim.jpg'),
      fellowship: 'Passion Livingwater',
      description: (
        <div>
          <p>
            Joseph Kim has been a designer for YHWH since Spring 2018. He has a
            strong passion for helping Christians and non believers alike grow
            deeper in their knowledge of and ultimately love for God. Joseph
            joined YHWH to use design to communicate themes of God's character
            and plan of salvation through Jesus. His hope is that through YHWH
            Apparel's products, Christians would not only be bold in their faith
            through their outer appearance, but also equipped with Scripture in
            their hearts to better explain and live out the Gospel.
          </p>
        </div>
      )
    },
    {
      name: 'Lillian Du',
      role: 'Operations',
      imgSrc: require('../images/staff/lillian_du.jpg'),
      fellowship: 'Presence Livingwater',
      description: (
        <div>
          <p>
            "Hello! I'm a senior in Presence and I've been a part of YHWH's
            operations team since Fall '17. I learn something new every semester
            working with YHWH and I'm really excited to see how the team will
            grow in the coming semesters! 🙂"
          </p>
        </div>
      )
    },
    // {
    //   name: 'Millie Ma (Not done)',
    //   role: 'Role',
    //   imgSrc: require('../images/staff/millie_ma.jpg'),
    //   fellowship: 'Fellowship Name',
    //   description: (
    //     <div>
    //       <p>
    //         Before leaving for the trip, we prayed to God that He would show us
    //         how He can work through His sons and daughters if they are obedient
    //         and put full trust in Him. There were many times throughout this
    //         trip where we felt like we were not equipped enough to carry out a
    //         certain evangelical task (teaching classrooms, jail ministry,
    //         drug/rehab center ministry), but God clearly reminded us that He
    //         does not call the equipped, but He equips the called. We had
    //         countless valuable conversations with the Filipinos and saw many
    //         people accept Jesus into their hearts on this trip. It was an
    //         amazing experience living at What The Bible Says Church and spending
    //         so much time with the members. It was eye opening for us to see how
    //         missional the church members are to their hometown and to see how
    //         willing they are to preach the gospel to their neighbors.
    //       </p>
    //     </div>
    //   )
    // },
    {
      name: 'Joseph Park',
      role: 'Community Outreach',
      imgSrc: require('../images/staff/joseph_park.jpg'),
      fellowship: 'Acts 2 Fellowship',
      description: (
        <div>
          <p>
            "Hey everyone! I'm Joseph, and I'm a senior studying MCB and Data
            Science. I've been a part of YHWH for one year now, and I really
            enjoy that I get to represent what we're passionate about with the
            team. Outside of YHWH and school, I really enjoy fellowshipping with
            my friends, playing and watching soccer, and eating!"
          </p>
        </div>
      )
    },
    {
      name: 'Nicole Lee',
      role: 'Marketing',
      imgSrc: require('../images/staff/nicole_lee.jpg'),
      fellowship: '',
      description: (
        <div>
          <p>
            "Hi! My name is Nicole Lee and I am member of YHWH’s marketing team.
            I am a junior at Cal studying Media Studies, hoping to honor Christ
            in all that I do."
          </p>
        </div>
      )
    },
    {
      name: 'Peter Thompson',
      role: 'Web',
      imgSrc: require('../images/staff/peter_thompson.jpg'),
      fellowship: 'Passion Livingwater',
      description: (
        <div>
          <p>
            "Hey, I'm Peter, and I'm currently a junior at Cal studying Computer
            Science. I joined YHWH my sophomore year, and being a part of this
            team and community has been such a blast. It's been so amazing to
            see how we've been able to carry out God's mission through our
            apparel, and I'm so excited to see what lies ahead. Apart from YHWH,
            I love to play basketball, go snowboarding, and play guitar."
          </p>
        </div>
      )
    }
    // {
    //   name: 'Tai-In Chung (Not done)',
    //   role: 'Role',
    //   imgSrc: require('../images/staff/tai-in_chung.jpg'),
    //   fellowship: 'Fellowship Name',
    //   description: (
    //     <div>
    //       <p>
    //         Before leaving for the trip, we prayed to God that He would show us
    //         how He can work through His sons and daughters if they are obedient
    //         and put full trust in Him. There were many times throughout this
    //         trip where we felt like we were not equipped enough to carry out a
    //         certain evangelical task (teaching classrooms, jail ministry,
    //         drug/rehab center ministry), but God clearly reminded us that He
    //         does not call the equipped, but He equips the called. We had
    //         countless valuable conversations with the Filipinos and saw many
    //         people accept Jesus into their hearts on this trip. It was an
    //         amazing experience living at What The Bible Says Church and spending
    //         so much time with the members. It was eye opening for us to see how
    //         missional the church members are to their hometown and to see how
    //         willing they are to preach the gospel to their neighbors.
    //       </p>
    //     </div>
    //   )
    // },
    // {
    //   name: 'Sooyoung Park (Not done)',
    //   role: 'Role',
    //   imgSrc: require('../images/staff/sooyoung_park.jpg'),
    //   fellowship: 'Presence Livingwater',
    //   description: (
    //     <div>
    //       <p>
    //         Before leaving for the trip, we prayed to God that He would show us
    //         how He can work through His sons and daughters if they are obedient
    //         and put full trust in Him. There were many times throughout this
    //         trip where we felt like we were not equipped enough to carry out a
    //         certain evangelical task (teaching classrooms, jail ministry,
    //         drug/rehab center ministry), but God clearly reminded us that He
    //         does not call the equipped, but He equips the called. We had
    //         countless valuable conversations with the Filipinos and saw many
    //         people accept Jesus into their hearts on this trip. It was an
    //         amazing experience living at What The Bible Says Church and spending
    //         so much time with the members. It was eye opening for us to see how
    //         missional the church members are to their hometown and to see how
    //         willing they are to preach the gospel to their neighbors.
    //       </p>
    //     </div>
    //   )
    // }
  ]
};

export default staff;
