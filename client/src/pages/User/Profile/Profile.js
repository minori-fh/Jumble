import React, { Component } from 'react';
import Actions from "../../../utils/API";
import "./Profile.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Panel from '../../../components/Panel';
import Button from '../../../components/Button';
import Dashboard from '../../../components/Dashboard';
//need to import components here

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAccount: false
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

    render() {
        return (
            // <Panel>
            //     {this.renderAccountContent()}
            // </Panel>
            <Dashboard>
                <h1>Hi</h1>
            </Dashboard>
        )
    }
}

export default Profile;