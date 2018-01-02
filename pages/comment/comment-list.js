// pages/comment/comment.js
var util = require('../../utils/util.js')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

    constant: app.constant,

    getParams: {

      isLoaded: false,
      albumId: '',
      direction: 'down',
      startCommentId: '',
      len: ''
    },

    commentListData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    var albumId = '4963';
    var direction = 'down';
    var startCommentId = '0';
    var len = '20';

    if (!util.isEmptyStr(options.albumId)) {
      albumId = options.albumId;
    }

    if (!util.isEmptyStr(options.direction)) {
      direction = options.direction;
    }

    if (!util.isEmptyStr(options.startCommentId)) {
      startCommentId = options.startCommentId;
    }

    if (!util.isEmptyStr(options.len)) {
      len = options.len;
    }

    that.setData({
      'getParams.albumId': albumId,
      'getParams.direction': direction,
      'getParams.startCommentId': startCommentId,
      'getParams.len': len,
    })

    that.getCommentListData();
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


  /**
   * 获取评论数据
   */
  getCommentListData: function () {

    var that = this;
    var url = that.data.constant.domain + '/album/v2.6/comment_list.php?album_id=' + that.data.getParams.albumId + "&direction=" + that.data.getParams.albumId + "&start_comment_id=" + that.data.getParams.startCommentId + "&len=" + that.data.getParams.len;
    console.log("url = " + url);
    wx.request({
      url: url,
      data: {},
      header: {
        'content-type': 'application/json', // 默认值
        // 'user-agent': 'api.xiaoningmeng.net/2.8.0/adr (M5 Note,864883030379469,460027404571654,6.0,1080*1920,4.589389937671455,480,wifi,_360,zh)',
      },
      success: function (res) {

        if (res.statusCode == 200) {

          var currentCommentListData = that.data.commentListData;
          var currentCommentListData = currentCommentListData.concat(res.data.data.items);


          that.setData({
            commentListData: currentCommentListData,
            isLoaded:true
          })

          console.log(that.data.commentListData);

        } else {
          console.error(res);

        }
      }
    })
  }
})

