import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.BIGINT,
  primaryKey: true,
  autoIncrement: true,
}

export default { id }