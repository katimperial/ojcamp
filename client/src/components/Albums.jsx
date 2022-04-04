import axios from "axios"
import React, { useState, useEffect } from "react"


const Albums = ({props, displayAlbums}) => {

    const [albums, setAlbums] = useState()
    // const [selectedAlbum, setSelectedAlbum] = useState(null)

    const getAlbums = async () => {
        try {
            await axios.get(`http://localhost:3001/api/albums/`).then(
                response =>
                // console.log(response))
                setAlbums(response.data.projects))
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAlbums()
    }, [])

    return (
        <div>
            {albums ?
                albums.map((album) => (
                    <div key={album.id} className="card">
                        <h3>{album.artist}</h3>
                        <h4>{album.title}</h4>
                        <h5>{album.trackListings}</h5>
                        <h5>{album.releaseDate}</h5>
                        <h5>{album.label}</h5>
                        <img src={album.art} className="albumArt"/>
                    </div>
                )) : null
            }
        </div>
    )
}

export default Albums