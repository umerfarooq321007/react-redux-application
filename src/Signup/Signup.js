import React from 'react';
import './Signup.css';
import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
    REGISTER
} from '../constants/actionTypes';



const mapStateToProps = state => ({ ...state.auth });


const mapDispatchToProps = dispatch => ({

    onSubmit: (data) => {
        console.log("Before Dispatch")
        dispatch({ type: REGISTER, payload: data })
    }


});



class Signup extends Component {
    constructor() {
        super();
    }
    state = {
        email: "",
        password: "",
        userName: ""
    }

    signup = async (e) => {
        console.log("Test");
        const response = axios.post(
            'http://18.219.17.99:3000/users/signup',
            {
                "email": this.state.email,
                "password": this.state.password,
                "name": this.state.userName
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                    //other header fields
                }
            }
        ).then((response) => {
            console.log(response.data);
            if (response.data) {
                const resData = response.data;
                if (resData.token) {
                    console.log(resData)
                    debugger
                    console.log(resData.token)
                    localStorage.setItem('token', resData.token.token);
                    localStorage.setItem('userId', resData.token.userId);
                    this.props.onSubmit({ token: resData.token.token, userId: resData.token.userId })
                }
            }
        });
    }

    changeEmail = (ev) => {
        this.setState({
            email: ev.target.value
        })
        console.log(this.state);
    }
    changePassword = (ev) => {
        this.setState({
            password: ev.target.value
        })
        console.log(this.state);
    }
    changeUserName = (ev) => {
        this.setState({
            userName: ev.target.value
        })
        console.log(this.state);
    }



    render() {
        return (
            <div className="Signup">
                <form>
                    <fieldset>
                        <fieldset className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="User name"

                                onChange={this.changeUserName} />
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="email"
                                placeholder="Email"

                                onChange={this.changeEmail} />
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                placeholder="Password"

                                onChange={this.changePassword} />
                        </fieldset>
                        <button
                            className="btn btn-lg btn-primary pull-xs-right"
                            type="button" onClick={this.signup}>
                            Sign Up
                        </button>
                    </fieldset>
                </form>
            </div>


        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);