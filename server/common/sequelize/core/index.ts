import { Sequelize } from 'sequelize'

const { database } = useRuntimeConfig()

const url = `mysql://${database.ip}:${database.port}/${database.name}?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&useSSL=false`

const sequelize = new Sequelize(url, {
  username: database.username,
  password: database.password,
  dialect: 'mysql',
})

export default sequelize

