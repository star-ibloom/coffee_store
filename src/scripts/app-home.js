const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const homeTpl = require('./views/home.html')

const indexController = require('./controllers/index.js')
const homeController = require('./controllers/home.js')

document.getElementById('root').innerHTML = indexTpl
document.querySelector('.container').innerHTML = headerTpl + homeTpl

indexController.headerAction()
homeController.renderNewest()
homeController.renderHottest()

var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    paginationClickable: true,
  },
  // centeredSlides: true,
  autoplay: 1000,
  // autoplayDisableOnInteraction: false,
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})   