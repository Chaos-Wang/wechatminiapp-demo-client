// page/index/index.js
const mycalendar = requirePlugin('calendar')
var date=new Date()

Page({
  /**
   * 页面的初始数据
   */


  data: {

    tips:'点击切换语言',
    year: null,
    language:'full-en',
    lunarl:false,
    dayscolor:[
      {
        month:"current",
        day:date.getDate(),
        color:"white",
        background:"purple"
        }
    ]
      },


  language_change:function(){
    var that = this;
    wx.showActionSheet({
      itemList: ['English', '中文'],
      success: function (res) {
        // res.tapIndex 亮色主题为0，暗色主题为1
        wx.setStorageSync('theme', res.tapIndex)
        if (res.tapIndex === 0) {
          that.setData({
            tips: '点击切换语言',
            language: 'full-en',
            lunarl:false
          })
        } else {
          that.setData({
            tips: 'Tap to change the language',
            language: 'cn',
            lunarl:true
          })
        }
      }
    })
  },

  
  onLoad: function (options) {

    // 从缓存获取主题颜色，渲染主题
    console.log(this.language === 'cn')
    if (this.language === 'cn') {

      this.setData({
        tips: 'Tap to change the language',
        language:'cn',
        lunarl:true
      })
    } else {
      this.setData({
        tips: '点击切换语言',
        language: 'full-en',
        lunarl:false
      })
    }
  }
})