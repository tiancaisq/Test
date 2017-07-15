// shiy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.map.baidu.com/direction/v2/transit?', //仅为示例，并非真实的接口地址
      data: {
        origin:'40.056878,116.30815',
        destination:'31.222965, 121.505821',
        ak: 'A765iMLZ1O2PSDK3Ug2rahj0xWkGONI7',
      },
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})