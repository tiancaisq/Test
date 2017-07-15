// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 113.324520,
    latitude:23.099994,
    controls:[{
      iconPath: '/images/center.png',
      id: 1,
      position: {
        left: 0,
        top:400,
        width:30,
        height:30
      },
      clickable: true
    }],
    markers:[]
  },

  onLoad: function () {
   var that=this;
   wx.getSystemInfo({
     success: function (res) {
       var list=[{
           iconPath:'/images/zzz.png',
           id:0,
           position: {
                left:res.windowWidth/2-8,
                top:res.windowHeight/2-8,
                width:16,
                height:16
             },
           clickable: true
       }]
       that.data.controls = list.concat(that.data.controls);
       that.setData({
         'controls': that.data.controls
       });
     }
   })
  },
  controltap(e) {
    var that=this
    console.log(e.controlId)
    if (e.controlId==1){
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
           that.setData({
             longitude:res.longitude,
             latitude:res.latitude

           })
        }
      })
    }
  }

})
