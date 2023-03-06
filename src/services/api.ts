import axios, {AxiosInstance} from 'axios'
import {baseURL} from '../helpers/url'

export const instance: AxiosInstance = axios.create({
  baseURL,
  responseType: 'json',
})

instance.defaults.headers.post['Content-Type'] = 'application/json'

/**
 * @AxiosError -> NOT ommitable
 * @AxiosResponse -> ommitable, but kept for consistency
 * @AxiosRequestConfig -> ommitable, but kept for consistency
 * @AxiosInstance -> ommitable, but kept for consistency
 */
