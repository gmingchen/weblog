import dayjs from 'dayjs'
import { loginApi, loginUserApi } from '~/apis'

export const useAuthStore = () => {
  const state = useState('auth', () => ({
    token: {
      userId: null,
      accessToken: null,
      accessExpiredAt: null,
    },
    user: {
      id: null,
      nickname: null,
      avatar: null,
      sex: null,
      email: null,
      role: null,
      status: null
    }
  }))

  const setState = (value) => {
    state.value = value
  }

  const login = async (params) => {
    const r = await loginApi(params)
    state.value.token = r.data
  }

  const getUser = async () => {
    const r = await loginUserApi()
    state.value.user = r.data
  }

  const validateToken = () => {
    const { accessToken, accessExpiredAt } = state.value.token
    if (accessToken) {
      return dayjs(accessExpiredAt).isAfter(dayjs())
    }
    return false
  }

  const clear = () => {
    state.value = {
      token: {},
      user: {}
    }
  }

  return {
    state,
    setState,
    login,
    getUser,
    validateToken,
    clear,
  }
}