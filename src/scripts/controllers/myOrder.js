const myOrderModel = require('../models/myOrder')
const wsCache = new WebStorageCache()

async function renderOrderList() {
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
    let result = await myOrderModel.getGoodsDetail({ "goods": goodsIdList })
    let userLogined = wsCache.get('haslogin')
    result.details.forEach((item, index) => {
      if (userLogined) {
        html += `
                  <tr>
                      <td><div class="orderImg"><img src="${item.goodImg}"></div></td>
                      <td>${item.goodName}</td>
                      <td>${item.membershipPrice}</td>
                      <td>
                          <button data-id="${item.id}" class="decrease">-</button>
                          <span class="prodNum">${cartList[index].goodNum}</span>
                          <button data-id="${item.id}" class="increase">+</button>
                      </td>
                  </tr>
                  `
      } else {
        html += `
                <tr>
                    <td><div class="orderImg"><img src="${item.goodImg}"></div></td>
                    <td>${item.goodName}</td>
                    <td>${item.price}</td>
                    <td>
                        <button data-id="${item.id}" class="decrease">-</button>
                        <span class="prodNum">${cartList[index].goodNum}</span>
                        <button data-id="${item.id}" class="increase">+</button>
                    </td>
                </tr>
                `
      }
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
  this.increaseBtnEvent()
  this.decreaseBtnEvent()
  this.calculateTotalPrice()
}

async function calculateTotalPrice() {
  let wsCartList = wsCache.get('cartList')
  let totalPrice = 0
  if (wsCartList) {
    let cartList = JSON.parse(wsCartList)
    let goodsIdList = []
    cartList.forEach((item, index) => {
      goodsIdList.push(item.goodId)
    })
    let result = await myOrderModel.getGoodsDetail({ "goods": goodsIdList })
    let userLogined = wsCache.get('haslogin')
    result.details.forEach((item, index) => {
      if (userLogined) { // 会员价
        totalPrice += item.membershipPrice * cartList[index].goodNum
      } else { // 非会员价
        totalPrice += item.price * cartList[index].goodNum
      }
    })
  }
  $('.price').html(totalPrice)
}



function submitOrder() {
  $('.subOrder').on('click', async function () {
    let userLogined = wsCache.get('haslogin')
    let wsCartList = wsCache.get('cartList')
    let cartList = JSON.parse(wsCartList)
    let tableId = Math.ceil(Math.random() * 100)
    userLogined = userLogined ? 1 : 0
    let result = await myOrderModel.addToCart({ userLogined, tableId, cartList })
    if (result.res) {
      var d = dialog({
        content: '提交成功！请您耐心等待~(＾－＾)'
      });
      d.showModal();
      // 登录成功后自动跳转页面至点餐页
      setTimeout(function () {
        d.close().remove();
      }, 2000);
    } else {
      var d = dialog({
        content: '提交出错！'
      });
      d.showModal();
      // 登录成功后自动跳转页面至点餐页
      setTimeout(function () {
        d.close().remove();
      }, 2000);
    }
  })
}

function increaseBtnEvent() {
  let that = this
  $('.increase').on('click', function () {
    let goodId = $(this).attr('data-id')
    let wsCache = new WebStorageCache()
    let wsCartList = wsCache.get('cartList')
    let cartList = JSON.parse(wsCartList)
    cartList.forEach(function (item, index) {
      if (item.goodId == goodId) {
        item.goodNum += 1
        $(this).siblings('.prodNum').html(item.goodNum)
      }
    }.bind(this))
    wsCache.set('cartList', JSON.stringify(cartList));
    that.calculateTotalPrice()
  })
}

function decreaseBtnEvent() {
  let that = this
  $('.decrease').on('click', function () {
    let goodId = $(this).attr('data-id')
    let wsCache = new WebStorageCache()
    let wsCartList = wsCache.get('cartList')
    let cartList = JSON.parse(wsCartList)
    cartList.forEach(function (item, index) {
      if (item.goodId == goodId) {
        if (item.goodNum) {
          item.goodNum -= 1
          $(this).siblings('.prodNum').html(item.goodNum)
        }
      }
    }.bind(this))
    wsCache.set('cartList', JSON.stringify(cartList));
    that.calculateTotalPrice()
  })
}

module.exports = { renderOrderList, submitOrder, increaseBtnEvent, decreaseBtnEvent, calculateTotalPrice }