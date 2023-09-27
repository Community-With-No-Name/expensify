const API_URL = "/api"
const AUTH_URL =(url)=> `${API_URL}/auth/${url}`
export const SIGN_UP = AUTH_URL("register")
export const LOGIN = AUTH_URL("login")