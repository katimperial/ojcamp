const db = require('../db')
const Project = require('../models/project')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const projects = [
        { name: 'Xray Eyeballs', albums: 'Not Nothing, Splendor Squalor, Xray Eyeballs s/t, Nightwalkers, Egyptian Magician (Let\'s All Get High), Crystal ep, Digital/ iTunes, Sundae 7", Cassie Ramone/XRay Eyeballs - Split 7"', image: 'https://www.kaninerecords.com/wp-content/uploads/2019/10/Xray-Eyeballs-Credit-Jackie-Roman.jpg' },
        { name: 'Golden Triange', albums: 'Double Jointer, Golden Triangle/The Fresh & Onlys Split 7"', image: 'https://i.scdn.co/image/2a01adf2ee88eed5b8c56a9d9fb147baa0f06668' },
        { name: 'Chyna Wyte', albums: 'O Fun', image: 'https://i.scdn.co/image/2a01adf2ee88eed5b8c56a9d9fb147baa0f06668' },
        { name: 'Acetone 4', albums: 'Clover, Shapeshifter EP', image: 'https://f4.bcbits.com/img/0021517244_10.jpg' },
        { name: 'Chorizo', albums: 'Brujas, El Dikdador, SOCKS!, Sucia Ropa', image: 'https://1yd4xt11c7is39w2ckdxdls5-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/Chorizo-by-Tom-Jarmusch-1.jpg' },
        { name: 'OCDPP', albums: 'OCDPP', image: 'https://f4.bcbits.com/img/0019270810_10.jpg' },
        { name: 'Sahd Wyte Guyz', albums: 'Sahd Wyte Guyz, Sad Systems', image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/71764973_2220231104935559_7184214138439073792_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cEzz5QTXYK4AX8aySok&_nc_ht=scontent-lga3-1.xx&oh=00_AT8PT2e7bNtnqGrvh3YRi7GaxBMLyHnZ7Cz-Fa7c_3rxTQ&oe=6266C300' },
    ]

    await Project.insertMany(plants)
    console.log("Created some musical projects!")
}
const run = async () => {
    await main()
    db.close()
}

run()