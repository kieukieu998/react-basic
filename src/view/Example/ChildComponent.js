import React from 'react';

// class ChildComponent extends React.Component {
//   render() {
//     // let name = this.props.name;
//     // let age = this.props.age;
//     let { name, age, arrJobs } = this.props; // destructuring assignment
//     console.log('>> check props', this.props);
//     let a = '';
//     return (
//       <>
//         <div>Child Component name: {name}, age: {age}</div>
//         <div className='job-lits'>
//           {
//             a = arrJobs.map((item, index) => {
//               return (
//                 <div key={item.id}>
//                   {item.title} - {item.salary}
//                 </div>
//               )
//             })
//           }
//           {console.log('>> check map araay', a)}
//         </div>
//       </>
//     );
//   }
// }

// function component, dùng arrow function
const ChildComponent = (props) => {
  console.log('>> check child props', props);
  let { name, age, arrJobs } = props; // destructuring assignment
  console.log('>> check props', props);
  let a = '';
  return (
    <>
      <div>Child Component name: {name}, age: {age}</div>
      <div className='job-lits'>
        {
          a = arrJobs.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title} - {item.salary}
              </div>
            )
          })
        }
        {console.log('>> check map araay', a)}
      </div>
    </>
  );
}
export default ChildComponent;