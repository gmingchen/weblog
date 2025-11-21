import { useAuthStore } from "~/store"

const prefix = 'STORE_'

const handleSet = () => {
  window.addEventListener('beforeunload', () => {
    const key = prefix + 'auth'
    const { state } = useAuthStore()
    const data = JSON.stringify(state.value || {})
    localStorage.setItem(key, data)
  })
}

const handleGet = () => {
  const key = prefix + 'auth'
  const data = localStorage.getItem(key)
  if (data) {
    const { setState } = useAuthStore()
    setState(JSON.parse(data))
  }
}

export default defineNuxtPlugin({
  name: 'local-state',
  hooks: {
    'app:beforeMount': () => {
      // handleSet()
      handleGet()
    },
  }
})
