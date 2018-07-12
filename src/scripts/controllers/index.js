const indexController = {
    headerAction() {
      const pagelist = ['home.html','order.html','myOrder.html', 'login.html', 'welcome.html']
      $('header li').on('click', function(){
        location.href = pagelist[$(this).index()]
        $(this).addClass('active').siblings().removeClass('active');
      })
      switch(location.pathname.substr(1)){
        case  "public/home.html" : $('header li').eq(0).addClass("active");break;
        case  "public/order.html" : $('header li').eq(1).addClass("active");break;
        case  "public/myOrder.html" : $('header li').eq(2).addClass("active");break;
        // case  "changeTable.html" : $('header li').eq(3).addClass("active");break;
        case  "public/login.html" : $('header li').eq(3).addClass("active");break;
        case  "public/welcome.html" : $('header li').eq(4).addClass("active");break;
        default:return;
      }
    }
  }
  
  module.exports = indexController
  