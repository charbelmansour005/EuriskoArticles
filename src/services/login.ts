import {loginURL} from '../helpers/url'
import {AxiosResponse, AxiosError} from 'axios'
import {instance} from './api'

type Payload = {
  username: string
  password: string
}

// export const loginUser = async ({userlogin}: any) => {
//   const payload: Payload = {
//     username: userlogin.username,
//     password: userlogin.password,
//   }
//   try {
//     const response: AxiosResponse = await instance.post(loginURL, payload)
//     return response.data
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       // console.log(error.response)
//       console.log(error.response)
//       // return error.response
//       // used Promise cause wanted to use API error message
//       return error.response
//     }
//   }
// }

export const loginUser = ({userlogin}: any) =>
  new Promise(async (resolve, reject) => {
    const payload: Payload = {
      username: userlogin.username,
      password: userlogin.password,
    }
    try {
      const response: AxiosResponse = await instance.post(loginURL, payload)
      resolve(response.data)
    } catch (error) {
      if (error instanceof AxiosError) {
        reject(error.response)
        console.log(error)
      }
    }
  })
