import React from 'react';

const Products = [
    {
        title: 'Run With Endurance',
        release: 'December 2019',
        productType: 'HOODIE',
        price: '$38.00',
        bibleVerse: 'HEBREWS 12:1-3',
        sizes: [{ size: 'S', quantity: 1 }, { size: 'M', quantity: 0 }, { size: 'L', quantity: 5 }],
        contentAndCare: 'ewww this looks gross rn lol',
        sizeAndFit: 'Model is 5\'7\" and wearing a small. eek this looks cluttered ah.',
        description: (
            <div>
                <h3>
                    “Therefore, since we are surrounded by such a great cloud of
                    witnesses, let us throw off everything that hinders and the sin that
                    so easily entangles. And let us run with perseverance the race marked
                    out for us, fixing our eyes on Jesus, the pioneer and perfecter of
                    faith. For the joy set before him he endured the cross, scorning its
                    shame, and sat down at the right hand of the throne of God. Consider
                    him who endured such opposition from sinners, so that you will not
                    grow weary and lose heart.” Hebrews 12:1-3
            </h3>
                <h3>
                    Jesus endured verbal and physical mockery and hatred during his life
                    on earth. He was ultimately given a criminal death sentence, and was
                    crucified on a cross. Jesus endured it all for our sake. He saw joy in
                    his sufferings because his death was the means to sanctify us and
                    justify our eternal salvation. Jesus’ crucifixion tore the veil
                    between us and God, paid for all our sins, and made a way for us to be
                    reunited with our Heavenly Father.
            </h3>
                <h3>
                    As Christians, we look forward to the finish line of our race: to be
                    with our Father in Heaven. God knows this journey isn’t easy; the
                    burdens and sins of this world are heavy. That is where Jesus becomes
                    our living hope. We are promised that Jesus is the “founder and
                    perfecter of our faith” (v2) and that He endured the cross so that we
                    would “not grow weary or fainthearted” (v3). He is our strength when
                    we are tired from carrying life’s burdens and fighting sin’s
                    temptations. This is our expectation as we tread through the mountains
                    and valleys of life.
            </h3>
                {/* <h3>
          So, brothers and sisters, be encouraged by the everlasting promise and
          presence of our Heavenly Father and Lord. Let’s run this race with
          endurance.
            </h3> */}
            </div>
        ),
        images: [< img src={require('../images/designs/endurance.jpg')} />, < img src={require('../images/designs/endurance.jpg')} />, <img src={require('../images/designs/endurance.jpg')} />
        ],
    },
    {
        title: 'Found by YHWH',
        release: 'November 2018',
        productType: 'TSHIRT',
        price: '$15.00',
        bibleVerse: 'LUKE 15',
        sizes: [{ size: 'S', quantity: 1 }, { size: 'M', quantity: 0 }, { size: 'L', quantity: 5 }],
        contentAndCare: 'uhhh idk about content and care rn lol',
        sizeAndFit: 'Model is 5\'7\" and wearing a small.',
        description: (
            <div>
                <h3>
                    In Luke 15, Jesus tells three parables to illustrate God’s heart for
                    the lost. A shepherd who seeks and finds a lost sheep in the open
                    field, a woman finding a lost coin, and a father running to embrace
                    his lost son.
            </h3>
                <h3>
                    According to Isaiah, “we all, like sheep, have gone astray; we have
                    turned—every one—to his own way” (Isaiah 53:6). He declares that
                    “there is none who does good, not even one” (Psalm 14:3). The apostle
                    Paul warns that “all have sinned and fall short of the glory of God”
                    (Romans 3:23). We are lost because we, by the sin of our hearts, have
                    turned away from Him. Like the prodigal son of Jesus’ parable, we seek
                    to define good for ourselves and so squander the life we are given.
            </h3>
                <h3>
                    But Jesus “came to seek and to save the lost” (Luke 19:10). We are
                    fallen creatures with no innate hope of restoring ourselves into the
                    Father’s household; the best we can aim for in our own strength—like
                    the prodigal son—is to be a slave (Luke 15:19). But God, the merciful
                    Father, sent His Son Jesus to humbly take on our weak frame
                    (Philippians 2). And being wholly without sin, Jesus offered Himself
                    as a sacrifice on the cross to take the punishment we deserved for
                    turning away from the Father. On the third day, He rose again and
                    ascended into heaven (Luke 24).
            </h3>
                <h3>
                    When we have faith in the finished work of Jesus, the Good Shepherd
                    who laid His life down for His sheep (John 10:1-18), we are set free
                    from the bondage of sin and adopted as sons and daughters by God the
                    Father (Galatians 4). And so He restores us from our lostness by
                    giving us a new name, a new hope, and a new life that is secure in His
              steadfast love. By faith alone in Christ alone, we are{' '}
                    <b>found by YHWH.</b>
                </h3>
            </div>
        ),
        images: [< img src={require('../images/designs/found.jpg')} />, < img src={require('../images/designs/found.jpg')} />, < img src={require('../images/designs/found.jpg')} />]
    },
    {
        title: 'Whale Pin',
        release: '',
        productType: 'PIN',
        price: '$7.00',
        bibleVerse: '',
        sizes: [{ size: 'S', quantity: 1 }, { size: 'M', quantity: 0 }, { size: 'L', quantity: 5 }],
        contentAndCare: 'uhhh idk about content and care rn lol',
        sizeAndFit: 'Model is 5\'7\" and wearing a small.',
        description: (
            <div>
                <h3>
                </h3>
            </div>
        ),
        images: [< img src={require('../images/designs/whale.jpg')} />, < img src={require('../images/designs/whale.jpg')} />, < img src={require('../images/designs/whale.jpg')} />]
    },
    {
        title: 'Salt & Light',
        release: '',
        productType: 'STICKER',
        price: '$1.00',
        bibleVerse: 'MATTHEW 5:13-16',
        sizes: [{ size: 'S', quantity: 1 }, { size: 'M', quantity: 0 }, { size: 'L', quantity: 5 }],
        contentAndCare: 'uhhh idk about content and care rn lol',
        sizeAndFit: 'Model is 5\'7\" and wearing a small.',
        description: (
            <div>
                <h3>
                    Be a salt and light to the world. Matthew 5:13-16
            </h3>
            </div>
        ),
        images: [< img src={require('../images/designs/found.jpg')} />, < img src={require('../images/designs/found.jpg')} />, < img src={require('../images/designs/found.jpg')} />]
    },
];

export default Products;