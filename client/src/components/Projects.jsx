import axios from "axios"
import React, { useState, useEffect } from "react"
import Albums from "./Albums"

const Projects = (props) => {

    const [displayAlbum, setDisplayAlbum] = useState(false)

    const toggleAlbums = () => {
        setDisplayAlbum(!displayAlbum)
    }

    return (
        <div className="projectsGrid">
            {
                // console.log(props.project.id)
                props.projects.map((project) => (
                    <div key={project.id} className="card">
                        <h3>{project.name}</h3>
                        <img src={project.image} className="projectImage"/>
                        <h4>{project.albums}</h4>
                    </div>
                ))

            }
            {displayAlbum ? <Albums /> : null}

            <button onClick={toggleAlbums}>{displayAlbum === false ? "View Albums" : "Clear Albums"} 
            </button>
        </div>
    )

}

export default Projects