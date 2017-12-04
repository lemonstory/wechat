//app.js
var constant = require('constant.js')
App({

  onLaunch: function (options) {
    // Do something initial when launch.
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  onShow: function (options) {
    // Do something when show.
    console.log("App onShow run");
  },
  onHide: function () {
    // Do something when hide.
    console.log("App onHide run");
  },
  onError: function (msg) {
    console.log("App onHide run");
    console.log(msg);
  },
  
  globalData: 'I am global data',

  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },

  // TODO:constant啰嗦了
  globalData: {
    // userInfo:null,

  },
  constant: constant.constant,
})