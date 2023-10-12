/**
 * 
 * nhận vào hai tham số
 * state: trạng thái của ứng dụng redux, ko phải state của react, nơi lưu trữ data của redux
 */
const initState = {
  users: [
    { id: 1, name: 'kieu' },
    { id: 2, name: 'no' },
    { id: 3, name: 'mon' },
  ],
  posts: []
}
// mặc định muốn giá trị redux hay nói cách khác khi khởi tạo app lên thì có giá trị sẵn như vậy rồi thì gán state = initState
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      console.log('>>> run into delete user:', action);
      let users = state.users;
      users = users.filter(item => item.id !== action.payload.id);
      return {
        ...state, users
      };
    // break;
    case 'CREATE_USER':
      let id = Math.floor(Math.random() * 1000);
      let user = { id:  id, name: `random ${id}`}
      return {
        ...state, users: [...state.users, user]
      }
    default:
  }
  return state;
}

export default rootReducer;