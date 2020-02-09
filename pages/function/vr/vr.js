var QQMapWX = require('../../../vendor/qqmap-wx-jssdk.min.js');
var qqmapsdk = new QQMapWX({
  key: 'OP6BZ-NOJRQ-N2652-GHW4A-J6AD6-LRBMP' // 必填
});  
Page({
     data: {
        add:''
 
  },

  addressInput: function(e){ 
    console.log('add=' + e.detail.value)
    this.data.add = e.detail.value;
  },
  nearby_search: function () {
       var _this = this;
      console.log(this.data.add)
       // 调用接口
       qqmapsdk.search({
            keyword: this.data.add,  //搜索关键词
            success: function (res) { //搜索成功后的回调
                console.log(res)
        }
              });
  }
 });