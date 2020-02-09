//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var app=getApp()
Page({
  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  // 用户登录示例
  bindGetUserInfo: function () {
    if (this.data.logged) return

    util.showBusy('正在登录')

    const session = qcloud.Session.get()

    if (session) {
      // 第二次登录
      // 或者本地已经有登录态
      // 可使用本函数更新登录态
      qcloud.loginWithCode({
        success: res => {
          this.setData({ userInfo: res, logged: true })
          app.data.userInfo = res
          app.data.logged=true
          util.showSuccess('登录成功')
          console.log('登录成功2')
          wx.setStorage({
            key: 'userInfo',
            data: res,
          })
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
          console.log('登录失败2')
        }
      })
    } else {
      // 首次登录
      qcloud.login({
        success: res => {
          this.setData({ userInfo: res, logged: true })
          app.data.userInfo = res
          app.data.logged = true

          util.showSuccess('登录成功')
          wx.setStorage({
            key: 'userInfo',
            data: res,
          })
          console.log('登录成功1')
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
          console.log('登录失败1')

        }
      })
    }
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
              console.log(res.data)
              console.log("用户已经完善信息");
              wx.switchTab({
                url: '../discovery/discovery'
              })
            }
            else {
              console.log("用户尚未完善信息");
              wx.redirectTo({
                url: './login-s'
              })
            }
          }
        })
      }
    } catch (e) {
      console.log('获取openID失败')
    }        
  },

  // 切换是否带有登录态
  switchRequestMode: function (e) {
    this.setData({
      takeSession: e.detail.value
    })
    this.doRequest()
  },

  doRequest: function () {
    util.showBusy('请求中...')
    var that = this
    var options = {
      url: config.service.requestUrl,
      login: true,
      success(result) {
        util.showSuccess('请求成功完成')
        console.log('request success', result)
        that.setData({
          requestResult: JSON.stringify(result.data)
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    }
    if (this.data.takeSession) {  // 使用 qcloud.request 带登录态登录
      qcloud.request(options)
    } else {    // 使用 wx.request 则不带登录态
      wx.request(options)
    }
  },
})