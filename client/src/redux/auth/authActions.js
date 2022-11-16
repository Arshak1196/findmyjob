import * as AuthAPI from '../../api/AuthRequests'
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SAVE_JOB,
    UNSAVE_JOB
} from './authTypes';

export const loginStart = () => {
    return {
        type: LOGIN_START
    }
}

export const loginSuccess = user => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const loginFailure = error => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const signup = (formData) => async (dispatch) => {
    dispatch(loginStart)
    try {
        const user = await AuthAPI.register(formData)
        dispatch(loginSuccess(user.data))
    } catch (error) {
        console.log(error)
        dispatch(loginFailure(error.response.data.message))
    }
}



export const login = (formData) => async (dispatch) => {
    dispatch(loginStart())
    try {
        const user = await AuthAPI.login(formData)
        console.log(user.data)
        dispatch(loginSuccess(user.data))
    } catch (error) {
        console.log(error)
        dispatch(loginFailure(error.response.data.message))
    }
}

export const logOut = () => async (dispatch) => {
    dispatch(logout())
}

export const saveJob = id => {
    return {
        type: SAVE_JOB,
        payload: id
    }
}

export const unsaveJob = id => {
    return {
        type: UNSAVE_JOB,
        payload: id
    }
}
