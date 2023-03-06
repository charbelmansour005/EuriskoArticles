import {Text} from 'react-native'
import React from 'react'

const LoginHeader = (): JSX.Element => {
  return (
    <>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 5,
          fontSize: 23,
        }}>
        Welcome back!
      </Text>
      <Text style={{color: 'black', marginBottom: 20, fontWeight: 'bold'}}>
        We're so excited to see you again!
      </Text>
    </>
  )
}

export default LoginHeader
