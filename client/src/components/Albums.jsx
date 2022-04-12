import axios from "axios"
import React, { useState, useEffect } from "react"


const Albums = ({props, displayAlbums}) => {

    const [albums, setAlbums] = useState()

    const getAlbums = async () => {
        try {
            await axios.get(`http://localhost:3001/api/albums/`).then(
                response =>
                setAlbums(response.data.projects))
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAlbums()
    }, [])

    const deleteAlbum = async (id) => {
        console.log(id)
        try {
            await axios.delete(`http://localhost:3001/api/albums/${id}`)
        } catch(err) {
            console.log(err)
        } window.location.reload()
    }

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
                        <button onClick={()=>deleteAlbum(album._id)}>Delete</button>
                    </div>
                )) : null
            }
        </div>
    )
}

export default Albums