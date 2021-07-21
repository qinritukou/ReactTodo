import axios, { AxiosInstance } from 'axios'

const Axios = (): AxiosInstance => {
  const axiosInstance = axios.create()

  axiosInstance.interceptors.request.use(async (request) => {
    request.baseURL = process.env.BE_ENDPOINT
    request.headers = {
      'Content-Type': 'application/json',
    }
    return request
  })

  return axiosInstance
}

export default Axios()
