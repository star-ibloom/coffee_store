module.exports = {
    getNewest() {
        return $.ajax({
            url: '/api/prod/newest',
            type: "get",
            success: result => result
        })
    },
    getHottest() {
        return $.ajax({
            url: '/api/prod/hottest',
            type: "get",
            success: result => result
        })
    }
}