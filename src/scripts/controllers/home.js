const homeModel = require('../models/home')

const homeController = {
    renderNewest() {
        homeModel.getNewest()
            .then(result => {
                var jsonNew = result.data.drinks;
                var html = '';
                for (let i = 0; i < jsonNew.length; i++) {
                    html += `
                <li>
                <img src="${jsonNew[i].imgPath}">
                <p>${jsonNew[i].name}</p>
                </li>
                `
                }
                $(".hot-single-list").eq(0).html(html)
            })
    },
    renderHottest() {
        homeModel.getHottest({ type: 0 })
            .then(result => {
                var jsonHot = result.data;
                var html = '';
                for (let i = 0; i < jsonHot.length; i++) {
                    html += `
                <li>
                <img src="${jsonHot[i].goodImg}">
                <p>${jsonHot[i].name}</p>
                </li>
                `
                }
                $(".hot-single-list").eq(1).html(html)

            })
    },
    nextPic() {
        var t;
        setTimeout(function () {
            t = setInterval(function () {
                $(".swiper-button-next").click()
            }, 3000)
        }, 2000)
        $(".swiper-container").on("mousemove", function () {
            clearInterval(t)
        })
        $(".swiper-container").on("mouseleave", function () {
            t = setInterval(function () {
                $(".swiper-button-next").click()
            }, 3000)
        })
    }
}
module.exports = homeController