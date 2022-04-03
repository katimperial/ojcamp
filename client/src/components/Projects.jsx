import axios from "axios"
// import { process_params } from "express/lib/router"
import React, { useState, useEffect } from "react"
import Albums from "./Albums"

const Projects = (props) => {

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
        </div>
    )

}

export default Projects