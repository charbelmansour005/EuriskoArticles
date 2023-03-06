import * as yup from 'yup'

var usernameRules = new RegExp('^\\w[\\w.]{2,18}\\w$')

export const validationSchema = yup.object({
  username: yup
    .string()
    .matches(usernameRules, {message: 'Invalid Format'})
    .required('Required'),
  password: yup.string().min(5).required('Required'),
})
