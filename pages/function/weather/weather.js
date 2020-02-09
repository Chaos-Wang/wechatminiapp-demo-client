// client/pages/function/weather/weather.js
var amapFile = require('../../../vendor/amap-wx.js');

Page({
  data: {
    address: '',
    weather: '',
    temperature: '',
    humidity: '',
    windpower: '',
    winddirection: ''
  },
  onLoad() {
    var _this = this;
    var myAmap = new amapFile.AMapWX({ key: '5ad241cc960d5ade66ead876e8288d4b' });
    myAmap.getWeather({
      type: 'live',
      success(data) {
        if (data.city) {
          _this.setData({
            address: data.liveData.city,
            humidity: data.liveData.humidity,
            temperature: data.liveData.temperature,
            weather: data.liveData.weather,
            winddirection: data.liveData.winddirection,
            windpower: data.liveData.windpower
          })
        }
      },
      fail() {
        wx.showToast({ title: '失败！' })
      }
    })
  }
})
