import { toast } from "react-toastify"

const todoReducer = (state = [], action) => {
    switch(action.type){
        case "GET_TODOS":
            return action.todos.data
        case "ADD_TODO":
            toast.success("A todo was added...", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return [action.data.todo, ...state];
        case "UPDATE_TODO":
            toast.success("A todo was updated...", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return state.map((todo) => 
                todo._id === action.data.todo._id ? action.data.todo : todo
            )     
        default:
            return state;
    }
}       

export default todoReducer; 