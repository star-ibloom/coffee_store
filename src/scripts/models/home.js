module.exports = {
    getNewest() {
        return $.ajax({
            url: '/api/prod/newest',
            type: "get",
            success: result => result
        })
    },
    getHottest(data) {
        return $.ajax({
            url: '/api/prod/hottest',
            type: "POST",
            data,
            contentType: "application/json; charset=utf-8",
            success: result => result
        })
    }
}