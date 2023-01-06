import * as yup from 'yup'

var usernameRules = new RegExp('^\\w[\\w.]{2,18}\\w$')

export const validationSchema = yup.object({
  username: yup
    .string()
    .matches(usernameRules, {message: 'Invalid Format'})
    .required('Required'),
  password: yup.string().min(5).required('Required'),
})

/**
 *
 * {"password": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhbmRpZGF0ZSIsImlhdCI6MTY3Mjk0NzkzOSwiZXhwIjoxNjcyOTgzOTM5fQ.ql3omqKUlmPLlCFZ1bUDPeODJbdyOLBcCenwaAZnzOg", "service": "", "storage": "KeystoreAESCBC", "username": "currentUser"}
 */
