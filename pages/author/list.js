// pages/author/list.js
var app = getApp()
var util = require('../../utils/util.js')
var play = require('../../utils/play.js')
const Tab = require('../../zanui-weapp/dist/tab/index');
const Toast = require('../../zanui-weapp/dist/toast/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    'isLoaded': false,
    'constant': app.constant,
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    that.getData();
  
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
  
  },

  getData: function () {
    console.log("🚀 🚀 🚀 getData run");
    var that = this;
    var url = that.data.constant.domain + '/default/v2.6/authors.php';
    wx.request({
      url: url,
      data: {},
      header: {
        'content-type': 'application/json', // 默认值
        // 'user-agent': 'api.xiaoningmeng.net/2.8.0/adr (M5 Note,864883030379469,460027404571654,6.0,1080*1920,4.589389937671455,480,wifi,_360,zh)',
      },
      success: function (res) {
        res.data.isLoaded = true;
        that.setData(res.data);
        that.setDataCallBack();
      }
    })
  },

  /**
   * 获取数据成功回调
   * 修改: 焦点图数据
   */
  setDataCallBack: function () {
    var that = this;
    console.log(that.data);
  },
})