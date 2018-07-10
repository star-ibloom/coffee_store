'use strict';

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 14);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

  module.exports = "<div class=\"container\"></div>";

  /***/
},
/* 1 */
/***/function (module, exports) {

  var indexController = {
    headerAction: function headerAction() {
      var pagelist = ['home.html', 'order.html', 'myOrder.html', 'login.html', 'welcome.html'];
      $('header li').on('click', function () {
        location.href = pagelist[$(this).index()];
        $(this).addClass('active').siblings().removeClass('active');
      });
      switch (location.pathname.substr(1)) {
        case "home.html":
          $('header li').eq(0).addClass("active");break;
        case "order.html":
          $('header li').eq(1).addClass("active");break;
        case "myOrder.html":
          $('header li').eq(2).addClass("active");break;
        // case  "changeTable.html" : $('header li').eq(3).addClass("active");break;
        case "login.html":
          $('header li').eq(3).addClass("active");break;
        case "welcome.html":
          $('header li').eq(4).addClass("active");break;
        default:
          return;
      }
    }
  };

  module.exports = indexController;

  /***/
},
/* 2 */
/***/function (module, exports) {

  module.exports = "<header>    <div class=\"headerinner clear\">        <div class=\"logo_header\"></div>        <ul class=\"nav_header clear\">            <li>首页</li>            <li>点餐</li>            <li>订单</li>            <!-- <li>换桌</li> -->            <li>登录</li>            <li>欢迎</li>        </ul>    </div></header>";

  /***/
},,,,,,,,,,,,
/* 3 */
/* 4 */
/* 5 */
/* 6 */
/* 7 */
/* 8 */
/* 9 */
/* 10 */
/* 11 */
/* 12 */
/* 13 */
/* 14 */
/***/function (module, exports, __webpack_require__) {

  var indexTpl = __webpack_require__(0);
  var headerTpl = __webpack_require__(2);
  var homeOrderTpl = __webpack_require__(15);

  var indexController = __webpack_require__(1);
  var orderController = __webpack_require__(16);

  document.getElementById('root').innerHTML = indexTpl;
  document.querySelector('.container').innerHTML = headerTpl + homeOrderTpl;

  indexController.headerAction();
  orderController.firstListClick();

  /***/
},
/* 15 */
/***/function (module, exports) {

  module.exports = "<div class=\"orderMainOut\">    <div class=\"orderMain\">        <div class=\"orderList\">            <ul class=\"clear\">                <li class=\"fir_li\">                    <a>咖啡</a>                    <ul class=\"clear\">                        <li class=\"sec_li\">二级菜单</li>                        <li class=\"sec_li\">二级菜单</li>                        <li class=\"sec_li\">二级菜单</li>                    </ul>                </li>                <li class=\"fir_li\">                    <a>咖啡</a>                    <ul class=\"clear\">                        <li class=\"sec_li\">二级菜单</li>                        <li class=\"sec_li\">二级菜单</li>                        <li class=\"sec_li\">二级菜单</li>                    </ul>                </li>                <li class=\"fir_li\">                    <a>咖啡</a>                    <ul class=\"clear\">                        <li class=\"sec_li\">二级菜单</li>                        <li class=\"sec_li\">二级菜单</li>                        <li class=\"sec_li\">二级菜单</li>                    </ul>                </li>                <li class=\"fir_li\">                    <a>咖啡</a>                    <ul class=\"clear\">                        <li class=\"sec_li\">二级菜单</li>                        <li class=\"sec_li\">二级菜单</li>                        <li class=\"sec_li\">二级菜单</li>                    </ul>                </li>            </ul>        </div>        <div class=\"orderContainer\">            <ul class=\"clear\">                <li class=\"goodInfo\">                    <div class=\"goodImage\"></div>                    <div class=\"goodName\">咖啡咖啡给飞机打</div>                    <div class=\"goodPrice\">120元</div>                </li>                 <li class=\"goodInfo\">                    <div class=\"goodImage\"></div>                    <div class=\"goodName\">咖啡咖啡给飞机打</div>                    <div class=\"goodPrice\">120元</div>                </li>                 <li class=\"goodInfo\">                    <div class=\"goodImage\"></div>                    <div class=\"goodName\">咖啡咖啡给飞机打</div>                    <div class=\"goodPrice\">120元</div>                </li>                 <li class=\"goodInfo\">                    <div class=\"goodImage\"></div>                    <div class=\"goodName\">咖啡咖啡给飞机打</div>                    <div class=\"goodPrice\">120元</div>                </li>                 <li class=\"goodInfo\">                    <div class=\"goodImage\"></div>                    <div class=\"goodName\">咖啡咖啡给飞机打</div>                    <div class=\"goodPrice\">120元</div>                </li>                 <li class=\"goodInfo\">                    <div class=\"goodImage\"></div>                    <div class=\"goodName\">咖啡咖啡给飞机打</div>                    <div class=\"goodPrice\">120元</div>                </li>             </ul>        </div>    </div></div>";

  /***/
},
/* 16 */
/***/function (module, exports) {

  module.exports = {
    firstListClick: function firstListClick() {
      $(".fir_li>a").on("click", function () {
        $(this).next().slideToggle();
      });
    }

    /***/ };
}]
/******/);