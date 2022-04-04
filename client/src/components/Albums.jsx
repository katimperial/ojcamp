import axios from "axios"
import React, { useState, useEffect } from "react"


const Albums = ({props, displayAlbums}) => {

    const [albums, setAlbums] = useState([])
    // const [selectedAlbum, setSelectedAlbum] = useState(null)

    const getAlbums = async () => {
        try {
            let res = await axios.get(`http://localhost:3001/api/albums/`).then(
            setAlbums(res.data.projects))
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAlbums()
    }, [displayAlbums])

    return (
        <h2>{albums !== '' && albums}</h2>
        // <div className="albumsGrid">
        //     {
        //         // console.log(props.project.id)
        //         props.albums.map((album) => (
        //             <div key={album.id} className="card">
        //                 <h3>{album.title}</h3>
        //                 <img src={album.image} className="albumImage"/>
        //             </div>
        //         ))
        //     }
        // </div>
    )
}

export default Albums