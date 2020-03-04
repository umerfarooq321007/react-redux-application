import React from 'react';
import './Login.css';
import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import {
    LOGIN
} from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });


const mapDispatchToProps = dispatch => ({

    onSubmit: (data) => {
        console.log("Before Dispatch")
        dispatch({ type: LOGIN, payload: data })
    }


});


class Login extends Component {
    constructor(props) {
        super();
        console.log(props)
        this.validator = new SimpleReactValidator();
    }

    state = {
        email: "b1234@gmail.com",
        password: "b12345678"
    }

    login = async (e) => {
        if (this.validator.allValid()) {
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
                    this.props.onSubmit(response.data)
                }

            });
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }



    }

    changeEmail = (ev) => {
        this.setState({
            email: ev.target.value
        })

    }
    changePassword = (ev) => {
        this.setState({
            password: ev.target.value
        })

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
                                value={this.state.email}
                                onChange={this.changeEmail}
                                onBlur={() => { this.validator.showMessageFor('email'); this.forceUpdate(); }} />

                            <span className="error">{this.validator.message('email', this.state.email, 'required|email')}</span>
                        </fieldset>

                        <fieldset className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.changePassword}
                                onBlur={() => { this.validator.showMessageFor('password'); this.forceUpdate(); }} />
                            <span className="error">{this.validator.message('password', this.state.password, 'required')}</span>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;