import React, { Component } from 'react'
import Actions from "../../../utils/API";
import "./Profile.css"
import { Col, Row } from "../../../components/Grid"
import Navbar from "../../../components/Navbar"

// // import Panel from '../../../components/Panel'
// import Button from '../../../components/Button'
import Sidenav from "../../../components/Sidenav"

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

    // renderAccountContent(){
    //     return(
    //         <div>
    //             <h3>Welcome to your account panel.</h3>
    //             <h4>♡</h4>
    //             <Button float="none" handleBtnClick={this.handlelogout.bind(this)}>logout</Button>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                <Row>
                    <Col className="l3">
                        <Navbar/>
                        <Sidenav/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Profile;