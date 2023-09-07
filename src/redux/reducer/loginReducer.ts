import i18n from 'i18next'
import { createSlice } from '@reduxjs/toolkit'

export interface loginState {
    userid: Number,
    name:string,
    pwd:string,
}

const defaultState: loginState = {
    userid: 0,
    name: '',
    pwd:'',
}

const loginReducer = createSlice({
    name: 'login',
    initialState: defaultState,
    reducers: {
        login: (state, action) => {
            const { type, payload } = action
            return { ...state, userid: payload.userid,name:payload.name, pwd:payload.pwd }
          },
        logout: (state, action) => {
            return { ...state, userid: 0,name:'' }
          },
        get:(state,action)=>{
            return state 
        }
    }
})

export const {login,logout,get} = loginReducer.actions;
export default loginReducer.reducer;