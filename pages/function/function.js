// client/pages/function/function.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: [
      {
        num:0,
        url:'./translate/translate',
        name:'translate',
        name_s:'海南话特色翻译'
      }, {
        num: 1,
        url: './calender/calender',
        name: 'calender',
        name_s:'日历'
      }, {
        num: 2,
        url: './id/id',
        name: 'id',
        name_s:'实名认证'
      }, {
        num: 3,
        url: './vr/vr',
        name: 'vr',
        name_s:'VR旅行体验'
      }, {
        num: 4,
        url: './compass/compass',
        name: 'zn',
        name_s:'指南针'
      }, {
        num: 5, 
        url: './weather/weather',
        name: 'weather',
        name_s:'天气'
      }, {
        num: 6,
        url: './security/security',
        name: 'security',
        name_s:'安全'
      }, {
        num: 7,
        url: './security/security',
        name: 'setting',
        name_s:'设置'
      }, {
        num: 8,
        url: './security/security',
        name: 'control',
        name_s:'添加'
      }]
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