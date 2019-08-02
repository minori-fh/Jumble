import React from 'react';

function ProjectButton(props) {

    return (
        <button id={props.id} className="sideBtn active" >{props.name}</button>
    );

}
export default ProjectButton