export const useAuthStore = () => {
  const state = useState('auth', () => ({
    userId: null,
    accessToken: null,
    accessExpiredAt: null,
  }))

  const setState = (value) => {
    state.value = value
  }

  return {
    state,
    setState,
  }
}