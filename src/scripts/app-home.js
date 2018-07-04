const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const homeTpl = require('./views/home.html')

const indexController = require('./controllers/index.js')

document.getElementById('root').innerHTML = indexTpl
document.querySelector('.container').innerHTML =  headerTpl + homeTpl

indexController.headerAction()
