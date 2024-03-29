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
        case "CHECK_TODO":
            toast.success("A todo status was changed...", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return state.map((todo) => 
                todo._id === action.data.todo._id ? action.data.todo : todo
            )
        case "DELETE_TODO":
            toast.success("A todo status was deleted...", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return state.filter((todo) => 
                todo._id !== action._id
            )      
        default:
            return state;
    }
}       

export default todoReducer; 