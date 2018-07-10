const addToCart = require('./addToCart.json')
const drinks = require('./drinks.json')
const firstlevel = require('./firstlevel.json')
const gourmet = require('./gourmet.json')
const hottest = require('./hottest.json')
const login = require('./login.json')
const newest = require('./newest.json')
const peripheral = require('./peripheral.json')
const register = require('./register.json')
const secondlevel = require('./secondlevel.json')
// const routes = require('./routes.json')

// ppt
// ui 名称 功能 设计的思路 
// java h5 
// 最后的演示系统

module.exports = function() {
    return {
        "addToCart":addToCart,
        "drinks":drinks,
        "firstlevel":firstlevel,
        "gourmet":gourmet,
        "hottest":hottest,
        "login":login,
        "newest":newest,
        "peripheral":peripheral,
        "register":register,
        "secondlevel":secondlevel

    }
}