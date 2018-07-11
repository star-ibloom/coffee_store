const indexTpl = require('./views/index.html')
// const headerTpl = require('./views/header.html')
const homeRegisterTpl = require('./views/home_register.html')

const indexController = require('./controllers/index.js')
const loginController = require('./controllers/login.js')
const siginController = require('./controllers/register.js')


document.getElementById('root').innerHTML  = indexTpl
document.querySelector('.container').innerHTML =  homeRegisterTpl

indexController.headerAction()
// loginController.text()
siginController.singin()

$('#backHome').on('click',function(){
    location.href='home.html'
})