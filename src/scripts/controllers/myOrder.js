const myOrderModel = require('../models/myOrder')

async function renderOrderList() {
  let wsCache = new WebStorageCache()
  let wsCartList = wsCache.get('cartList')

  let html = `<tr>
                <th>产品图片</th>
                <th>产品名称</th>
                <th>价格</th>
                <th>数量</th>
            </tr>`
  if (wsCartList) {
    let cartList = JSON.parse(wsCartList)
    let goodsIdList = []
    cartList.forEach((item, index) => {
      goodsIdList.push(item.goodId)
    })
    console.log(goodsIdList);
    let result = await myOrderModel.getGoodsDetail(JSON.stringify({ "goods": goodsIdList }))
    result.details.forEach((item, index) => {
      html += `
                <tr>
                    <td><div class="orderImg"></div></td>
                    <td>${item.goodName}</td>
                    <td>${item.price}</td>
                    <td>
                        <button class="decrease">-</button>
                        <span class="proNum">${cartList[index].goodNum}</span>
                        <button class="increase">+</button>
                    </td>
                </tr>
                `
    })
    $('.orderTable').html(html)
  } else {
    html = `
            <tr>
                <th>产品图片</th>
                <th>产品名称</th>
                <th>价格</th>
                <th>数量</th>
            </tr>
            <tr>
              <td colspan="4">暂无商品被添加至购物车</td>
            </tr>
    `
    $('.orderTable').html(html)
  }
}

module.exports = { renderOrderList }