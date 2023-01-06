import {loginURL} from '../helpers/url'
import {AxiosResponse, AxiosError} from 'axios'
import {z} from 'zod'
import {instance} from './api'

const PayloadSchema = z.object({
  username: z.string(),
  password: z.string(),
})

type Payload = z.infer<typeof PayloadSchema>

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
