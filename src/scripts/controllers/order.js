module.exports={
    firstListClick:function(){
        $(".fir_li>a").on("click",function(){
            $(this).next().slideToggle() 
        })
    }
}