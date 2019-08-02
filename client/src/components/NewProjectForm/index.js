import React, { Component } from 'react';
import "./style.css";
import API from "../../utils/API-project";
import TaskForm from "../TaskForm"

class NewProjectForm extends Component {

    state = {
        title: "",
        savedTitle: false,
        budget: "",
        tasks:[{
            name: "",
            assignees: []
        }]
    }

    handleInputChange = event => {

        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    saveProject = event => {
        event.preventDefault();
        const body = {
            name: this.state.title
        }
        this.setState({
            savedTitle: true
        });

        API.createProject(body)
            .then(res => {
                console.log("LOOK HERE=======================================" + res)
            })
            .catch(err => console.log(err.message));
    }

    addTask = event => {
        event.preventDefault();
        const newTask = this.state.tasks;
        newTask.push({name: "", assignees: [""]});
        console.log(newTask);
        this.setState({
            tasks: newTask
        });
    }

    formRender() {
        if (this.state.savedTitle === false) {
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
                        <button id="submitNewProject" onClick={this.saveProject}> Next </button>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div>
                    <form id="styling">
                        <p id="typedBudget">{this.state.budget}</p>
                        <input
                            id="inputBudget"
                            type="text"
                            value={this.state.budget}
                            placeholder="Budget"
                            onChange={this.handleInputChange}
                            name="budget"
                        />
                        {this.state.tasks.map((task, i) => {
                            return (<TaskForm key={i}/>);
                        })}
                        <button id="addTask" onClick={this.addTask}>+Task</button>
                    </form>
                </div>
            )

        }
    }

    render() {
        return (
            <div>
                {this.formRender()}
            </div>
            // <div>
            //     <form id="styling">
            //         <p id="typedTitle">{this.state.title}</p>
            //         <input
            //             id="inputName"
            //             type="text"
            //             value={this.state.title}
            //             placeholder="Project Name"
            //             onChange={this.handleInputChange}
            //             name="title"
            //         />
            //         <button id="submitNewProject" onClick={this.saveProject}> Submit </button>
            //     </form>
            // </div>
        )
    }
}

export default NewProjectForm