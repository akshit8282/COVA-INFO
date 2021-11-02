import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../header/header'
import './Navbar.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem('userTokenTime')
    }
  }

  render() {
    return (
      <React.Fragment>
     
      <nav className="navbar-light navbar-expand-lg nav bg-light" >
        
        <div >
          <Link className="navbar-brand" to="/">COVA-INFO</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav bg-light">
              {this.state.loggedIn ?
                <React.Fragment>
                  <NavLink className="nav-item nav-link" to="/" exact>Home</NavLink>
                  <NavLink className="nav-item nav-link" to="/upload">Upload a video</NavLink>
                  <NavLink className="nav-item nav-link" to="/signOut">Sign Out</NavLink>
                  <NavLink className="nav-item nav-link" to="/dashboard">Dashboard</NavLink>
                  <NavLink className="nav-item nav-link" to="/personaldashboard">Your Dashboard</NavLink>
                </React.Fragment>
                :
                <React.Fragment>
                   <NavLink className="nav-item nav-link" to="/" exact>Home</NavLink>
                  <NavLink className="nav-item nav-link" to="/signIn">Sign In</NavLink>
                  <NavLink className="nav-item nav-link" to="/signUp">Sign Up</NavLink>
                  <NavLink className="nav-item nav-link" to="/dashboard">Dashboard</NavLink>
                 

                </React.Fragment>}
            </div>
          </div>
        </div>
        <div ></div>
      </nav>
      <div className="img">
      </div>
      </React.Fragment>
    );
  }
}

export default Navbar;