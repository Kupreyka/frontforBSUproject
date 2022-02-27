const AUTH_SUCCESS = 'auth/AUTH_SUCCESS'
const SET_AUTH_DATA = 'auth/SET_AUTH_DATA'

let initialState = {
    isAuth: false,
    login: null,
    phone: null,
    email:null
}

export const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }

}

export const authSuccess = (isAuth) => ({type: AUTH_SUCCESS, isAuth})
export const setAuthData = (data) => ({type:SET_AUTH_DATA, data})