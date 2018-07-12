const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const homeLoginTpl = require('./views/home_login.html')

const indexController = require('./controllers/index.js')
const loginController = require('./controllers/login.js')


document.getElementById('root').innerHTML = indexTpl
document.querySelector('.container').innerHTML = headerTpl + homeLoginTpl

indexController.headerAction()
loginController.login()