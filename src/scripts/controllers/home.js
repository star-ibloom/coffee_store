const homeModel = require('../models/home')

const homeController={
    renderNewest(){
        // console.log(1)
        homeModel.getNewest()
        .then(result=>{
            var jsonNew = result.data.drinks;
            var html ='';
            for(let i =0;i<jsonNew.length;i++){
                html +=`
                <li><img src="${jsonNew[i].imgPath}"></li>
                `
            }
            // $(".hot-single-list").eq(0).html(html)
        })
    },
    renderHottest(){
        homeModel.getHottest()
        .then(result=>{
            var jsonHot = result.data;
            console.log(jsonHot);
            var html='';
            for(let i=0;i<jsonHot.length;i++){
                console.log(jsonHot[i].goodImg)
                html+=`
                <li><img src="${jsonHot[i].goodImg}"></li>
                `
            } 
            // $(".hot-single-list").eq(1).html(html)

        })
    }
}
module.exports = homeController