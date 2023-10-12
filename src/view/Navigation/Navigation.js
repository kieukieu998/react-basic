import React from "react";
import './Navigation.scss'
class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <a className="active" href="/">Home</a>
          <a href="/todo">Todo</a>
          <a href="/about">About</a>
        </div>
      </>
    )
  }
}

export default Navigation;