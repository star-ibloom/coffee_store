const orderModel = require('../models/order')
module.exports={

    renderFirstLevel(){
         orderModel.getFirstLevel()
        .then( resultFir=>{
            this.jsonFir = resultFir.res;
            var firstLevelLi = "";
            this.jsonFir.forEach(function(itemFir,index){
                // console.log(itemFir,index) 
                firstLevelLi +=`
                <li class="fir_li">
                    <a>${itemFir}</a>
                    <ul class="clear secul">
                    </ul>
                </li>
                `
                // $("#list li:eq(index) a").innerHtml = itemFir
            })
             $("#listul").html(firstLevelLi)
            $(".fir_li>a").on("click",function(){
                console.log(0)
                $(this).next().slideToggle() 
            })
            orderController.renderSecondLevel({type:1})
            orderController.renderSecondLevel({type:0})
            orderController.renderSecondLevel({type:2})
        })
        
    },

    renderSecondLevel(data){
        
        orderModel.getSecondLevel(data)
        .then(resultSec=>{
            var jsonSec = resultSec.res;
            
            var secondLevelLi = "";
            // setTimeout(() => {
            jsonSec.forEach(function(itemSec){

                secondLevelLi+=`
                <li class="sec_li" data_type=${data.type}>${itemSec}</li>
                `
            })
            $(`#listul li:eq(${data.type}) ul`).html(secondLevelLi)

            // $(".secul")[data.type].html(secondLevelLi)
            console.log( $(".secul")[data.type])
        })
        
        // orderModel.getSecondLevel({type:1})
        // .then(resultSec=>{
        //     var jsonSec = resultSec.res;
        //     // var code = resultSec.code
        //     // console.log(code)
        //     var secondLevelLi = "";
        //     jsonSec.forEach(function(itemSec){
        //         // console.log(itemSec,code)
        //         secondLevelLi+=`
        //         <li class="sec_li" data_type="1">${itemSec}</li>
        //         `
        //     })
        //     console.log($(".secul")[1]);
            
        //     $(".secul")[1].html("123    ")
        // })

        // orderModel.getSecondLevel({type:2})
        // .then(resultSec=>{
        //     var jsonSec = resultSec.res;
        //     // var code = resultSec.code
        //     // console.log(code)
        //     var secondLevelLi = "";
        //     jsonSec.forEach(function(itemSec){
        //         // console.log(itemSec,code)
        //         secondLevelLi+=`
        //         <li class="sec_li" data_type="2">${itemSec}</li>
        //         `
        //     })
        //     console.log(secondLevelLi)
        //     // console.log($("#listul li:eq(2) ul"));
            
        //     $("#listul li:eq(2) ul").html(secondLevelLi)
        // })
    },
    renderDrinks(){
        // $("#listul li:eq(0) ul").html(secondLevelLi)
        orderModel.getDrinks()
        .then(resultDri=>{
            this.jsonDri = resultDri.data;
            this.jsonDri.forEach(function(itemDir){
                console.log(itemDir)
            })
            
        })
    }
}