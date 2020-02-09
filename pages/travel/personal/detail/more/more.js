Page({
  data: {
    scrollHeight: ''
  },
  onLoad: function () {
    let self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          scrollHeight: res.windowHeight
        })
      }
    });
  }
})