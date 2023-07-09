const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const Orders=sequelize.define('Orders',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    paymentid:{type:Sequelize.INTEGER},
    orderid:{type:Sequelize.INTEGER},
    status:{type:Sequelize.STRING}

})

module.exports=Orders