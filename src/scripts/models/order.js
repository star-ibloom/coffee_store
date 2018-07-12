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
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success: result => result
        })
    },
    getDrinks(data) {
        return $.ajax({
            url: '/api/prod/drinks',
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success: result => result
        })
    },
    getGourmet(data) {
        return $.ajax({
            url: '/api/prod/gourmet',
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success: result => result
        })
    },
    getPeripheral(data) {
        return $.ajax({
            url: '/api/prod/peripheral',
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success: result => result
        })
    },
}