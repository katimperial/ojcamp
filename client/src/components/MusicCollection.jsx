import React, { useState, useEffect } from "react"
import axios from "axios"
import Projects from "./Projects"

const MusicCollection = () => {
    // const [projects, setProjects] = useState([])
    // const [selectedProjects, setSelectedProjects] = useState(null)

    // useEffect(() => {
    //     async function getProjects() {
    //         const res = await axios.get("http://localhost:3001/api/projects/")
    //         console.log(res.data.results)
    //         setProjects(res.data.results)
    //     }
    //     getProjects()
    // })

    return (
        <div>
            {/* <Projects projects={ projects }/> */}
        </div>
    )

    // const [projects, setProjects] = useState([])

    // const [selectedProject, setSelectedProject] = useState(null)

    // useEffect(() => {
    //     async function getProjects() {
    //         const res = await axios.get("http://localhost:3001/api/projects/")
    //         setProjects(res.data.results)
    //     }
    //     getProjects()
    // }, [])


//     return (
//         <div>
//             <h1>Projects</h1>
//             <Projects projects={projects} />
//         </div>
//     )
 }

export default MusicCollection