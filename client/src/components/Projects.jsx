import axios from "axios"
import React, { useState, useEffect } from "react"
import Albums from "./Albums"

const Projects = (props) => {

    const [displayAlbum, setDisplayAlbum] = useState(false)

    const toggleAlbums = () => {
        setDisplayAlbum(!displayAlbum)
    }

    const updateProject = async (id) => {
        try {
            await axios.put(`http://localhost:3001/api/projects/${id}`, {
                albums: albumTitle
            })
        } catch(err) {
            console.log(err)
        } window.location.reload()
    }

    const [albumTitle, setAlbumTitle] = useState('')

    const deleteProject = async (id) => {
        console.log(id)
        try {
            await axios.delete(`http://localhost:3001/api/projects/${id}`)
        } catch(err) {
            console.log(err)
        } window.location.reload()
    }

    return (
        <div className="grid">
            <button onClick={toggleAlbums}>{displayAlbum === false ? "View Albums" : "Clear Albums"} 
            </button>
            <div className="projectsGrid">
                {
                // console.log(props.project.id)
                    props.projects.map((project) => (
                        <div key={project.id} className="card">
                            <h3>{project.name}</h3>
                            <img src={project.image} className="projectImage"/>
                            <h4>Albums:</h4>
                            <h4>{project.albums}</h4>
                            <button onClick={()=>updateProject(project._id)}>Edit</button>
                            <input type="text" value={albumTitle} onChange={e => setAlbumTitle(e.target.value)}/>
                            <button onClick={()=>deleteProject(project._id)}>Delete</button>
                        </div>
                    ))

                }
                <div className="displayAlbum">
                    {displayAlbum ? <Albums /> : null}
                </div>
            </div>
        </div>
    )

}

export default Projects