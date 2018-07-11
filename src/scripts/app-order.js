const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const homeOrderTpl = require('./views/home_order.html')


const indexController = require('./controllers/index.js')
const orderController = require('./controllers/order.js')

document.getElementById('root').innerHTML = indexTpl
document.querySelector('.container').innerHTML =  headerTpl + homeOrderTpl

indexController.headerAction()
orderController.firstListClick()
orderController.renderFirstLevel()
orderController.renderSecondLevel()
orderController.renderDrinks()
