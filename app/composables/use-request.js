const config = {
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const useRequest = async (url, params = {}, options = {}) => {
  const { public: { API_BASE_URL, API_BASE_PATH } } = useRuntimeConfig()
  const { method = 'GET' } = options
  options = {
    ...config,
    ...options,
    baseURL: `${API_BASE_URL}${API_BASE_PATH}`,
    method,
    params: method === 'GET' ? params : undefined,
    body: method === 'POST' ? params : undefined,
  }
  try {
    const res = await $fetch(url, options)
    return res
  } catch (error) {
    console.log(error);
  }
}
