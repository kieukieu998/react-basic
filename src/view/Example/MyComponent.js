import React from "react";

class MyComponent extends React.Component {
  /**
   *  JSX
   *  Fragment
   */
  state = {
    firstName: '',
    lastName: ''
  }
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('data', this.state)
  }

  render() {
    console.log('>> render', this.state);
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)} /><br />
          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
          <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)} />
        </form>
      </>
    )
  }
}

export default MyComponent;