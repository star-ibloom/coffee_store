const homeModel = require('../models/home')

const homeController = {
    renderNewest() {
        homeModel.getNewest()
            .then(result => {
                var jsonNew = result.data.drinks;
                var html = '';
                for (let i = 0; i < jsonNew.length; i++) {
                    html += `
                <li><img src="${jsonNew[i].imgPath}"></li>
                `
                }
            })
    },
    renderHottest() {
        homeModel.getHottest()
            .then(result => {
                var jsonHot = result.data;
                var html = '';
                for (let i = 0; i < jsonHot.length; i++) {
                    html += `
                <li><img src="${jsonHot[i].goodImg}"></li>
                `
                }
            })
    }
}
module.exports = homeController