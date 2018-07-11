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
    /******/return __webpack_require__(__webpack_require__.s = 12);
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
},,
/* 2 */
/* 3 */
/***/function (module, exports) {

    var text = function text() {

        var oEmall = $("#emall").val();
        var opwd = $("#password").val();
        var phonereg = /^[1][3,4,5,7,8][0-9]{9}$/;
        var regEmall = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        var ologin_btn = document.getElementById("login_btn");
        // 1.@之前必须有内容且只能是字母（大小写）、数字、下划线(_)、减号（-）、点（.）
        // 2.@和最后一个点（.）之间必须有内容且只能是字母（大小写）、数字、点（.）、减号（-），且两个点不能挨着
        // 3.最后一个点（.）之后必须有内容且内容只能是字母（大小写）、数字且长度为大于等于2个字节，小于等于6个字节
        $("#emall").on("blur", function () {
            var oEmall = $("#emall").val();
            if (!regEmall.test(oEmall)) {
                $(".errMsg").css("opacity", 1);
                // $("#emall").val()="";
            } else {
                $(".errMsg").css("opacity", 0);
            }
        });
        $("#username").on("blur", function () {
            var userName = $("#username").val();
            if (!phonereg.test(userName)) {
                $(".phoneerrMsg").css("opacity", 1);
                // $("#emall").val()="";
            } else {
                $(".phoneerrMsg").css("opacity", 0);
            }
        });

        //登陆的逻辑登陆的逻辑登陆的逻辑登陆的逻辑登陆的逻辑登陆的逻辑登陆的逻辑
        $("#login_btn").on("click", function () {
            console.log(8);
            var _username$password = {
                username: $("#emall").val(),
                password: $("#password").val()
            },
                username = _username$password.username,
                password = _username$password.password;

            console.log({ username: username, password: password });

            var result = sign({ username: username, password: password }, "signin");
            console.log(result);
        });
    };

    var sign = function sign(data) {
        return $.ajax({
            url: '/api/users/signin',
            type: 'post',
            data: data,
            success: function success(result) {
                console.log(result);

                return result;
            }
        });
    };

    module.exports = {
        text: text

        /***/ };
},,,,,,,,,
/* 4 */
/* 5 */
/* 6 */
/* 7 */
/* 8 */
/* 9 */
/* 10 */
/* 11 */
/* 12 */
/***/function (module, exports, __webpack_require__) {

    var indexTpl = __webpack_require__(0);
    // const headerTpl = require('./views/header.html')
    var homeRegisterTpl = __webpack_require__(13);

    var indexController = __webpack_require__(1);
    var loginController = __webpack_require__(3);
    var siginController = __webpack_require__(14);

    document.getElementById('root').innerHTML = indexTpl;
    document.querySelector('.container').innerHTML = homeRegisterTpl;

    indexController.headerAction();
    // loginController.text()
    siginController.singin();

    $('#backHome').on('click', function () {
        location.href = 'home.html';
    });

    /***/
},
/* 13 */
/***/function (module, exports) {

    module.exports = "<div class=\"space\">    <a id=\"backHome\">返回首页</a></div><div class=\"singin_main\">    <section class=\"clear\">        <div class=\"singin_bg\"></div>        <div class=\"singin_context\">            <div class=\"tip\">注册缘来，享受更多优惠</div>            <form action=\"\">                <input type=\"username\" name=\"log_usr\" id=\"username\"placeholder=\"用户名\">                <span class=\"phoneerrMsg\">请输入正确的手机号</span>                <input type=\"text\" name=\"log_username\" id=\"emall\" placeholder=\"邮箱\">                <span class=\"errMsg\">请输入正确的邮箱</span>                <input type=\"password\" name=\"log_pas\" id=\"password\"placeholder=\"密码\">                <div id=\"singin_btn\" class=\"aa\">注册</div>                                                  </form>        </div>    </section></div>";

    /***/
},
/* 14 */
/***/function (module, exports) {

    // console.log(3);

    var singin = function singin() {

        var oEmall = $("#emall").val();
        var opwd = $("#password").val();
        var phonereg = /^[1][3,4,5,7,8][0-9]{9}$/;
        var regEmall = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        var singin_btn = document.getElementById("singin_btn");
        // 1.@之前必须有内容且只能是字母（大小写）、数字、下划线(_)、减号（-）、点（.）
        // 2.@和最后一个点（.）之间必须有内容且只能是字母（大小写）、数字、点（.）、减号（-），且两个点不能挨着
        // 3.最后一个点（.）之后必须有内容且内容只能是字母（大小写）、数字且长度为大于等于2个字节，小于等于6个字节
        $("#emall").on("blur", function () {
            var oEmall = $("#emall").val();
            if (!regEmall.test(oEmall)) {
                $(".errMsg").css("opacity", 1);
                // $("#emall").val()="";
            } else {
                $(".errMsg").css("opacity", 0);
            }
        });
        $("#username").on("blur", function () {
            var userName = $("#username").val();
            if (!phonereg.test(userName)) {
                $(".phoneerrMsg").css("opacity", 1);
                // $("#emall").val()="";
            } else {
                $(".phoneerrMsg").css("opacity", 0);
            }
        });

        $("#singin_btn").on("click", function () {
            console.log(2);
            var _username$password$e_ = {
                username: $("#username").val(),
                password: $("#password").val(),
                e_mail: $("#emall").val()
            },
                username = _username$password$e_.username,
                password = _username$password$e_.password,
                e_mail = _username$password$e_.e_mail;

            console.log({ username: username, password: password, e_mail: e_mail });

            var result = sinGin({ username: username, password: password, e_mail: e_mail }, "signin");
            console.log(result);
        });
    };
    var sinGin = function sinGin(data) {
        return $.ajax({
            url: '/api/users/lognin',
            type: 'post',
            data: data,
            success: function success(result) {
                console.log(result);

                return result;
            }
        });
    };
    module.exports = {
        singin: singin

        /***/ };
}]
/******/);