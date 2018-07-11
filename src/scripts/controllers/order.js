const orderModel = require('../models/order')
require("babel-polyfill")

module.exports = {
    // 渲染一级菜单
    renderFirstLevel() {
        orderModel.getFirstLevel()
            .then(resultFir => {
                this.jsonFir = resultFir.res;
                var firstLevelLi = "";
                // console.log(jsonFir)
                this.jsonFir.forEach(function (itemFir, index) {
                    firstLevelLi += `
                <li class="fir_li">
                    <a>${itemFir}</a>
                    <ul class="clear secul">
                    </ul>
                </li>
                `
                })
                $("#listul").html(firstLevelLi)
                $(".fir_li>a").on("click", function () {
                    $(this).next().slideToggle()
                })
                this.renderSecondLevel({ type: 0 })
                this.renderSecondLevel({ type: 1 })
                this.renderSecondLevel({ type: 2 })
            })
    },

    // 渲染二级菜单
    renderSecondLevel(data) {
        orderModel.getSecondLevel(data)
            .then(resultSec => {
                var jsonSec = resultSec.res;
                var secondLevelLi = "";
                for (var i = 0; i < jsonSec.length; i++) {
                    secondLevelLi += `
                <li class="sec_li" data-type=${data.type}>${jsonSec[i]}</li>
                `
                }
                $('#listul > li').eq(`${data.type}`).find('ul').html(secondLevelLi)
                this.menuDelegation(data.type)
            })
    },

    // 二级菜单按钮事件
    menuDelegation(data) {
        var that = this
        $(`.sec_li[data-type=${data}]`).on('click', function (event) {
            let index = $(this).attr('data-type')
            let type = $(this).index()
            switch (index) {
                case "0":
                    orderModel.getDrinks({ type })
                        .then(data => that.renderProducts(data.data))
                    break;
                case "1":
                    orderModel.getGourmet({ type })
                        .then(data => that.renderProducts(data.data))
                    break;
                case "2":
                    orderModel.getperipheral({ type })
                        .then(data => that.renderProducts(data.data))
                    break;
                default:
                    break;
            }
        })
        $('.sec_li:first').trigger('click')
    },

    // 渲染商品页
    renderProducts(data) {
        console.log(data)
        var html = ""
        for (var i = 0; i < data.length; i++) {
            html += `
                <li class="goodInfo">
                    <div class="goodImage"></div>
                    <div class="goodName">${data[i].name}</div>
                    <div class="goodPrice">${data[i].price}元</div>
                    <button >立即购买</button>
                </li> 
                `
        }
        console.log($(".orderContainer > ul"));
        console.log(html);
        $(".orderContainer > ul").html(html)
    }
}