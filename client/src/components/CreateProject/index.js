import React from 'react';

function CreateProject(props) {

    return (
        <button className="sideBtn active" onClick={() => props.edit()} >+ Project</button>
    );

}
export default CreateProject