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


  render() {
    console.log('>> render', this.state);
    return (
      <>
      <AddComponent />
        
        <ChildComponent
          arrJobs={this.state.arrJobs}
        />
      </>
    )
  }
}

export default MyComponent;