import React, { Component } from 'react';
import "./style.css"

class NewProjectForm extends Component {
    
    state = {
        title:"",
        budget:""
    }
    
    


    
    render(){
    return (
        <div>
            <form id="styling">
                <input
                type ="text"
                placeholder="Project Name"
                /> 
                <input
                type ="text"
                placeholder="Project Budget"
                />
            </form>
        </div>
    )
    }
}

export default NewProjectForm