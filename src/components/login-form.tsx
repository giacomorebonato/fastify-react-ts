import { useState } from 'react'
import { Button, Input } from 'react-daisyui'
import * as authAtom from '../atoms/auth-atom'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const auth = authAtom.useAuth()

  if (auth.email !== null) {
    return (
      <form
        className='portrait:w-full'
        onSubmit={async (e) => {
          e.preventDefault()

          return await auth.logout()
        }}
      >
        <Button type='submit' className='portrait:w-full'>
          Logout user {auth.email}
        </Button>
      </form>
    )
  }

  return (
    <form
      className='flex flex-row'
      onSubmit={async (e) => {
        e.preventDefault()

        return await auth.login(email)
      }}
    >
      <Input
        value={email}
        type='email'
        placeholder='Type your email'
        required
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <Button>Login</Button>
    </form>
  )
}
