import axios from "axios"
import React, { useState, useEffect } from "react"


const Albums = (props) => {

    return (
        <div className="albumsGrid">
            {
                // console.log(props.project.id)
                props.albums.map((album) => (
                    <div key={album.id} className="card">
                        <h3>{album.title}</h3>
                        <img src={album.image} className="albumImage"/>
                    </div>
                ))
            }
        </div>
    )
}

export default Albums