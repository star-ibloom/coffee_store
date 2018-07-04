const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const homeWelcomeTpl = require('./views/home_wel.html')

const welcomeController = require('./controllers/welcome.js')
const indexController = require('./controllers/index.js')


document.getElementById('root').innerHTML = indexTpl
document.querySelector('.container').innerHTML =  headerTpl + homeWelcomeTpl

welcomeController.scroll();
indexController.headerAction()