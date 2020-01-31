import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';




const LoggedOutView = () => {
  if (!localStorage.getItem("token")) {
    return (

      <div className="container">
        <Link to="/" className="nav-link">
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
  }
  return null;
};



const LoggedInView = () => {
  if (localStorage.getItem("token")) {
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

        <Link to="/" className="nav-link right-end" onClick={() => { localStorage.clear();  }}>
          Log Out
        </Link>
      </div>
    );
  }

  return null;
};



class Header extends React.Component {

  render() {
    return (
      <nav className="header">
        <div className="container">
          <LoggedOutView />

          <LoggedInView />
        </div>
      </nav>
    );
  }
}

export default Header;
