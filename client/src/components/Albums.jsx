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
                        <h3>{album.title}</h3>
                    </div>
                )) : null
            }
        </div>
        // <div>{albums ? albums[0] : '' }</div>
        // <h2>{albums !== null && albums}</h2>
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