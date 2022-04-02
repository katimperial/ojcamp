import React, { useState, useEffect } from "react"
import axios from "axios"
import Projects from "./Projects"

const MusicCollection = () => {
    // setLoading(true)
    const [projects, setProjects] = useState([])
    const [selectedProject, setSelectedProject] = useState(null)

    const getProjects = async () => {
        await axios.get(`http://localhost:3001/api/projects/`).then(
            response => 
            // console.log(response))
            setProjects(response.data.projects))

    }

    useEffect(() => {
        getProjects()
    }, [])

    // function getProjects() {
    //     const res = await axios.get(`http://localhost:3001/api/projects/`)
    //     setProjects(res.data.results)
    // }
    // useEffect(() => {
    //   async function getProjects() {
    //     const res = await axios.get(`http://localhost:3001/api/projects/`)
    //     setProjects(res.data.results)
    //   }
    //   getProjects()
    // })
    // setLoading(false)

    return (
        // {(!loading) && (
        <div>
            <Projects projects={ projects } />
        </div>
        // )}
    )

 }

export default MusicCollection