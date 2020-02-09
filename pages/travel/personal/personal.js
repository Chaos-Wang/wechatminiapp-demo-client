// client/pages/travel/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems1: [
      { name: '女士', value: '0', checked: true},
      { name: '男士', value: '1'}
    ],
    radioItems2:[
      { name: '跟团', value: '0', checked: true},
      { name: '自由行', value: '1'},
      { name: '其他', value: '2'}
    ],
    radioItems3: [
      { name: '参与过', value: '0', checked: true },
      { name: '有意愿', value: '1'},
      { name: '不感兴趣',value:'2'}
    ],
    radioItems4: [
      { name: '自然生态', value: '0' ,checked: true},
      { name: '民俗文化', value: '1'  },
      { name: '消费购物',value: '2'},
      { name: '结识朋友',value: '3'}

    ],
    radioItems5: [
      { name: '愿意，但要收费', value: '0', checked: true},
      { name: '愿意，而且免费', value: '1'},
      { name: '不愿意',value:'2'}
    ],
  },

  submit:function(){
    wx.navigateTo({
      url: './detail/detail',
    })
  },
  radioChange1: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems1;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems1: radioItems
    });
  },

  radioChange2: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems2;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems2: radioItems
    });
  },
  radioChange3: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems3;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems3: radioItems
    });
  },
  radioChange4: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems4;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems4: radioItems
    });
  },
  radioChange5: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems5;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems5: radioItems
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showModal({
      title: '提示',
      content: '本问卷信息仅用于用户偏好分析，采用加密存储，请确定是否填写',
      confirmText: "是",
      cancelText: "否",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击是')
        } else {
          console.log('用户点击否')
          wx.switchTab({
            url: '../../main/main'
          })
        }
      }
    });
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