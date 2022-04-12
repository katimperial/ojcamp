import React, { useState, useEffect } from "react"
import axios from "axios"
import Projects from "./Projects"
import Albums from "./Albums"

const MusicCollection = () => {
    const [projects, setProjects] = useState([])
    const [selectedProject, setSelectedProject] = useState(null)

    const getProjects = async () => {
        await axios.get(`http://localhost:3001/api/projects/`).then(
            response => 
            setProjects(response.data.projects))
    }

        useEffect(() => {
            getProjects()
    }, [])


    return (
        <div>
            <Projects projects={ projects } className="MC" />
        </div>
    )

 }


export default  MusicCollection 