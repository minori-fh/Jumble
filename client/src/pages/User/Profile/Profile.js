
import React, { Component } from 'react';
import Actions from "../../../utils/API";
import "./Profile.css";
// import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// import Panel from '../../../components/Panel';
// import Button from '../../../components/Button';
import Dashboard from '../../../components/Dashboard';
import { Col, Row } from "../../../components/Grid"
import Navbar from "../../../components/Navbar"
import Sidenav from "../../../components/Sidenav"
import Button from '../../../components/ProjectButtons';
import NewProjectForm from '../../../components/NewProjectForm'

//need to import components here


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAccount: false,
            edit: false
        }
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
        console.log("hi")
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

            <Row>
                <Col className="l3">
                    <Navbar />
                    <Sidenav>
                        <Button edit={this.handleEdit} logout={this.handlelogout.bind(this)}/>
                    </Sidenav>
                    {!this.state.edit ?
                        <Dashboard /> : <NewProjectForm />
                    }
                </Col>
            </Row>

        )
    }
}

export default Profile;