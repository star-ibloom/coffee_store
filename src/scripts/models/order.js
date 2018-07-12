module.exports = {
    getFirstLevel() {
        return $.ajax({
            url: '/api/menu/firstlevel',
            type: "get",
            success: result => result
        })
    },
    getSecondLevel(data) {
        return $.ajax({
            url: '/api/menu/secondlevel',
            type: "get",
            data,
            success: result => result
        })
    },
    getDrinks(data) {
        return $.ajax({
            url: '/api/prod/drinks',
            type: "get",
            data,
            success: result => result
        })
    },
    getGourmet(data) {
        return $.ajax({
            url: '/api/prod/gourmet',
            type: "get",
            data,
            success: result => result
        })
    },
    getPeripheral(data) {
        return $.ajax({
            url: '/api/prod/peripheral',
            type: "get",
            data,
            success: result => result
        })
    },
}