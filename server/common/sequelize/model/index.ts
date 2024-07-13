import { Attributes, ModelAttributes, Model, ModelOptions } from 'sequelize'

import sequelize from '../core'
import fields from '../fields'

export default function createModel <M extends Model, TAttributes = Attributes<M>> (
  name: string, 
  attributes: ModelAttributes<M, TAttributes>,
  options?: ModelOptions<M>
) {
  return sequelize.define(name, {
    ...fields,
    ...attributes
  }, {
    tableName: name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase(),
    paranoid: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    freezeTableName: true,
    ...options
  })
}
