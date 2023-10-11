import React from "react";

class AddComponent extends React.Component {
  state = {
    title: '',
    salary: ''
  }
  handleChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value
    })
  }
  handleSubmit = (event) => {
    // console.log('data:', this.state);
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert('Missing required params')
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary
    })
    this.setState({
      title: '',
      salary: ''
    })
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">Job's title:</label><br />
          <input type="text" id="fname" name="fname" value={this.state.title} onChange={(event) => this.handleChangeTitleJob(event)} /><br />
          <label htmlFor="lname">Salary</label><br />
          <input type="text" id="lname" name="lname" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
          <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
      </div>
    )
  }
}

export default AddComponent;