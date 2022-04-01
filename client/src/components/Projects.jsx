import axios from "axios"
// import { process_params } from "express/lib/router"
import React, { useEffect } from "react"
import Albums from "./Albums"

const Projects = (props) => {

    return (
 
        <div className="grid">
            {
                props.projects.map((project) => (
                    <div key={project.id} className="card">
                        <h3>{project.name}</h3>
                    </div>
                ))
            }
        </div>

    )

}

export default Projects