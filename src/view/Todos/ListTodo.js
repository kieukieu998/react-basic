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
      listTodo: [...this.state.listTodo, todo]
    })
    toast.success("Wow so easy!");
  }
  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy
    })
  }
  handleEditTodo = (todo) => {
    let { editTodo, listTodo } = this.state;
    /**
     *  kiểm tra xem đối tượng editTodo có rỗng hay không.
     *  length === 0 thì sẽ trả về true, ngược lại thì false
     */
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log('>> check object empty:', isEmptyObj)

    // save
    // nếu không rỗng 
    if (isEmptyObj === false && editTodo.id === todo.id ) {
      let listTodoCopy = [...listTodo];
      let objIndex = listTodoCopy.findIndex(item => item.id === todo.id);

      listTodoCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodo : listTodoCopy,
        editTodo: {}
      })
      toast.success("Update todo success!");
      return;
    }
     //edit
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
            handleAddTodo={this.handleAddTodo}
          />
          <div className="todo-content">
            {
              // check listTodo có tồn tại và > 0 hay ko
              // Toán tử && trong JavaScript được sử dụng để kiểm tra điều kiện
              // Với cấu trúc listTodos && listTodos.length > 0 &&, kiểm tra này đảm bảo rằng mảng listTodos tồn tại và có độ dài lớn hơn 0 trước khi tiếp tục thực hiện các hành động tiếp theo. Điều này giúp tránh lỗi khi truy cập vào một mảng không tồn tại hoặc rỗng.
              listTodo && listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {
                      // nếu nó rỗng
                      isEmptyObj === true ?
                      // in ra cái này
                        <span>{index + 1} - {item.title} </span>
                        :
                        // ngược lại khi nó khác rỗng
                        <>
                          {
                            // check điều kiện nếu 2 cái này bằng nhau
                            editTodo.id === item.id ?
                            // thì in cái này
                              <span>{index + 1} - <input type="text" value={editTodo.title} onChange={(event) => this.handleOnChangeEditTodo(event)} /></span>
                              :
                            // ngược lại thì in cái này
                              <span>{index + 1} - {item.title} </span>
                          }
                        </>
                    }
                    <span>
                      <button onClick={() => this.handleEditTodo(item)}>
                        {/* nếu nó ko trống và bằng */}
                        {isEmptyObj === false && editTodo.id === item.id ?
                          'Save' : 'Edit'
                        }
                      </button>
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