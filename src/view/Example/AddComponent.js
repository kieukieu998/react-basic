import React from "react";

class AddComponent extends React.Component {
  state = {
    titlelJob: '',
    salary: ''
  }
  handleChangeTitleJob = (event) => {
    this.setState({
      titlelJob: event.target.value
    })
  }
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('data:', this.state)
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">Job's title:</label><br />
          <input type="text" id="fname" name="fname" value={this.state.titlelJob} onChange={(event) => this.handleChangeTitleJob(event)} /><br />
          <label htmlFor="lname">Salary</label><br />
          <input type="text" id="lname" name="lname" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
          <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
      </div>
    )
  }
}

export default AddComponent;