import {AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios'
import {instance} from './api'
import {articlesURL} from '../helpers/url'
import * as Keychain from 'react-native-keychain'

export const getArticles = async (page: number) => {
  try {
    const credentials = await Keychain.getGenericPassword()
    if (credentials) {
      const config: AxiosRequestConfig = {
        headers: {
          Authorization: `Bearer ${credentials.password}`,
        },
      }
      const response: AxiosResponse = await instance.get(
        `${articlesURL}${page}`,
        config,
      )
      return response.data
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response
    }
  }
}

// export const getArticles = async (page: number) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const credentials = await Keychain.getGenericPassword()
//       if (credentials) {
//         const config: AxiosRequestConfig = {
//           headers: {
//             Authorization: `Bearer ${credentials.password}`,
//           },
//         }
//         const response: AxiosResponse = await instance.get(
//           `${articlesURL}${page}`,
//           config,
//         )
//         // data gets resolved
//         resolve(response.data)
//       }
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         // in case of error, error response gets rejected
//         reject(error.response)
//       }
//     }
//   })
