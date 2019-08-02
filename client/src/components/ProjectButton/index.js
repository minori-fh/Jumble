import React from 'react';
import "./sidenavButton.css";

function ProjectButton (props)  {

        return (
            <div id="centerButtons">
                <button className="sideBtn ">Project 1</button>
                <button className="sideBtn">Project 2</button>
                <button className="sideBtn">Project 3</button>
                <button className="sideBtn active" onClick={() => props.edit()} >+ Project</button>
            </div>
        );

    }
export default ProjectButton