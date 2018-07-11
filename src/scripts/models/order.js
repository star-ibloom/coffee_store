module.exports={
    getFirstLevel(){
        return $.ajax({
            url:'/api/menu/firstlevel',
            type:"get",
            success:result => result
        })
    },
    getSecondLevel(){
        return $.ajax({
            url:'/api/menu/secondlevel',
            type:"get",
            data:{
                type:"0"
            },
            success:result => result
        })
    },
    getDrinks(){
        return $.ajax({
            url:'/api/prod/drinks',
            type:"get",
            data:{
                type:"0"
            },
            success:result => result
        })
    },
}