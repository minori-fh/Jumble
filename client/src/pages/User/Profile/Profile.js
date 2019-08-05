
import React, { Component } from 'react';
import Actions from "../../../utils/API";
import Dashboard from '../../../components/Dashboard';
import { Col, Row } from "../../../components/Grid"
import Navbar from "../../../components/Navbar"
import Sidenav from "../../../components/Sidenav"
import CreateProject from '../../../components/CreateProject';
import ProjectButton from '../../../components/ProjectButton';
import NewProjectForm from '../../../components/NewProjectForm';
import ProjectAPI from '../../../utils/API-project';
import BudgetAPI from '../../../utils/API-budget';
import TaskAPI from '../../../utils/API-task';
import AssigneeAPI from '../../../utils/API-assignee';
import LogoutButton from '../../../components/LogoutButton'
import "./Profile.css";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAccount: false,
            edit: false,
            budget: {},
            tasks: {},
            assignees: {},
            projects: []
        }
    }

    componentWillMount() {
        ProjectAPI.findProjects().then((res) => {
            this.setState({ projects: res.data })
        });
    }

    handlelogout() {
        Actions.handlelogout()
            .then(data => { return data.json() })
            .then(response => {
                this.setState({
                    isLoggedIn: response
                })

                if (!response) {
                    window.location.href = "/"
                }
            })
            .catch(err => console.log("err", err))
    }

    // loadProject = id => {
    //     BudgetAPI.getBudget(id).then(res =>
    //         console.log(res.data),
    //         this.setState({
    //             budget: res.data
    //         })
    //     );
    //     console.log("========================");
    //     TaskAPI.getTasks(id).then(res =>
    //         console.log(res.data),
    //         this.setState({
    //             budget: res.data
    //         })
    //     );
    //     console.log("========================");
    //     AssigneeAPI.getAssignees(id).then(res =>
    //         console.log(res.data),
    //         this.setState({
    //             budget: res.data
    //         })
    //     );
    // }

    handleEdit = () => {
        if (this.state.edit === false) {
            this.setState({
                edit: true
            })
        }
        else {
            this.setState({
                edit: false
            })
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Navbar />
                </Row>
                <Row>
                    <Col className="xl2 l3">
                        <Sidenav>
                            <div className="centerButtons">
                                {this.state.projects.map(project => (
                                    <ProjectButton onClick={this.loadProject(project.id)} id={project.id} name={project.name} key={project.id} />
                                ))}
                                <CreateProject edit={this.handleEdit} />
                                <LogoutButton logout={this.handlelogout.bind(this)} />
                            </div>
                        </Sidenav>
                    </Col>
                    <Col className="xl10 l9">
                        {
                            !this.state.edit ?
                                <Dashboard>
                                    {/* <Tasks tasks={this.state.tasks} />
                                    <Assignees assignees={this.state.assignees} />
                                    <Budget budget={this.state.budget} /> */}
                                </Dashboard> : <NewProjectForm edit={this.handleEdit} />
                        }
                    </Col>
                </Row >
            </div>
        )
    }
}

export default Profile;