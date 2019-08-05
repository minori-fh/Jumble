import React, { Component } from 'react';
import "./style.css";
import API from "../../utils/API-project";
import APIBudget from "../../utils/API-budget"
import APITask from "../../utils/API-task"
import APIAssignee from "../../utils/API-assignee"
import TaskForm from "../TaskForm"

class NewProjectForm extends Component {

    state = {
        title: "",
        savedTitle: false,
        budget: "",
        projectID: 0,
        tasks: [{
            name: "",
            assignee: ""
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
                console.log(res.data.id)
                this.setState({
                    projectID: res.data.id
                });
                console.log("--------------" + this.state.projectID)
            })
            .catch(err => console.log(err.message));
    }

    addTask = event => {
        event.preventDefault();
        const newTask = this.state.tasks;
        newTask.push({ name: "", assignees: [""] });
        this.setState({
            tasks: newTask
        });
    }

    saveBudgetTask = event => {
        event.preventDefault();
        const body = {
            total: this.state.budget,
            ProjectId: this.state.projectID
        }
        APIBudget.createBudget(body)
            .then(res => {
                console.log("lets hope this works!!!!!!!!", res);
            })

        for (let i = 0; i < this.state.tasks.length; i++) {
            let info = {
                task: this.state.tasks[i].name,
                ProjectId: this.state.projectID
            }

            APITask.createTask(info)
                .then(res => {
                    console.log(res)
                })

            let person = {
                name: this.state.tasks[i].assignee,
                projectID: this.state.projectID
            }

            APIAssignee.createAssignee(person)
                .then(res => {
                    console.log(res)
                })
        }
    }


    formRender() {
        if (this.state.savedTitle === false) {
            return (
                <div>
                    <form id="styling">
                        <p id="typedTitle">{this.state.title}</p>
                        <input required
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
                        <input required
                            id="inputBudget"
                            type="text"
                            value={this.state.budget}
                            placeholder="Budget"
                            onChange={this.handleInputChange}
                            name="budget"
                        />
                        {this.state.tasks.map((task, i) => {
                            return (<TaskForm key={i} />);
                        })}
                        <button id="addTask" onClick={this.addTask}>+Task</button>
                        <button id="submit" onClick={this.saveBudgetTask}>Submit</button>
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
        )
    }
}

export default NewProjectForm