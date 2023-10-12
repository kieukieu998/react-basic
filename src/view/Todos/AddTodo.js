import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
  state = {
    title: ''
  }
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    })
  }
  handleClickAddTodo = (event) => {
    event.preventDefault();
    // falsy >> null/empty/underfined
    if (!this.state.title) {
      toast.error(`Missing title's todo`);
      return;
    }

    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title
    }

    this.props.handleAddTodo(todo);

    this.setState({
      title: ''
    })
  }
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)}></input>
        <button type="button" onClick={(event) => this.handleClickAddTodo(event)}>Add</button>
      </div>
    )
  }
}

export default AddTodo;