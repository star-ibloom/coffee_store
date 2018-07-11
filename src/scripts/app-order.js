const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const homeOrderTpl = require('./views/home_order.html')


const indexController = require('./controllers/index.js')
const orderController = require('./controllers/order.js')

document.getElementById('root').innerHTML = indexTpl
document.querySelector('.container').innerHTML =  headerTpl + homeOrderTpl

indexController.headerAction()
// orderController.firstListClick()
orderController.renderFirstLevel()
setTimeout(function(){
orderController.renderSecondLevel({type:1})
},10)
setTimeout(function(){
orderController.renderSecondLevel({type:0})
},20)
// setTimeout(function(){
//     orderController.renderSecondLevel({type:2})
//     },400)
orderController.renderSecondLevel({type:2})


orderController.renderDrinks()
