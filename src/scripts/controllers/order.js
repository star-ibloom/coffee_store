const orderModel = require('../models/order')
module.exports={
    firstListClick:function(){
        $(".fir_li>a").on("click",function(){
            $(this).next().slideToggle() 
        })
    },
    renderFirstLevel(){
        orderModel.getFirstLevel()
        .then(resultFir=>{
            this.jsonFir = resultFir.res;
            var firstLevelLi = "";
            this.jsonFir.forEach(function(itemFir,index){
                // console.log(itemFir,index) 
                firstLevelLi +=`
                <li class="fir_li">
                    <a>${itemFir}</a>
                    <ul class="clear">
                    </ul>
                </li>
                `
                // $("#list li:eq(index) a").innerHtml = itemFir
            })
            $("#listul").html(firstLevelLi)
        })
    },
    renderSecondLevel(){
        orderModel.getSecondLevel()
        .then(resultSec=>{
            this.jsonSec = resultSec.res;
            // console.log(resultSec.code)
            var code = resultSec.code
            console.log(code)
            var secondLevelLi = "";
            this.jsonSec.forEach(function(itemSec){
                // console.log(itemSec,code)
                secondLevelLi+=`
                <li class="sec_li">${itemSec}</li>
                `
            })
            $("#listul li:eq(0) ul").html(secondLevelLi)
        })
    },
    renderDrinks(){
        orderModel.getDrinks()
        .then(resultDri=>{
            this.jsonDri = resultDri.data;
            this.jsonDri.forEach(function(itemDir){
                console.log(itemDir)
            })
            
        })
    }
}