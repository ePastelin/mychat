import { AxiosResponse } from 'axios'
import { Dispatch, FormEvent, SetStateAction } from 'react'

type LoginResponse = {
  token: string
}

type LoginFunction = (
  username: string,
  password: string,
  e: FormEvent,
  setError: Dispatch<SetStateAction<boolean>>,
) => Promise<AxiosResponse<LoginResponse> | void>

export default LoginFunction
