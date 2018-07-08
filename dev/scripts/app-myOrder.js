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
  /******/return __webpack_require__(__webpack_require__.s = 16);
  /******/
})(
/************************************************************************/
/******/{

  /***/0:
  /***/function _(module, exports) {

    module.exports = "<div class=\"container\"></div>";

    /***/
  },

  /***/1:
  /***/function _(module, exports) {

    var indexController = {
      headerAction: function headerAction() {
        var pagelist = ['home.html', 'order.html', 'myOrder.html', 'changeTable.html', 'login.html', 'welcome.html'];
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
          case "changeTable.html":
            $('header li').eq(3).addClass("active");break;
          case "login.html":
            $('header li').eq(4).addClass("active");break;
          case "welcome.html":
            $('header li').eq(5).addClass("active");break;
          default:
            return;
        }
      }
    };

    module.exports = indexController;

    /***/
  },

  /***/16:
  /***/function _(module, exports, __webpack_require__) {

    var indexTpl = __webpack_require__(0);
    var headerTpl = __webpack_require__(2);
    var homeMyOrderTpl = __webpack_require__(17);

    var indexController = __webpack_require__(1);

    document.getElementById('root').innerHTML = indexTpl;
    document.querySelector('.container').innerHTML = headerTpl + homeMyOrderTpl;

    indexController.headerAction();

    /***/
  },

  /***/17:
  /***/function _(module, exports) {

    module.exports = "<div class=\"myOrderOut\">    <div class=\"myOrder\">        <div class=\"tableInfo\">            <span class=\"tableFont\">桌号:</span>            <span class=\"tableId\">2</span>        </div>        <table class=\"orderTable\">            <tr>                <th>产品图片</th>                <th>产品名称</th>                <th>价格</th>                <th>数量</th>            </tr>            <tr>                <td><div class=\"orderImg\"></div></td>                <td>忒哦嗯咖啡</td>                <td>120</td>                <td>1</td>            </tr>            <tr>                <td><div class=\"orderImg\"></div></td>                <td>忒哦嗯咖啡</td>                <td>120</td>                <td>1</td>            </tr>            <tr>                <td><div class=\"orderImg\"></div></td>                <td>忒哦嗯咖啡</td>                <td>120</td>                <td>1</td>            </tr>            <tr>                <td><div class=\"orderImg\"></div></td>                <td>忒哦嗯咖啡</td>                <td>120</td>                <td>1</td>            </tr>        </table>        <div class=\"priceInfo\">            <span class=\"priceFont\">价格:</span>            <span class=\"price\">2202</span>            <a class=\"subOrder\">提交订单</a>        </div>    </div></div>";

    /***/
  },

  /***/2:
  /***/function _(module, exports) {

    module.exports = "<header>    <div class=\"headerinner clear\">        <div class=\"logo_header\"></div>        <ul class=\"nav_header clear\">            <li>首页</li>            <li>点餐</li>            <li>订单</li>            <li>换桌</li>            <li>登录</li>            <li>欢迎</li>        </ul>    </div></header>";

    /***/
  }

  /******/ });