const orderModel = require('../models/order')
require("babel-polyfill")

module.exports = {
    // 渲染一级菜单
    renderFirstLevel() {
        orderModel.getFirstLevel()
            .then(resultFir => {
                this.jsonFir = resultFir.res;
                var firstLevelLi = "";
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
                <li class="sec_li" data_type=${data.type}>${jsonSec[i]}</li>
                `
                }
                $('#listul > li').eq(`${data.type}`).find('ul').html(secondLevelLi)
            })
    },

    menuDelegation() {
        $("#listul").on('click', $(".sec_li"), function (event) {
            console.log(2)
        })
    },

    // 渲染商品页
    renderDrinks() {
        orderModel.getDrinks()
            .then(resultDri => {
                this.jsonDri = resultDri.data;
                this.jsonDri.forEach(function (itemDir) {
                    // console.log(itemDir)
                })
            })
    }
}