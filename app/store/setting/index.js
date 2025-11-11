export const useSetting = () => {
  const setting = useState('setting', () => ({
    qq: null,
  }))

  const setSetting = (value) => {
    setting.value = value
  }

  return {
    setting,
    setSetting
  }
}