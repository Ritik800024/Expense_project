const Sequelize=require('sequelize')

const sequelize=require('../util/database')

const user=sequelize.define('ex-user',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  pass:{
    type:Sequelize.STRING,
    allowNull:false,
  }
})

module.exports=user