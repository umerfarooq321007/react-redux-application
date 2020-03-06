import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { LOGOUT, LOGIN } from '../constants/actionTypes';


const mapStateToProps = state => ({ ...state.auth });


const mapDispatchToProps = dispatch => ({
  logOut: () => {
    console.log("Before Dispatch");
    localStorage.clear();
    dispatch({ type: LOGOUT, payload: null })
  },
  resetToken: (data) => {
    console.log("Before Dispatch")
    dispatch({ type: LOGIN, payload: data })
  }

});



const LoggedOutView = () => {
  return (

    <div className="container">
      <Link to="/" className="nav-link home">
        Home
          </Link>
      <Link to="/login" className="nav-link">
        Sign in
          </Link>
      <Link to="/signup" className="nav-link">
        Sign up
          </Link>
    </div>


  );
};



const LoggedInView = (props) => {
  return (

    <div className="container">
      <Link to="/" className="nav-link">
        Home
        </Link>

      <Link to="/add-item" className="nav-link">
        Add Item
        </Link>
      <Link to="/my-ads" className="nav-link">
        My Ads
        </Link>

      <Link to="/" className="nav-link right-end" onClick={props.logOut}>
        Log Out
        </Link>
    </div>
  );
};



class Header extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.resetToken({
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId')
      })
    }
  }


  render() {
    console.log(this.props)
    return (
      <nav className="header">
        <div className="container">

          {this.props.token ? <LoggedInView logOut={this.props.logOut} />
            :
            <LoggedOutView />}
        </div>
      </nav>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);