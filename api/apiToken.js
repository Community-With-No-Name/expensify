/* eslint-disable no-param-reassign */
import axios from 'axios'

const apiToken = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL
})

apiToken.interceptors.request.use(
  (config) => {
    // Add authorization key to config object if it exist
    const ex_pensify_token = typeof window!== "undefined" && window.localStorage.getItem('ex_pensify_token')
    if (ex_pensify_token) {
      config.headers.Authorization = `${ex_pensify_token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default apiToken