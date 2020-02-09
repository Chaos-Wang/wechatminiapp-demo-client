//logs.js
Page({
  data: {
    direction: '--',
    angle: '--',
    rotate: '',
    backgroundColor: '#011b28',
    color: '#fff',
    tips: 'https://wx.chaoswang.cn/weapp/image/tips_normal.png',
    compass: 'https://wx.chaoswang.cn/weapp/image/compass.png'
  },
  onLoad: function () {
    var that = this;
    //罗盘接口
    wx.onCompassChange(function (res) {
      // 罗盘数据保留两位小数
      var directions = res.direction.toFixed(2);
      var radios = res.direction.toFixed(0);
      that.setData({
        angle: directions,
        rotate: 360 - radios,
        direction: check_angel(radios)
      })
    });

    setTimeout(function(){
      if(that.data.direction == '--' && that.data.angle == '--'){
        wx.showToast({
          title: '没有找到电子罗盘元件',
          icon: 'loading',
          duration: 1000,
          mask: true
        })
      }
    },3000);
    // 判断文字
    function check_angel(i)
    {
      if(15<=i && i<=75)
      {
        return '东北'
      }
      else if(75<i && i<105)
      {
        return '东'
      }
      else if(105<=i && i<=165)
      {
        return '东南'
      }
      else if(165<i && i<195)
      {
        return '南'
      }
      else if(195<=i && i<=255)
      {
        return '西南'
      }
      else if(255<i && i<285)
      {
        return '西'
      }
      else if(285<=i && i<=345)
      {
        return '西北'
      }
      else
      {
        return '北'
      }
    } 
  },
  mode: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['正常模式', '夜间模式'],
      success: function(res) {
        wx.setStorageSync('theme', res.tapIndex)
        if (res.tapIndex === 0) {
          that.setData({
            backgroundColor: '#fff',
            color: '#000',
            tips: 'https://wx.chaoswang.cn/weapp/image/tips_dark.png'
      
          })
        } else {
          that.setData({
            backgroundColor: '#011b28',
            color: '#fff',
            tips: 'https://wx.chaoswang.cn/weapp/image/tips_normal.png'
          })
        }
      }
    })
  }
})
