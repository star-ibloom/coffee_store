const homeModel = require('../models/home')

const homeController={
    renderNewest(){
        // console.log(1)
        homeModel.getNewest()
        .then(resultNew=>{
            var jsonNew = resultNew.data;
            console.log(jsonNew);
            
        })
    },
    renderHottest(){

    }
}
module.exports = homeController