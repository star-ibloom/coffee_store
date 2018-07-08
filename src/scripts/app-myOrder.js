const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const homeMyOrderTpl = require('./views/home_myOrder.html')

const indexController = require('./controllers/index.js')

document.getElementById('root').innerHTML = indexTpl
document.querySelector('.container').innerHTML =  headerTpl + homeMyOrderTpl

indexController.headerAction()