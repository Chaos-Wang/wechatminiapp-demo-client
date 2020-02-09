// pages/travel/personal/detail/detail.js
function _next() {
  var that = this;
  if (this.data.progress >= 100) {
    this.setData({
      disabled: false
    });
    return true;
  }
  this.setData({
    progress: ++this.data.progress
  });
  setTimeout(function () {
    _next.call(that);
  }, 20);
}
Page({


  data: {
    progress: 0,
    disabled: false
  },
  
  onLoad: function (options) {

    if (this.data.disabled) return;
    this.setData({
      progress: 0,
      disabled: true
    });
    _next.call(this);


    setTimeout(function () {
       try {
      const value = wx.getStorageSync('userInfo')
      if (value) {
        wx.request({
          url: 'https://wx.chaoswang.cn/weapp/check', // 仅为示例，并非真实的接口地址
          data: {
            openid: value.openId
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success(res) {
            if (res.data.code == '200') {
              console.log("用户已经完善信息");
            setTimeout(function () {
              wx.showToast({
                title: '已完善信息',
                icon: 'success',
                duration: 3000
              });
            }, 500)
                wx.switchTab({
                url: '../../discovery/discovery',
              })
             
              }
            else {
              console.log("用户尚未完善信息");
              wx.navigateTo({
                url: '../../login/login-s'
              })
            }
          }
        })
      }
    } catch (e) {
      console.log('获取openID失败')
    }
    }, 3000)

   
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