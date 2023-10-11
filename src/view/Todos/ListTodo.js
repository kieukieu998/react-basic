import React from "react";
import { toast } from 'react-toastify';
import './ListTodo.scss'
import AddTodo from "./AddTodo";
class ListTodo extends React.Component {
  state = {
    listTodo: [
      { id: 'todo1', title: 'Doing homework' },
      { id: 'todo2', title: 'making video' },
      { id: 'todo3', title: 'listen music' },
    ],
    editTodo: {}
  }
  handleAddTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo,todo]
    })
    toast.success("Wow so easy!");
  }
  handleEditTodo = (todo) => {
    this.setState({
      editTodo: todo
    })
  }

  handleDeleteTodo = (todo) => {
    let currentListTodo = this.state.listTodo;
    currentListTodo = currentListTodo.filter(item => item.id !== todo.id) 
    this.setState({
      listTodo: currentListTodo
    })
    toast.success("Delete success!");
  }
  render() {
    // let listTodo = this.state.listTodo
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <div className="list-todo-container">
          <AddTodo 
            handleAddTodo = {this.handleAddTodo}
          />
          <div className="todo-content">
            {
              // check listTodo có tồn tại và > 0 hay ko
              // Toán tử && trong JavaScript được sử dụng để kiểm tra điều kiện
              //Với cấu trúc listTodos && listTodos.length > 0 &&, kiểm tra này đảm bảo rằng mảng listTodos tồn tại và có độ dài lớn hơn 0 trước khi tiếp tục thực hiện các hành động tiếp theo. Điều này giúp tránh lỗi khi truy cập vào một mảng không tồn tại hoặc rỗng.
              listTodo && listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    <span>{index + 1} - {item.title} </span>
                    <span>
                      <button onClick={() => this.handleEditTodo(item)}>Edit</button>
                      <button onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                    </span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
    )
  }
}

export default ListTodo;