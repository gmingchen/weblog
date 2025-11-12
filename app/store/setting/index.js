export const useSettingStore = () => {
  const state = useState('setting', () => ({
    qq: null,
  }))

  const setState = (value) => {
    state.value = value
  }

  return {
    state,
    setState,
  }
}