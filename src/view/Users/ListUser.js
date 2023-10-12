import React from "react";
import axios from "axios";
import './ListUser.scss'

class ListUser extends React.Component {
  state = {
    listUsers: []
  }
  async componentDidMount() {
    // promise 
    // axios.get('https://reqres.in/api/users?page=2')
    // .then(res => {
    //   console.log(res.data.data);
    // })
    let res = await axios.get('https://reqres.in/api/users?page=2');
    console.log(res.data.data);
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : []
    })
  }

  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">
          fetch all list user
        </div>
        <div className="list-user-content">
          {
            listUsers && listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div className="child" key={item.id}>
                  <span>{index + 1}</span>
                  <span>{item.first_name} {item.last_name}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default ListUser;