import axios from "axios"
import { url } from "../../api"
import { toast } from "react-toastify"

export const signUp = (user) => {
    return (dispatch) => {
        axios
        .post(`${url}/signup`, user)
        .then(token => {
            localStorage.setItem("token", token.data)
            dispatch({
                type: "SIGN_UP",
                token: token.data
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

export const signIn = (email, password) => {
    return (dispatch) => {
      axios
        .post(`${url}/signin`, { email, password })
        .then((token) => {
          localStorage.setItem("token", token.data);
  
          dispatch({
            type: "SIGN_IN",
            token: token.data,
          });
        })
        .catch((error) => {
          console.log(error.response);
  
          toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    };
  };

export const loadUser = () => {
    return (dispatch, getState) => {
        const auth = getState().auth;
        if (auth && auth.token) {
            dispatch({
                type: "USER_LOADED",
                token: auth.token,
            })
        } else {
            return null;
        }
    }
}

export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: "SIGN_OUT",
        })
    }
}