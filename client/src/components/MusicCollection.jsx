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

    // const [displayAlbum, setDisplayAlbum] = useState(false)

    // const toggleAlbums = () => {
    //     setDisplayAlbum(!displayAlbum)
    // }


    // const [albums, setAlbums] = useState([])
    // const [selectedAlbum, setSelectedAlbum] = useState(null)

    // const getAlbums = async () => {
    //     await axios.get(`http://localhost:3001/api/albums/`).then(
    //         response =>
    //         // console.log(response))
    //         setAlbums(response.data.projects))
    // }

    //     useEffect(() => {
    //     getProjects()
    //     getAlbums()
    // }, [])

        useEffect(() => {
            getProjects()
    }, [])


    return (
        <div>
            <Projects projects={ projects } className="MC" />
            {/* <Albums displayAlbum={ displayAlbum } classname="MC" /> */}
        </div>
    )

 }


export default  MusicCollection 