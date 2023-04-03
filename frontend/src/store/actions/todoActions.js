import axios from "axios"
import { url } from "../../api"
import { toast } from "react-toastify"

export const getTodos = () => {
    return (dispatch) => {
        axios
        .get(`${url}/todos`)
        .then(todos => {
            dispatch({
                type: "GET_TODOS",
                todos
            }) 
        })
        .catch( error => {
            console.log(error.response)
        })
    }
}

export const addTodo = (newTodo) => {
    return (dispatch, getState) => {
        axios
        .post(`${url}/todos`, newTodo)
        .then(todo => {
            dispatch({
                type: "ADD_TODO",
                todo
            }) 
        })
        .catch( error => {
            console.log(error.response)
            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        })
    }
}

export const updateTodo = (updatedTodo, id) => {
    return (dispatch) => {
        axios
        .put(`${url}/todos/${id}`, updateTodo)
        .then(todo => {
            dispatch({
                type: "UPDATE_TODO",
                todo
            }) 
        })
        .catch( error => {
            console.log(error.response)
            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        })
    }
}