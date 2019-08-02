import React, { Component } from 'react';
import "./style.css"

class NewProjectForm extends Component {
    
    state = {
        title:"",
        budget:"",
        task: ""
    }
    
    
    handelInputChange = event =>{

        const {name,value } = event.target
        const {budget,values} = event.target
        this.setState({
            [name]:value,
            [budget]:values
        })

    }

    
    formRender() {
        if (this.state.title === "") {
            return (
                <div>
                    <form id="styling">
                        <p id="typedTitle">{this.state.title}</p>
                        <p id="typedBudget">{this.state.budget}</p>
                        <input
                            id="inputName"
                            type="text"
                            value={this.state.title}
                            placeholder="Project Name"
                            onChange={this.handelInputChange}
                            name="title"
                        />
                        <input
                            id="inputBudget"
                            type="text"
                            placeholder="Project Budget"
                            onChange={this.handelInputChange}
                            value={this.state.budget}
                            name="budget"
                        />
                        <button id="submitNewProject"> Submit </button>
                    </form>
                </div>
            )
        }
        else if (this.state.budget === "" && this.state.task === "") {
            <BudgetForm />
        }
        else {
            <AssigneeForm />
        }
    }

    render() {
        // return (
        //     <div>
        //         <form id="styling">
        //             <p id="typedTitle">{this.state.title}</p>
        //             <p id="typedBudget">{this.state.budget}</p>
        //             <input
        //                 id="inputName"
        //                 type="text"
        //                 value={this.state.title}
        //                 placeholder="Project Name"
        //                 onChange={this.handelInputChange}
        //                 name="title"
        //             />
        //             <input
        //                 id="inputBudget"
        //                 type="text"
        //                 placeholder="Project Budget"
        //                 onChange={this.handelInputChange}
        //                 value={this.state.budget}
        //                 name="budget"
        //             />
        //             <button id="submitNewProject"> Submit </button>
        //         </form>
        //     </div>
        // )
        <div>
            {this.formRender()}
        </div>
    }
}

export default NewProjectForm