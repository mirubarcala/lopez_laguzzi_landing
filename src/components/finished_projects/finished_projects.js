import React, { Component } from 'react'
import './finished_projects.scss'

import ProjectCard from '../common/project-card'

const FinishedProjects = (props) => {
    return(
    <div id="finishedProjects">
        <div>
            <span>
                <h1>obra</h1>
                <h2>terminadas</h2>
            </span>
        </div>
        <div>
            <ProjectCard/>
        </div>
    </div>
    )
    
}
export default FinishedProjects
