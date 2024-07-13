import { createModel, DataTypes } from '~/server/common/sequelize'
import { Sex } from '~/enums/user';

export default createModel('user', {
  nickname: {
    type: DataTypes.STRING
  },
  avatar: {
    type: DataTypes.STRING
  },
  sex: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    validate: {
      isIn: {
        msg: '性别不正确',
        args: [Sex.FEMALE, Sex.MALE, Sex.UNKNOWN] as any[]
      }
    }
  },
})
