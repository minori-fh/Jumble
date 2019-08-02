import React from 'react';
import "./sidenavButton.css"
// import NewProjectForm from '../NewProjectForm';

function Button (props)  {

    console.log(props.edit)

        return (
            <div id="centerButtons">
                <button className="sideBtn">Project 1</button>
                <button className="sideBtn">Project 2</button>
                <button className="sideBtn">Project 3</button>
                <button className="sideBtn" onClick={() => props.edit()} >+ Project</button>
            </div>
        );

    }
export default Button