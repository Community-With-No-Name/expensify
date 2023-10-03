const API_URL = "/api"
const AUTH_URL =(url)=> `${API_URL}/auth/${url}`
const APP_URL =(url)=> `${API_URL}/app/${url}`

export const SIGN_UP = AUTH_URL("register")
export const LOGIN = AUTH_URL("login")
export const ADD_TRANSACTION = APP_URL("add_transaction")
export const GET_TRANSACTION = APP_URL("get_transactions")