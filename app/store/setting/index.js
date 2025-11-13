export const useSettingStore = () => {
  const state = useState('setting', () => ({
    qqSetting: null,
    websiteSetting: null,
  }))

  const setState = (value) => {
    state.value = value
  }

  return {
    state,
    setState,
  }
}