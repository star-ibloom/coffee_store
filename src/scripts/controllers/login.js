const loginModel = require('../models/login')

const login = function () {
    var oEmall = $("#emall").val();
    var opwd = $("#password").val();
    var emall_true;
    var phonereg = /^[1][3,4,5,7,8][0-9]{9}$/;
    var regEmall = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    var ologin_btn = document.getElementById("login_btn");
    // 1.@之前必须有内容且只能是字母（大小写）、数字、下划线(_)、减号（-）、点（.）
    // 2.@和最后一个点（.）之间必须有内容且只能是字母（大小写）、数字、点（.）、减号（-），且两个点不能挨着
    // 3.最后一个点（.）之后必须有内容且内容只能是字母（大小写）、数字且长度为大于等于2个字节，小于等于6个字节
    $("#emall").on("blur", function () {
        var oEmall = $("#emall").val();
        if (!regEmall.test(oEmall)) {
            $(".errMsg").css("opacity", 1)
            emall_true = false
        } else {
            $(".errMsg").css("opacity", 0)
            emall_true = true
        }
    })

    //登陆的逻辑登陆的逻辑登陆的逻辑登陆的逻辑登陆的逻辑登陆的逻辑登陆的逻辑
    $("#login_btn").on("click", async function () {
        let { username, password } = {
            username: $("#emall").val(),
            password: $("#password").val()
        }
        if (username && password && emall_true) {
            let userinfo = { username, password }
            let result = await loginModel.login(userinfo)
            if (result.res) {
                // create WebStorageCache instance.
                var wsCache = new WebStorageCache();
                wsCache.set('haslogin', true);
                var d = dialog({
                    content: '登录成功！即将为您跳转至点餐页面~(＾－＾)'
                });
                d.showModal();
                // 登录成功后自动跳转页面至点餐页
                setTimeout(function () {
                    d.close().remove();
                    var url = '/public/order.html'
                    location.href = url
                }, 2000);
            } else {
                var d = dialog({
                    content: '请输入有效的邮箱和密码！'
                });
                d.showModal();
                setTimeout(function () {
                    d.close().remove();
                }, 2000);
            }
        } else {
            var d = dialog({
                content: '请输入有效的邮箱和密码！'
            });
            d.showModal();
            setTimeout(function () {
                d.close().remove();
            }, 2000);
        }
    })
}

module.exports = {
    login
}