import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  /**
   *  JSX
   *  Fragment
   */
  state = {
    arrJobs: [
      { id: 'abcjob1', title: 'Developer', salary: '500' },
      { id: 'abcjob2', title: 'Tester', salary: '400' },
      { id: 'abcjob3', title: 'PM', salary: '1000' },
    ]
  }

  addNewJob = (job) => {
    // let currentJob = this.state.arrJobs;
    // currentJob.push(job);
    this.setState({
      // arrJobs: currentJob
      arrJobs: [...this.state.arrJobs, job]
    })
    console.log('check job',job);
  }
  deleteAJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter(item => item.id !== job.id);
    // lọc tất cả các phần tử trong mảng, và trả về những phần từ có id khác với cái job trả lên
    this.setState({
      arrJobs: currentJob
    })

  }


  render() {
    console.log('>> render', this.state);
    return (
      <>
        <AddComponent
          addNewJob={this.addNewJob}
        />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    )
  }
}

export default MyComponent;