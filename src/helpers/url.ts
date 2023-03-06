import {z} from 'zod'
const urlValid = z.string().url()
type urlType = z.infer<typeof urlValid>
export const baseURL: urlType = `http://34.245.213.76:3000`
export const loginURL: string = `/auth/signin`
export const articlesURL: string = `/articles?page=`
