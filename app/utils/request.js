import { useAuthStore } from '~/store'

const config = {
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
}

export default async function (url, params = {}, options = {}) {
  const { API_BASE_URL, API_BASE_PATH } = useAppConfig()
  const { method = 'GET' } = options
  const { state } = useAuthStore()

  const headers = {
    ...config.headers,
    ...options?.headers,
    token: state.value.token.accessToken || '',
  }
  options = {
    ...config,
    ...options,
    baseURL: `${API_BASE_URL}${API_BASE_PATH}`,
    method,
    params: method === 'GET' ? params : undefined,
    body: method === 'POST' ? params : undefined,
    headers,
  }
  try {
    const res = await $fetch(url, options)
    return res
  } catch (error) {
    console.log(error);
  }
}