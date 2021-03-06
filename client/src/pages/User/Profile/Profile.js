import React, { Component } from 'react';
import Actions from "../../../utils/API";
import Dashboard from '../../../components/Dashboard';
import { Col, Row } from "../../../components/Grid";
import Navbar from "../../../components/Navbar";
import Sidenav from "../../../components/Sidenav";
import CreateProject from '../../../components/CreateProject';
import ProjectButton from '../../../components/ProjectButton';
import NewProjectForm from '../../../components/NewProjectForm';
import ProjectAPI from '../../../utils/API-project';
import LogoutButton from '../../../components/LogoutButton';
import "./Profile.css";

import Chart1 from '../../../components/chart1'
import Chart2 from '../../../components/chart2'
import Chart3 from '../../../components/chart3';
import Chart4 from '../../../components/chart4';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAccount: false,
            edit: false,
            selectedProject: -1,
            budgetTotal: "",
            budgetDesign: "",
            budgetEngineering: "",
            budgetFinance: "",
            budgetHR: "",
            budgetMarketing: "",
            budgetSales: "",
            budgetSecurity: "",
            tasks: [],
            assignees: [],
            projects: [],
            chartSwitch: false
        }
    }

    componentDidMount() {
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

    loadProject = id => {

        this.setState({
            selectedProject: id
        });
    }

    handleEdit = () => {
        if (this.state.edit === false) {
            this.setState({
                edit: true
            })
        }
        else {
            ProjectAPI.findProjects().then((res) => {
                this.setState({ projects: res.data, edit: false})
            });
        }
    }

    handleChartSwitch = () => {
        if (this.state.chartSwitch === false) {
            this.setState({
                chartSwitch: true
            })
        }
        else {
            this.setState({
                chartSwitch: false
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
                                    <ProjectButton click={this.loadProject} id={project.id} name={project.name} key={project.id}  />
                                ))}
                                <CreateProject edit={this.handleEdit} />
                                <LogoutButton logout={this.handlelogout.bind(this)} />
                            </div>
                        </Sidenav>
                    </Col>
                    <Col className="xl10 l9">
                        {
                            !this.state.edit ?
                            <Dashboard projectID={this.state.selectedProject}>
                                {!this.state.chartSwitch ? <Chart1 /> : <Chart4/>}
                                <button onClick={this.handleChartSwitch} >Switch</button>
                                <Chart2/>
                                <Chart3/>
                            </Dashboard>
                                : <NewProjectForm edit={this.handleEdit} />
                        }
                    </Col>
                </Row >
            </div>
        )
    }
}

export default Profile;