import React, { Component } from 'react';
import "./sidenavButton.css"
import NewProjectForm from '../NewProjectForm';

class Button extends Component {

    state = {
        edit: false
    }

    showForm = () => {
        this.setState({
            edit: true
        })
        // return (
        //     <div>
        //         <input> Name </input>
        //         <input> Budget</input>
        //     </div>
        // )



    }



    render() {
        return (
            <div id="centerButtons">
                <button className="sideBtn">Project 1</button>
                <button className="sideBtn">Project 2</button>
                <button className="sideBtn">Project 3</button>
                <button className="sideBtn" onClick={this.showForm ? <NewProjectForm/> : <h3></h3>} >+Project</button>
            </div>
        )
    }
}

export default Button