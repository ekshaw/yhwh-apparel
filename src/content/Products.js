import React from 'react';

const Products = [
  {
    title: 'Deliverance Hat',
    productId: 'deliverance_hat',
    release: 'May 2021',
    productType: 'HAT',
    price: 22.0,
    bibleVerse: 'PSALM 23:4',
    sizes: [{ size: 'OS', quantity: 60 }],
    description: (
      <div>
        <h3>
          In the most difficult moments of our lives, darkness is always easier to focus on than the
          promise of deliverance. In moments of trial, it’s difficult to cling to the light, to the
          promises and goodness of God. But we remind ourselves that the darkness is only dark as
          God is bright and glorious. As believers of Christ, we hold fast to fact that the threat
          of death in these dark valleys we traverse has already been vanquished by Jesus’ death on
          the cross--now, only the “shadow of death” (v4) remains.
        </h3>
        <h3>
          Let us rejoice in the character of God, brothers and sisters. For He doesn’t just make
          promises; He keeps them. He doesn’t just ask for our trust; He asks that we believe. And
          through all of that, He delivers us to the light.
        </h3>
      </div>
    ),
    images: [
      <img src={require('../images/designs/deliverance_hat_1.jpg')} />,
      <img src={require('../images/designs/deliverance_hat_2.jpg')} />,
      <img src={require('../images/designs/deliverance.jpg')} />,
      <img src={require('../images/designs/deliverance_4.jpg')} />
    ]
  },
  {
    title: 'Deliverance Sticker',
    productId: 'deliverance_sticker',
    release: 'May 2021',
    productType: 'STICKER',
    price: 2.0,
    bibleVerse: 'PSALM 34:4',
    sizes: [{ size: 'OS', quantity: 75 }],
    description: (
      <div>
        <h3>“I sought the Lord, and he answered me </h3>
        <h3>and delivered me from all my fears.” Psalm 34:4</h3>
        <h3>
          As Christians, we praise the Lord that we can find joy even in times of difficulty, pain,
          and anxiety. We rejoice that the Lord is willing to lean into us in our times of hurt and
          brokenness and that His promises never diminish no matter the distance we may feel from
          Him. If we only choose to seek the Lord and are faithful to His will, we trust that He
          will unwaveringly deliver us from our trials.
        </h3>
        <h3>
          May you feel God’s gentle, caring hands carry you through the darkness. For God “is near
          to the brokenhearted” (v18) and His promises are new every day.
        </h3>
      </div>
    ),
    images: [
      <img src={require('../images/designs/deliverance_sticker_1.jpg')} />,
      <img src={require('../images/designs/deliverance_sticker_2.jpg')} />,
      <img src={require('../images/designs/deliverance.jpg')} />,
      <img src={require('../images/designs/deliverance_4.jpg')} />
    ]
  },
  {
    title: 'Run With Endurance',
    productId: 'endurance',
    release: 'December 2019',
    productType: 'HOODIE',
    price: 38.0,
    bibleVerse: 'HEBREWS 12:1-3',
    sizes: [
      { size: 'S', quantity: 7 },
      { size: 'M', quantity: 3 },
      { size: 'L', quantity: 0 },
      { size: 'XL', quantity: 0 }
    ],
    description: (
      <div>
        <h3>
          “Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off
          everything that hinders and the sin that so easily entangles. And let us run with
          perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and
          perfecter of faith. For the joy set before him he endured the cross, scorning its shame,
          and sat down at the right hand of the throne of God. Consider him who endured such
          opposition from sinners, so that you will not grow weary and lose heart.” Hebrews 12:1-3
        </h3>
        <h3>
          Jesus endured verbal and physical mockery and hatred during his life on earth. He was
          ultimately given a criminal death sentence, and was crucified on a cross. Jesus endured it
          all for our sake. He saw joy in his sufferings because his death was the means to sanctify
          us and justify our eternal salvation. Jesus’ crucifixion tore the veil between us and God,
          paid for all our sins, and made a way for us to be reunited with our Heavenly Father.
        </h3>
        <h3>
          As Christians, we look forward to the finish line of our race: to be with our Father in
          Heaven. God knows this journey isn’t easy; the burdens and sins of this world are heavy.
          That is where Jesus becomes our living hope. We are promised that Jesus is the “founder
          and perfecter of our faith” (v2) and that He endured the cross so that we would “not grow
          weary or fainthearted” (v3). He is our strength when we are tired from carrying life’s
          burdens and fighting sin’s temptations. This is our expectation as we tread through the
          mountains and valleys of life.
        </h3>
        <h3>
          So, brothers and sisters, be encouraged by the everlasting promise and presence of our
          Heavenly Father and Lord. Let’s run this race with endurance.
        </h3>
      </div>
    ),
    images: [
      <img src={require('../images/designs/endurance.jpg')} />,
      <img src={require('../images/designs/endurance_2.jpg')} />,
      <img src={require('../images/designs/endurance_3.jpg')} />,
      <img src={require('../images/designs/endurance_4.jpg')} />
    ]
  },
  {
    title: 'Found by YHWH',
    productId: 'found',
    release: 'November 2018',
    productType: 'TSHIRT',
    price: 15.0,
    bibleVerse: 'LUKE 15',
    sizes: [
      { size: 'S', quantity: 35 },
      { size: 'M', quantity: 22 },
      { size: 'L', quantity: 16 },
      { size: 'XL', quantity: 0 }
    ],
    description: (
      <div>
        <h3>
          In Luke 15, Jesus tells three parables to illustrate God’s heart for the lost. A shepherd
          who seeks and finds a lost sheep in the open field, a woman finding a lost coin, and a
          father running to embrace his lost son.
        </h3>
        <h3>
          According to Isaiah, “we all, like sheep, have gone astray; we have turned—every one—to
          his own way” (Isaiah 53:6). He declares that “there is none who does good, not even one”
          (Psalm 14:3). The apostle Paul warns that “all have sinned and fall short of the glory of
          God” (Romans 3:23). We are lost because we, by the sin of our hearts, have turned away
          from Him. Like the prodigal son of Jesus’ parable, we seek to define good for ourselves
          and so squander the life we are given.
        </h3>
        <h3>
          But Jesus “came to seek and to save the lost” (Luke 19:10). We are fallen creatures with
          no innate hope of restoring ourselves into the Father’s household; the best we can aim for
          in our own strength—like the prodigal son—is to be a slave (Luke 15:19). But God, the
          merciful Father, sent His Son Jesus to humbly take on our weak frame (Philippians 2). And
          being wholly without sin, Jesus offered Himself as a sacrifice on the cross to take the
          punishment we deserved for turning away from the Father. On the third day, He rose again
          and ascended into heaven (Luke 24).
        </h3>
        <h3>
          When we have faith in the finished work of Jesus, the Good Shepherd who laid His life down
          for His sheep (John 10:1-18), we are set free from the bondage of sin and adopted as sons
          and daughters by God the Father (Galatians 4). And so He restores us from our lostness by
          giving us a new name, a new hope, and a new life that is secure in His steadfast love. By
          faith alone in Christ alone, we are <b>found by YHWH.</b>
        </h3>
      </div>
    ),
    images: [
      <img src={require('../images/designs/found.jpg')} />,
      <img src={require('../images/designs/found_2.jpg')} />,
      <img src={require('../images/designs/found_3.jpg')} />,
      <img src={require('../images/designs/found_4.jpg')} />
    ]
  },
  {
    title: 'Whale Pin',
    productId: 'itiswhale',
    release: '',
    productType: 'PIN',
    price: 7.0,
    bibleVerse: 'PSALM 118:24',
    sizes: [{ size: 'OS', quantity: 10 }],
    description: (
      <div>
        <h3>
          "When peace like a river attendeth my way. When sorrows like sea billows roll. Whatever my
          lot, Thou hast taught me to say, It is well, it is well with my soul.
        </h3>
        <h3>
          Though Satan should buffet, though trials should come. Let this blest assurance control.
          That Christ (yes, He has) has regarded my helpless estate. And has shed His own blood for
          my soul
        </h3>
        <h3>
          My sin, oh the bliss of this glorious thought (a thought). My sin, not in part, but the
          whole (every bit, every bit, all of it). Is nailed to the cross, and I bear it no more
          (yes!). Praise the Lord, praise the Lord, O my soul!
        </h3>
        <h3>
          And Lord, haste the day when my faith shall be sight. The clouds be rolled back as a
          scroll. The trump shall resound, and the Lord shall descend. Even so, it is well with my
          soul!
        </h3>
        <h3>
          It is well (it is well). With my soul (with my soul). It is well, it is well with my
          soul!"
        </h3>
      </div>
    ),
    images: [
      <img src={require('../images/designs/whale.jpg')} />,
      <img src={require('../images/designs/whale_2.jpg')} />,
      <img src={require('../images/designs/whale_3.jpg')} />,
      <img src={require('../images/designs/whale_4.jpg')} />
    ]
  },
  {
    title: 'Salt & Light',
    productId: 'saltandlight',
    release: '',
    productType: 'STICKER',
    price: 2.0,
    bibleVerse: 'MATTHEW 5:13-16',
    sizes: [{ size: 'OS', quantity: 19 }],
    description: (
      <div>
        <h3>
          “You are the salt of the earth, but if salt has lost its taste, how shall its saltiness be
          restored? It is no longer good for anything except to be thrown out and trampled under
          people's feet. You are the light of the world. A city set on a hill cannot be hidden. Nor
          do people light a lamp and put it under a basket, but on a stand, and it gives light to
          all in the house. In the same way, let your light shine before others, so that they may
          see your good works and give glory to your Father who is in heaven.” Matthew 5:13-16
        </h3>
        <h3>
          In His Sermon on the Mount, Jesus call His disciples, including us present-day Christians,
          the salt of the earth and the light of the world. Jesus points out that if salt loses its
          taste, it is absolutely useless. And He also notes that a lamp is useless unless put on a
          stand where it can shine its light visibly.
        </h3>
        <h3>
          The Christian life is a life of boldness and impact. Generations of professed Christians
          have settled for “Sunday Christianity,” but what good is it if all the lights in a city
          only turn on once a week in the same building, and leave the rest of the world in
          darkness? What good is it if salt stays in the shaker and leaves the rest of the world to
          rot?
        </h3>
        <h3>
          Jesus, the true light of the world (John 1:1-4), has secured for us salvation and new life
          through His death and resurrection, and He invites us to walk transformed and
          transformatively so that wherever we are, whether in class or at work or at home or with a
          club, others will “see [our] good works and give glory to [our] Father who is in heaven.”
          (Matthew 5:16) We hope you’ll use this sticker to daily remind yourself of your calling to
          display the glory of God by emulating Christ’s character and engaging in His mission.
        </h3>
      </div>
    ),
    images: [
      <img src={require('../images/designs/salt_light_1.jpg')} />,
      <img src={require('../images/designs/salt_light_2.jpg')} />,
      <img src={require('../images/designs/salt_light_3.jpg')} />,
      <img src={require('../images/designs/salt_light_4.jpg')} />
    ]
  }
];

export default Products;
