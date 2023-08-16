import api from '../api'

export const login = async (data: {email: string, password: string}): Promise<any> => {
  const result = await api.post('/auth/login', data)
  return result.data
}
