const todoReducer = (state = [], action) => {
    switch(action.type){
        case "GET_TODOS":
            return action.todos.data
        case "ADD_TODO":
        return [action.data.todo, ...state]
        default:
            return state;
    }
}       

export default todoReducer