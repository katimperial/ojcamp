import axios from "axios"
import React, { useState, useEffect } from "react"

const Albums = (props) => {
    return (
        <div className="albumsGrid">
            {
                // console.log(props.project.id)
                props.albums.map((album) => (
                    <div key={album.project_id} className="card">
                        <h3>{album.title}</h3>
                        <img src={album.image} className="albumImage"/>
                        <h4>{album.albums}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default Albums