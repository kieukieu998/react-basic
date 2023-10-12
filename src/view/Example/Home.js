import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/logo.png';
import {connect} from 'react-redux';

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      console.log(123);
      // this.props.history.push('/todo')
    }, 3000)
  }
  // HOC: highter order component
  render() {
    console.log('>> check props', this.props);
    console.log('>> check props redux', this.props.dataRedux);
    return (
      <>
        <div>Hello Home Component</div>
        <div>
          <img src={logo} style={{width: 100}}/>
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    dataRedux: state.users
  }
}
// export default withRouter(Home);
export default connect(mapStateToProps)(Color(Home));