const getGoodsDetail = function (data) {
  return $.ajax({
    url: '/api/service/goodDetail',
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    data,
    success: result => result
  })
}

module.exports = { getGoodsDetail }