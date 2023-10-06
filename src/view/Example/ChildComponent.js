import React from 'react';

class ChildComponent extends React.Component {
  state = {
    showJobs: false
  }
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs
    })
  }
  render() {
    let { arrJobs } = this.props; // destructuring assignment
    let { showJobs } = this.state;
    console.log('>> check props', this.props);
    return (
      <>
        {showJobs === false ?
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
          :
          <>
            <div className='job-lits'>
              {
                arrJobs.map((item, index) => {
                  if (+item.salary >= 500) {
                    return (
                      <div key={item.id}>
                        {item.title} - {item.salary}
                      </div>
                    )
                  }
                })
              }
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        }
      </>
    );
  }
}

// function component, dùng arrow function
// const ChildComponent = (props) => {
//   console.log('>> check child props', props);
//   let { name, age, arrJobs } = this.props; // destructuring assignment
//   console.log('>> check props', this.props);
//   let a = '';
//   return (
//     <>
//       <div>Child Component name: {name}, age: {age}</div>
//       <div className='job-lits'>
//         {
//           a = arrJobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             )
//           })
//         }
//         {console.log('>> check map araay', a)}
//       </div>
//     </>
//   );
// }
export default ChildComponent;