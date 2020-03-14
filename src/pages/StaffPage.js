import React from 'react';
import Footer from '../components/Footer';
import '../styles/StaffPage.css';

const StaffPage = props => {
  return (
    <div className='staff-main-container'>
      <div className='staff-top-container'>
        <div className='staff-caption-container'>
          <div className='staff-caption'>
            <h1>Meet The Team.</h1>
          </div>
        </div>
        <div className='staff-description'>
          <h3>
            Hebrews 10: 24-25 tells us to "spur one another toward love and good
            deeds, meet up together, and encourage one another". As a team, we
            strive to inspire ourselves and others to serve God and carry out
            His mission. <br /> <br />
            We want to be open and personal with you. Meet the team members who
            help make YHWH such an awesome team!
          </h3>
        </div>
      </div>
      <div className='ceo-container'>
        <div className='ceo-title'>
          <h1>CEO</h1>
        </div>
        <div className='ceo-profile'>
          <div className='ceo-name'>
            <h2>Nicole Lee</h2>
          </div>
          <div className='ceo-bio'>
            <h3>
              "Hi! My name is Nicole Lee and I am currently a junior majoring in
              Media Studies. I am a part of Reformed University Fellowship (RUF)
              at Cal. I have been in YHWH for 2 years now and love that I am
              able to share my faith and do meaningful work alongside some
              really cool people. In my free time I enjoy cooking, writing, and
              binge watching shows from my childhood!."
            </h3>
          </div>
        </div>
        <div className='ceo-image'>
          <img src={require('../images/staff/nicole.jpg')} />
        </div>
        <div className='ceo-blank-image-box'></div>
      </div>
      <div className='vp-container'>
        <div className='vp-title'>
          <h1>VP</h1>
        </div>
        <div className='vp-profile'>
          <div className='vp-name'>
            <h2>Peter Thompson</h2>
          </div>
          <div className='vp-bio'>
            <h3>
              "Hey, I’m Peter, and I’m currently a junior at Cal studying
              Computer Science. I joined YHWH my sophomore year, and being a
              part of this team and community has been such a blessing! It’s
              been so amazing to see how we’ve been able to carry out God’s
              mission through our apparel, and I’m so excited to see how He’s
              going to continue to grow and work through us. Apart from YHWH, I
              love to play basketball, go snowboarding, and play guitar."
            </h3>
          </div>
        </div>
        <div className='vp-image'>
          <img src={require('../images/staff/peter.jpg')} />
        </div>
        <div className='vp-blank-image-box'></div>
      </div>
      <div className='marketing-container'>
        <div className='marketing-title'>
          <h1>Marketing.</h1>
        </div>
        <div className='marketing1-profile'>
          <div className='marketing1-name'>
            <h2>Sooyoung Park</h2>
          </div>
          <div className='marketing1-bio'>
            <h3>
              "I've been in YHWH since the beginning of my sophomore year.
              Through praying and sharing life with one another, it's been
              amazing not only hearing about how God has been working through
              each and every one of our lives, but also witnessing my personal
              growth in my faith. It's been such a blessing to be a part of a
              team that just loves God so wholeheartedly. Outside of YHWH and
              classes, I enjoy bullet journaling, playing basketball and piano,
              and going on food adventures!"
            </h3>
          </div>
          <div className='marketing1-image'>
            <img src={require('../images/staff/sooyoung.jpg')} />
          </div>
        </div>
        <div className='marketing2-profile'>
          <div className='marketing2-image'>
            <img src={require('../images/staff/kristen.jpg')} />
          </div>
          <div className='marketing2-name'>
            <h2>Kristen Yee</h2>
          </div>
          <div className='marketing2-bio'>
            <h3>
              "Hi, I'm Kristen, and I'm currently a freshman at Cal. I was
              initially drawn to YHWH because of its vision in empowering
              Christians to make their faith as explicit in their lives as the
              clothing that they wear, and I'm excited to be working on the team
              to continue to fulfill that mission. When I have some down-time,
              you can find me journaling, binge-watching K-dramas, or catching
              up with friends!"
            </h3>
          </div>
        </div>
        <div className='marketing-blank-image-box' />
      </div>
      <div className='design-team-container'>
        <div className='design-title'>
          <h1>Design.</h1>
        </div>
        <div className='design-members-container'>
          <div className='design1'>
            <div className='design1-profile'>
              <div className='design1-image'>
                <img src={require('../images/staff/aaron.jpg')} />
              </div>
              <div className='design1-name'>
                <h2>Aaron Wu</h2>
              </div>
              <div className='design1-bio'>
                <h3>
                  "Hi I'm Aaron and I'm a freshman at Berkeley. I joined YHWH
                  this semester because I wanted to be part of a creative outlet
                  for a higher purpose. As a member of the Design team, being in
                  YHWH has encouraged me to think about my faith abstractly and
                  artistically, and to translate that into biblical,
                  God-breathed visuals. Besides design, I like film photography,
                  hanging out with friends, reading the news, and exercising!"
                </h3>
              </div>
            </div>
          </div>
          <div className='design2'>
            <div className='design2-profile'>
              <div className='design2-image'>
                <img src={require('../images/staff/emily.jpg')} />
              </div>
              <div className='design2-name'>
                <h2>Emily Shaw</h2>
              </div>
              <div className='design2-bio'>
                <h3>
                  "What's up! I'm Emily and I'm a sophomore at Cal. This is my
                  first semester in YHWH and I feel so blessed to be able work
                  and grow alongside an amazing team to create designs and
                  clothing that spark conversations about God. In my free time,
                  I love hiking, swimming, cooking, and drinking boba."
                </h3>
              </div>
            </div>
          </div>
          <div className='design3'>
            <div className='design3-profile'>
              <div className='design3-image'>
                <img src={require('../images/staff/angela.jpg')} />
              </div>
              <div className='design3-name'>
                <h2>Angela Ea</h2>
              </div>
              <div className='design3-bio'>
                <h3>
                  "I have long been a fan of YHWH’s cozy apparel and liked how
                  boldly “Christian” the clothes were. I never pictured myself
                  joining until I saw a pretty set of photos get posted on
                  YHWH’s Instagram. I recognized a non-Christian friend of mine
                  modeling the Adonai sweater, and my jaw dropped. Seeing my
                  friend in that photo made me remember our greater goal as
                  Christians to spread God’s Kingdom..."
                  {/* I was reminded how
                  clothing can send a message and start conversations. Not only
                  that, but the aesthetics of the photo triggered my old love of
                  taking photos. I was eager to channel my passion for
                  photography into something productive and God glorifying. By
                  default, I was put on the design team. I am a bit clueless
                  when it comes to graphic design, and did not think I would be
                  helping too much in designing our products. But God has shown
                  me countless times how He uses weak people to make great
                  things happen. My time at YHWH has already been such a
                  blessing. There is so much symbolism and meaning that goes
                  into our designs from the color of the fabric or why something
                  might be embroidered. Each piece of clothing has so much
                  thought put into it, and I am so proud to be part of such a
                  hard-working team!" */}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='design-blank-image-box' />
      </div>
      <div className='ops-comm-container'>
        <div className='ops-title'>
          <h1>Operations.</h1>
        </div>
        <div className='comm-title'>
          <h1>Community Outreach.</h1>
        </div>
        <div className='ops1-profile'>
          <div className='ops1-name'>
            <h2>Matt Flores</h2>
          </div>
          <div className='ops1-bio'>
            <h3>
              "Hi, I'm Matt and I'm a sophomore at Cal studying Cognitive
              Science. This is my first semester in YHWH and its been such a
              blessing and privilege to be apart of a team so dedicated to
              making a product that glorifies God. This team has showed me how I
              can use my skills and passions (in logistics, communication, and
              web design) to bring honor to God, and I am so grateful to have
              the opportunity to play a small part in His big plan. I joined
              because I felt so compelled to start conversations with my
              clothing and my appearance, and this semester has showed me how
              God works powerfully through the smallest things, whether it be a
              necklace or a jacket. In my free time, I love dancing, playing
              volleyball, and exploring design."
            </h3>
          </div>
          <div className='ops1-image'>
            <img src={require('../images/staff/matt.jpg')} />
          </div>
          <div className='ops-blank-image-box' />
        </div>
        <div className='comm1-profile'>
          <div className='comm1-image'>
            <img src={require('../images/staff/rachel.jpg')} />
          </div>
          <div className='comm1-name'>
            <h2>Rachel Miller</h2>
          </div>
          <div className='comm1-bio'>
            <h3>
              "Hey! I’m Rachel, and I’m a freshman intending to study either
              psychology or social welfare. I was originally drawn to YHWH
              because of the message it proclaims about our unshakable identity
              in Christ. I also love how YHWH’s impact reaches not only those
              who buy and see the apparel around campus, but those who receive
              the profits we make. I’ve always had a heart for programs that
              meet people in their physical, emotional and/or spiritual need, so
              joining the community outreach team felt like a natural decision.
              I’m excited to see how God shows up through YHWH this semester and
              beyond. In my spare time I like to play soccer, thrift shop,
              re-discover old music and hang out with kids!"
            </h3>
          </div>
        </div>
      </div>
      <div className='connect-container'>
        <div className='connect-with-us'>
          <h1>Connect with Us.</h1>
        </div>
        <div className='connect-fb'>
          <div className='connect-fb-icon'>
            <a href='https://www.facebook.com/yhwhapparel'>
              <img
                src={require('../images/facebook_icon.png')}
                alt='facebook-icon'
              ></img>
            </a>
          </div>
          <div className='connect-fb-caption-container'>
            <div className='connect-fb-title'>
              <h4>FOLLOW AND LIKE US ON FACEBOOK</h4>
            </div>
            <div className='connect-fb-caption'>
              <h3>Get notified about Yhwh's events and campus sales.</h3>
            </div>
          </div>
        </div>
        <div className='connect-ig'>
          <div className='connect-ig-icon'>
            <a href='https://www.instagram.com/yhwhapparel'>
              <img
                src={require('../images/instagram_icon.png')}
                alt='instagram-icon'
              ></img>
            </a>
          </div>
          <div className='connect-ig-caption-container'>
            <div className='connect-ig-title'>
              <h4>FOLLOW US ON INSTAGRAM</h4>
            </div>
            <div className='connect-ig-caption'>
              <h3>Stay updated on latest drops.</h3>
            </div>
          </div>
        </div>
        <div className='connect-medium'>
          <div className='connect-medium-icon'>
            <a href='https://medium.com/@yhwhapparel/'>
              <img
                src={require('../images/medium_icon.png')}
                alt='medium-icon'
              ></img>
            </a>
          </div>
          <div className='connect-medium-caption-container'>
            <div className='connect-medium-title'>
              <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
            </div>
            <div className='connect-medium-caption'>
              <h3>
                Keep up with our company and the journey we are going through
                with monthly newsletters.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer color='#eae7e1' />
    </div>
  );
};

export default StaffPage;
