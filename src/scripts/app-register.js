const indexTpl = require('./views/index.html')
// const headerTpl = require('./views/header.html')
const homeRegisterTpl = require('./views/home_register.html')

const indexController = require('./controllers/index.js')
const loginController = require('./controllers/login.js')


document.getElementById('root').innerHTML  = indexTpl
document.querySelector('.container').innerHTML =  homeRegisterTpl

indexController.headerAction()
loginController.text()

$('#backHome').on('click',function(){
    location.href='home.html'
})