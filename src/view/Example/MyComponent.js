import React from "react";

class MyComponent extends React.Component {
  /**
   *  JSX
   *  Fragment
   */
  state = {
    name: '',
    chanel: 'hoi dan IT'
  }
  handleOnChangeName = (event) =>  {
    this.setState({
      name: event.target.value,
      chanel: 'abc'
    })
  }
  handleClickButton = () => {
    alert('click me')
  }
  render() {
    console.log('>>> call render: ', this.state);
    return(
      <>
      <div className="first">
          <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)}></input>
          Hello {this.state.name}
      </div>
      <div className="second">
        My youtube chanel: { this.state.chanel }
      </div>
      <div className="third">
          <button onClick={ () => this.handleClickButton() }>Click me</button>
      </div>
      </>
  
    )
  }
}

export default MyComponent;