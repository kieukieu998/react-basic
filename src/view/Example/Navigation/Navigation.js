import React from "react";
import './Navigation.scss'
import {
  Link, NavLink
} from "react-router-dom";
class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink activeClassName="active" to="/" exact = {true}>Home</NavLink>
          <NavLink activeClassName="active" to="/todo">Todo</NavLink>
          <NavLink activeClassName="active" to="/about">About</NavLink>
        </div>
      </>
    )
  }
}

export default Navigation;