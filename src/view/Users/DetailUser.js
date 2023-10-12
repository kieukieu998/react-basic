import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

class DetailUser extends React.Component {
  state = {
    user: {}
  }
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      console.log('>>> check res', res);

      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {}
      })
    }
  }

  handleBackButton = () => {
    this.props.history.push('/user')
  }
  render() {
    console.log('>> check props:', this.props);

    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>Hello id: {this.props.match.params.id}</div>
        {
          isEmptyObj === false &&
          <>
            <div>
              <p>User's name: { user.first_name } { user.last_name }</p>
              <p>User's email: { user.email }</p>
              <div>
                <img src={ user.avatar } />
              </div>
              <button type="button" onClick={() => this.handleBackButton()}>Back</button>
            </div>
          </>
        }

      </>


    )
  }
}

export default withRouter(DetailUser);