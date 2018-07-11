const orderModel = require('../models/order')
module.exports={
    firstListClick:function(){
        $(".fir_li>a").on("click",function(){
            $(this).next().slideToggle() 
        })
    },
    renderFirstLevel(){
        orderModel.getFirstLevel()
        .then(resultfir=>{
            this.jsonfir = resultfir.res;
            this.jsonfir.forEach(function(itemfir){
                console.log(itemfir)
            })
        })
    },
    renderSecondLevel(){
        orderModel.getSecondLevel()
        .then(resultsec=>{
            this.jsonsec = resultsec.res;
            this.jsonsec.forEach(function(itemsec){
                console.log(itemsec)
            })
        })
    },
    renderDrinks(){
        orderModel.getDrinks()
        .then(result=>{
            this.json = result.data;
            this.json.forEach(function(item){
                console.log(item)
            })
        })
    }
}