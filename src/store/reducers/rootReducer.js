/**
 * 
 * nhận vào hai tham số
 * state: trạng thái của ứng dụng redux, ko phải state của react, nơi lưu trữ data của redux
 */
const initState = {
  users: [
    {id: 1, name: 'kieu'},
    {id: 2, name: 'no'},
    {id: 3, name: 'mon'},
  ]
}
// mặc định muốn giá trị redux hay nói cách khác khi khởi tạo app lên thì có giá trị sẵn như vậy rồi thì gán state = initState
const rootReducer = (state = initState, action) => { 
  return state
}

export default rootReducer;