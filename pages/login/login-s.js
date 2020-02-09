// client/pages/login/login-s.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
      fact_id:'',
      real_name:'',
  },
  
  NameInput: function (e) {
    console.log('real_name=' + e.detail.value)
    this.data.real_name = e.detail.value;
  },
  IDInput: function (e) {
    console.log('ID=' + e.detail.value)
    this.data.fact_id = e.detail.value;
  },

  fill: function () {
    try {
      const value = wx.getStorageSync('userInfo')
      if (value) {
        wx.request({
          url: 'https://wx.chaoswang.cn/weapp/fill',
          data: {
            openid: value.openId,
            fact_id:this.data.fact_id,
            real_name:this.data.real_name
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success(res) {
            if (res.data.code == '200') {
              console.log("完善信息成功");
              wx.switchTab({
                url: '../main/main'
              })
            }
          }
        })
      }
    } catch (e) {
      console.log('获取openID失败')
    }        
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})