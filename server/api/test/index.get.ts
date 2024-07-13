
import User from '~/server/modules/user/model'

export default defineEventHandler((e) => {
  const list = User.findAll()
  return list
})