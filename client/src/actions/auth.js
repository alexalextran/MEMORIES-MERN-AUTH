import {AUTH} from '../constants/actionTypes'
import * as api from '../api/index.js'

export const signin = (formData, Navigate) => async (dispatch) => {
try{
    Navigate('/')
} catch (error){
console.log(error)
}
}

export const signup = (formData, Navigate) => async (dispatch) => {
    try{
        Navigate('/')
    } catch (error){
    console.log(error)
    }
    }