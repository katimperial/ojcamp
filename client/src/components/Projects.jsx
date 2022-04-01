import axios from "axios"
// import { process_params } from "express/lib/router"
import React, { useState, useEffect } from "react"
import Albums from "./Albums"

const Projects = ({displayProject}) => {
    
    const [project, setProject] = useState()
    
    const getProject = async () => {
        try {
            let res = await axios.get("http://localhost:3001/api/projects/")
            setProject(res.project.name)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProject()
    }, [displayProject])

    return (
        <h3>{project !== '' && project}</h3>
    )
}

// const Projects = (props) => {

//     return (
 
//         <div className="grid">
//             {
//                 props.projects.map((project) => (
//                     <div key={project.id} className="card">
//                         <h3>{project.name}</h3>
//                     </div>
//                 ))
//             }
//         </div>

//     )

// }

export default Projects