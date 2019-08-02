import React, { Component } from 'react';
import "./style.css";
import API from "../../utils/API-project";

class NewProjectForm extends Component {

    state = {
        title: ""
    }

    handleInputChange = event => {

        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    saveProject = () => {

        const body = {
            name: this.state.title
        }

        API.createProject(body)
            .then(res => {
                console.log("LOOK HERE=======================================" + res)
        })
        .catch(err => console.log(err.message));
    }


    render() {
        return (
            <div>
                <form id="styling">
                    <p id="typedTitle">{this.state.title}</p>
                    <input
                        id="inputName"
                        type="text"
                        value={this.state.title}
                        placeholder="Project Name"
                        onChange={this.handleInputChange}
                        name="title"
                    />
                    <button id="submitNewProject" onClick={this.saveProject}> Submit </button>
                </form>
            </div>
        )
    }
}

export default NewProjectForm