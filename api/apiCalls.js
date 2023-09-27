import apiToken from './apiToken'
import axios from "axios"

export const postRequest = async ({ url, data } ) => {
    const response = await apiToken.post(url, data)
    return response.data
  }
  
  
  export const getRequest = async ({ url }) => {
    const response = await apiToken.get(url)
    return response.data
  }

  export const login = async ({url, data}) => {
    const res = await axios.post(url, data)
  }
  export const sign_up = async ({url, data}) => {
    const res = await axios.post(url, data)
  }
