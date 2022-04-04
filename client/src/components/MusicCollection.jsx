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
            // console.log(response))
            setProjects(response.data.projects))
    }


    const [albums, setAlbums] = useState([])
    const [selectedAlbum, setSelectedAlbum] = useState(null)

    const getAlbums = async () => {
        await axios.get(`http://localhost:3001/api/albums/`).then(
            response =>
            // console.log(response))
            setAlbums(response.data.projects))
    }

        useEffect(() => {
        getProjects()
        getAlbums()
    }, [])


    return (
        <div>
            <Projects projects={ projects } />
            <Albums albums={ albums } />
        </div>
    )

 }


export default  MusicCollection 