const getGoodsDetail = function (data) {
  return $.ajax({
    url: '/api/service/goodDetail',
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),
    success: result => result
  })
}

const addToCart = function (data) {
  return $.ajax({
    url: '/api/service/addToCart',
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),
    success: result => result
  })
}

module.exports = { getGoodsDetail, addToCart }