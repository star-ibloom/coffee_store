const homeModel = require('../models/home')

const homeController = {
    renderNewest() {
        homeModel.getNewest()
        .then(result=>{
            var jsonNew = result.data.drinks;
            var html ='';
            for(let i =0;i<jsonNew.length;i++){
                html +=`
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
        homeModel.getHottest()
        .then(result=>{
            var jsonHot = result.data;
            var html='';
            for(let i=0;i<jsonHot.length;i++){
                html+=`
                <li>
                <img src="${jsonHot[i].goodImg}">
                <p>${jsonHot[i].name}</p>
                </li>
                `
            } 
            $(".hot-single-list").eq(1).html(html)

        })
    }
}
module.exports = homeController