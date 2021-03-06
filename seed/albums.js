const db = require('../db')
const { Project, Album } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const xRayEyeballs = await Project.find({ name: 'Xray Eyeballs' })
    const goldenTriangle = await Project.find({ name: 'Golden Triange' })
    const chinaWyte = await Project.find({ name: 'China Wyte' })
    const acetone4 = await Project.find({ name: 'Acetone 4' })
    const chorizo = await Project.find({ name: 'Chorizo' })
    const ocdpp = await Project.find({ name: 'OCDPP' })
    const sahdWyteGuyz = await Project.find({ name: 'Sahd Wyte Guyz' })

    const albums = [
        { artist: 'XRay Eyeballs', 
        title: 'XRay Eyeballs s/t',
        trackListings: 'Po\'Jam early version, Fake Wedding early version',
        releaseDate: '7/1/2009',
        label: 'Night-People Records',
        art: 'https://f4.bcbits.com/img/a3189559857_16.jpg',
        project_id: xRayEyeballs[0]._id 
        },
        { artist: 'XRay Eyeballs',
        title: 'Nightwalkers',
        trackListings: 'Nightwalkers',
        releaseDate: '6/1/2010',
        label: 'Self released',
        art: 'https://i.ytimg.com/vi/0TniQAmesEA/hqdefault.jpg',
        project_id: xRayEyeballs[0]._id 
        },
        { artist: 'XRay Eyeballs',
        title: 'Egyptian Magician (Let\'s All Get High)',
        trackListings: 'Egyptian Magician (Let\'s All Get High)',
        releaseDate: '6/25/2010',
        label: 'Self released',
        art: 'https://i.ytimg.com/vi/MDclyuu0qso/maxresdefault.jpg',
        project_id: xRayEyeballs[0]._id 
        },
        { artist: 'Xray Eyeballs',
        title: 'Crystal ep',
        trackListings: 'Crystal, Broken Beds, Kamsing Nights',
        releaseDate: '3/1/2011',
        label: 'HoZac Records',
        art: 'https://f4.bcbits.com/img/a0924199539_16.jpg',
        project_id: xRayEyeballs[0]._id 
        },
        { artist: 'Xray Eyeballs',
        title: 'Crystal',
        trackListings: 'Crystal, Die Little Love, Gotham Low Lives',
        releaseDate: '3/8/2011',
        label: 'Kanine Records',
        art: 'https://i.scdn.co/image/ab67616d00001e02545e70304485595d89572829',
        project_id: xRayEyeballs[0]._id 
        },
        { artist: 'Xray Eyeballs',
        title: 'Digital/ iTunes',
        trackListings: 'Gotham Low Lifes, Die Little Love',
        releaseDate: '3/8/2011',
        label: 'Self released',
        art: 'https://f4.bcbits.com/img/a4111960953_16.jpg',
        project_id: xRayEyeballs[0]._id 
        },
        { artist: 'Xray Eyeballs',
        title: 'Not Nothing',
        trackListings: 'Egyptian Magician, Drums of Dead',
        releaseDate: '4/19/2011',
        label: 'Kanine Records',
        art: 'https://f4.bcbits.com/img/a2359355431_16.jpg',
        project_id: xRayEyeballs[0]._id 
        },
        { artist: 'Xray Eyeballs',
        title: 'Sundae 7"',
        trackListings: 'Sundae',
        releaseDate: '8/30/2011',
        label: 'Hardly Art',
        art: 'https://f4.bcbits.com/img/a1088103273_16.jpg',
        project_id: xRayEyeballs[0]._id 
        },
        { artist: 'XRay Eyeballs',
        title: 'Splendor Squalor',
        trackListings: 'Four, Die Little Love (Menthol 100\'s Version), X, Blue, Syrup, Gator, Pill Riders, Cold Bones (Golden Triange cover), Scorpio, Gotham Low Lifes (Costumed Verison), Summer Daze',
        releaseDate: '2/28/2012',
        label: 'Kanine Records',
        art: 'https://f4.bcbits.com/img/a2441230918_16.jpg',
        project_id: xRayEyeballs[0]._id 
        },
        { artist: 'XRay Eyeballs',
        title: 'I\'m a Freak/Only You',
        trackListings: 'I\'m a Freak, Only You',
        releaseDate: '11/1/2013',
        label: 'Siluh Records',
        art: 'https://img.discogs.com/Tr49bGRLWMzYIlVtCmZsDWDgdj8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-5065347-1383558830-8819.jpeg.jpg',
        project_id: xRayEyeballs[0]._id 
        },
        { artist: 'Golden Triangle',
        title: 'Golden Triangle',
        trackListings: 'Prize Fighter, Ghosts, Red Coats, Witchita, Night Brigade, 2020, Annettes Got the Hits',
        releaseDate: '1/20/2009',
        label: 'Kemado Records',
        art: 'http://fensepost.com/main/images/albums/g/golden_triangle_-_golden_triangle.jpg',
        project_id: goldenTriangle[0]._id 
        },
        { artist: 'Golden Triangle',
        title: 'Double Jointer',
        trackListings: 'Cinco de Mayo, Blood and Arrow, Neon Noose, I Want to Know, Jellyroll, Death to Fame, Rollercoaster, Eyes to See, The Melting Wall, Jinx, Arson Wells',
        releaseDate: '3/2/2010',
        label: 'Hardly Art',
        art: 'https://f4.bcbits.com/img/a0390377070_16.jpg',
        project_id: goldenTriangle[0]._id 
        },
        { artist: 'Golden Triangle',
        title: 'Golden Triangle/The Fresh & Onlys Split 7"',
        trackListings: 'Cold Bones - Golden Triangle, Jungle Jim - Golden Triangle, Head of Steam - The Fresh & Onlys, I\'m Not Myself Today - The Fresh & Onlys',
        releaseDate: '4/13/2010',
        label: 'Hardly Art',
        art: 'https://f4.bcbits.com/img/a2751095853_16.jpg',
        project_id: goldenTriangle[0]._id 
        },
        { artist: 'China Wyte',
        title: 'O Fun',
        trackListings: 'No Fun, Donuts, Upgrade',
        releaseDate: '6/26/2020',
        label: 'Blank Check Records',
        art: 'https://f4.bcbits.com/img/a2057058097_10.jpg',
        project_id: chinaWyte[0]._id 
        },
        { artist: 'Acetone 4',
        title: 'Clover',
        trackListings: 'Linden Hill, Pinecones, PSR, Magical Influence',
        releaseDate: '1/2/2021',
        label: 'Pet Hospital Records',
        art: 'https://f4.bcbits.com/img/a0885868984_16.jpg',
        project_id: acetone4[0]._id 
        },
        { artist: 'Acetone 4',
        title: 'Shapeshifter EP',
        trackListings: 'Shapeshifter, Tea Kettle',
        releaseDate: '2/19/2021',
        label: 'Pet Hospital Records',
        art: 'https://f4.bcbits.com/img/a0005705265_10.jpg',
        project_id: acetone4[0]._id 
        },
        { artist: 'Chorizo',
        title: 'El Dikdador',
        trackListings: 'El Dikdador',
        releaseDate: '11/30/2017',
        label: 'Self released',
        art: 'https://f4.bcbits.com/img/a4207919254_16.jpg',
        project_id: chorizo[0]._id 
        },
        { artist: 'Chorizo',
        title: 'SOCKS!',
        trackListings: 'SOCKS!',
        releaseDate: '5/10/2017',
        label: 'Self released',
        art: 'https://f4.bcbits.com/img/a4193933835_16.jpg',
        project_id: chorizo[0]._id 
        },
        { artist: 'Chorizo',
        title: 'Sucia Ropa',
        trackListings: 'Sucia Ropa',
        releaseDate: '7/12/2018',
        label: 'Self released',
        art: 'https://f4.bcbits.com/img/a3287387741_16.jpg',
        project_id: chorizo[0]._id 
        },
        { artist: 'OCDPP',
        title: '7" LP',
        trackListings: 'Takin\' Shots, Drinkin\' on the Stoop, It\'s OK, Redhead Bedhead, Test Tude Baby, Snow, Plastic Flowers',
        releaseDate: '4/1/2020',
        label: '1469223 Records',
        art: 'https://f4.bcbits.com/img/a0950866359_16.jpg',
        project_id: ocdpp[0]._id 
        },
        { artist: 'Sahd Wyte Guyz',
        title: 'Sahd Wyte Guyz',
        trackListings: 'No Chance, Sad Girl, Sad Sex, Sadidas, Half Mutant, Fashion, User, No Home, Black Gloves, Pick Up',
        releaseDate: '10/1/2019',
        label: 'Pet Hospital Records',
        art: 'https://f4.bcbits.com/img/a0173098879_10.jpg',
        project_id: sahdWyteGuyz[0]._id 
        },
        { artist: 'Sahd Wyte Guyz',
        title: 'Sad Systems',
        trackListings: 'Gray Ghost, Blue, Crystal',
        releaseDate: '10/1/2019',
        label: 'Pet Hospital Records',
        art: 'https://f4.bcbits.com/img/a1767544542_16.jpg',
        project_id: sahdWyteGuyz[0]._id 
        },
    ]

    await Album.insertMany(albums)
    console.log("Created some albums!")
}
const run = async () => {
    await main()
    db.close()
}

run()