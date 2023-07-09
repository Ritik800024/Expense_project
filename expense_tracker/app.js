const { config } = require('dotenv');
const express=require('express')
var cors=require('cors')

const sequelize=require('./util/database')

const bodyParser = require('body-parser')

const User=require('./models/user_models')
const Expense=require('./models/expense_models')
const Orders=require('./models/orders_models')

const userroutes=require('./routes/user_route')
const expenseroutes=require('./routes/expense_route')
const purchaseroutes=require('./routes/purchase_route')

const app=express()
config()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/user',userroutes)
app.use('/expense',expenseroutes)
app.use('/purchase',purchaseroutes)

User.hasMany(Expense)
Expense.belongsTo(User)

User.hasMany(Orders)
Orders.belongsTo(User)

sequelize.sync()
.then(result=>{
    app.listen(1478)
})
.catch(err=>{
    console.log(err)
})