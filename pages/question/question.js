//answer.js
var util = require('../../utils/utils.js')

var app = getApp()
Page({
  data: {
    motto: '海南之窗',
    userInfo: {}
  },
  //事件处理函数
  bindItemTap: function() {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  onLoad: function () {
  }
})
