
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
import LogoutButton from '../../../components/LogoutButton'
import "./Profile.css";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAccount: false,
            edit: false,
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

    // renderAccountContent() {
    //     return (
    //         <Router>
    //             <div>
    //                 {/* <Sidenav /> */}
    //                 <Switch>
    //                     {/* we need to change :uuid and :projectid with pulled info at state */}
    //                     {/* <Route exact path="/dashboard/:uuid/:projectid" component={Dashboard}/> */}
    //                     {/* <Route exact path ="/dashboard/:uuid/:projectid/form" component={Form}  /> */}
    //                 </Switch>
    //                 <Button float="none" handleBtnClick={this.handlelogout.bind(this)}>logout</Button>
    //             </div>
    //         </Router>
    //     )
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
            // <Panel>
            //     {this.renderAccountContent()}
            // </Panel>
            <div>
                <Row>
                    <Navbar />
                </Row>
                <Row>
                    <Col className="xl2 l3">
                        <Sidenav>
                            <div className="centerButtons">
                                {this.state.projects.map(project => (
                                    <ProjectButton id={project.id} name={project.name} key={project.id} />
                                ))}
                                <CreateProject edit={this.handleEdit} />
                                <LogoutButton logout={this.handlelogout.bind(this)}/>
                            </div>
                        </Sidenav>
                    </Col>
                    <Col className="xl10 l9">
                        {
                            !this.state.edit ?
                                <Dashboard /> : <NewProjectForm edit={this.handleEdit} />
                        }
                    </Col>
                </Row >
            </div>
        )
    }
}

export default Profile;