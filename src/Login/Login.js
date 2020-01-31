import React from 'react';
import './Login.css';
import axios from 'axios';
import { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super();
        console.log(props)
    }
    
    state = {
        email: "",
        password: ""
    }

    login = async (e) => {
        console.log(this.state)
        axios.post(
            'http://18.219.17.99:3000/users/login',
            {
                "email": this.state.email,
                "password": this.state.password
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
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                this.props.history.push("/");
            }

        });

    }

    changeEmail = (ev) => {
        this.setState({
            email: ev.target.value
        })
        //this.state.email = ev.target.value
        console.log(this.state);
    }
    changePassword = (ev) => {
        this.setState({
            password: ev.target.value
        })
        console.log(this.state);
    }




    render() {
        return (
            <div className="Login">
                <form>
                    <fieldset>

                        <fieldset className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="text"
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
                            type="button" onClick={this.login}>
                            Sign in
                  </button>

                    </fieldset>
                </form>
            </div>


        );

    }
}

export default Login;