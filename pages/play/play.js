//文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-animation.html
// pages/play/play.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    'constant': app.constant,
    'animationData': {},
    'setIntervalRet':'',
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
    var that = this;
    console.log("转圈圈");
    that.startRotateAnimation();
    console.log(app.constant);
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
  
  },

  /**
   * 停止旋转动画
   */
  stopRotateAnimation:function() {
    clearInterval(this.data.setIntervalRet);
  },

  /**
   * 开始旋转动画
   */
  startRotateAnimation:function() {
    
    var that = this;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0',
    })
    var n = 0;
    //连续动画需要添加定时器,所传参数每次+1就行
    var ret = setInterval(function () {
      n = n + 1;
      // console.log(n);
      animation.rotate(15 * (n)).step()
      that.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)

    that.setData({
      setIntervalRet: ret
    })
  }
})