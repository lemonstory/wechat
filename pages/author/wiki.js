var Base64 = require('../../utils/base64.modified.js');
Page({
  
  data:{
    url:"",
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var base64EncodeUrl = options.url;
    var url = Base64.decode(base64EncodeUrl);
    this.setData({
       'url': url,
    });
  },
  
  onReady:function(){
    // 页面渲染完成
  },
  
  onShow:function(){
    // 页面显示
  },
  
  onHide:function(){
    // 页面隐藏
  },
  
  onUnload:function(){
    // 页面关闭
  }
})