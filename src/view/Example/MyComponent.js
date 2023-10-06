import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  /**
   *  JSX
   *  Fragment
   */
  state = {
    firstName: '',
    lastName: '',
    arrJobs: [
      { id: 'abcjob1', title: 'Developer', salary: '500' },
      { id: 'abcjob2', title: 'Tester', salary: '400' },
      { id: 'abcjob3', title: 'PM', salary: '1000' },
    ]
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
        <ChildComponent
          name={this.state.firstName}
          age={20}
          arrJobs={this.state.arrJobs}
        />
      </>
    )
  }
}

export default MyComponent;