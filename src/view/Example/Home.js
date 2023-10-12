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
  handleDeleteUser = (user) => {
    console.log(user);
    this.props.deleteUserRedux(user);
  }
  handleCreateUser = () => {
    this.props.addUserRedux();
  }
  render() {
    console.log('>> check props', this.props);
    console.log('>> check props redux', this.props.dataRedux);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello Home Component</div>
        <div>
          <img src={logo} style={{width: 100}}/>
        </div>
        <div>
          {
            listUsers && listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return(
                <div key={item.id}>
                  {index + 1} - {item.name} 
                  <span onClick={() => this.handleDeleteUser(item)}> x</span>
                </div>
              )
            })
          }
          <button onClick={() => this.handleCreateUser()}>Add new</button>
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
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => dispatch({type: "DELETE_USER", payload: userDelete}),
    addUserRedux: (addUser) => dispatch({type: "CREATE_USER",})
  }
} 
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));