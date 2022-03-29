const db = require('../db')
const Album = require('../models/album')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const albums = [
        { artist: 'XRay Eyeballs', 
        title: 'XRay Eyeballs s/t',
        trackListings: 'Po\'Jam early version, Fake Wedding early version',
        releaseDate: '7/1/2009',
        label: 'Night-People Records',
        art: 'https://f4.bcbits.com/img/a3189559857_16.jpg' },
        { artist: 'XRay Eyeballs',
        title: 'Nightwalkers',
        trackListings: 'Nightwalkers',
        releaseDate: '6/1/2010',
        label: 'Self released',
        art: ''},
        { artist: 'XRay Eyeballs',
        title: 'Egyptian Magician (Let\'s All Get High)',
        trackListings: 'Egyptian Magician (Let\'s All Get High)',
        releaseDate: '6/25/2010',
        label: 'Self released',
        art: ''},
        { artist: 'Xray Eyeballs',
        title: 'Crystal ep',
        trackListings: 'Crystal',
        releaseDate: '3/1/2011',
        label: 'HoZac Records',
        art: 'https://f4.bcbits.com/img/a0924199539_16.jpg' },
        { artist: 'Xray Eyeballs',
        title: 'Digital/ iTunes',
        trackListings: 'Gotham Low Lifes, Die Little Love',
        releaseDate: '3/8/2011',
        label: 'Self released',
        art: 'https://f4.bcbits.com/img/a4111960953_16.jpg' },
        { artist: 'Xray Eyeballs',
        title: 'Not Nothing',
        trackListings: 'Egyptian Magician, Drums of Dead',
        releaseDate: '4/19/2011',
        label: 'Kanine Records',
        art: 'https://f4.bcbits.com/img/a2359355431_16.jpg' },
        { artist: 'Xray Eyeballs',
        title: 'Sundae 7"',
        trackListings: 'Sundae',
        releaseDate: '8/30/2011',
        label: 'Hardly Art',
        art: 'https://f4.bcbits.com/img/a1088103273_16.jpg' },
        { artist: 'XRay Eyeballs',
        title: 'Splendor Squalor',
        trackListings: 'Four, Die Little Love (Menthol 100\'s Version), X, Blue, Syrup, Gator, Pill Riders, Cold Bones (Golden Triange cover), Scorpio, Gotham Low Lifes (Costumed Verison), Summer Daze',
        releaseDate: '2/28/2012',
        label: 'Kanine Records',
        art: 'https://f4.bcbits.com/img/a2441230918_16.jpg' },
    ]

    await Album.insertMany(plants)
    console.log("Created some albums!")
}
const run = async () => {
    await main()
    db.close()
}

run()