const homeModel = require('../models/home')

const homeController={
    renderNewest(){
        // console.log(1)
        homeModel.getNewest()
        .then(result=>{
            var jsonNew = result.data.drinks;
            var html ='';
            for(let i =0;i<jsonNew.length;i++){
                console.log(jsonNew[i])
            
            // jsonNew[1].imgPath=jsonNew[1].imgPath==null?"https://www.baidu.com/img/bd_logo1.png":jsonNew[1].imgPath;
                html +=`
                <li>
                <img src="${jsonNew[i].imgPath}">
                <p>${jsonNew[i].name}</p>
                </li>
                `

            }
            // https://www.baidu.com/img/bd_logo1.png

            $(".hot-single-list").eq(0).html(html)
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