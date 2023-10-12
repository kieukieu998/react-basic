import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      console.log(123);
      // this.props.history.push('/todo')
    },3000)
  }
  // HOC: highter order component
  render() {
    console.log('>> check props', this.props);
    return(
      <div>Hello Home Component</div>
    )
  }
}

// export default withRouter(Home);
export default Color(Home);