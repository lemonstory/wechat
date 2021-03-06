// pages/age/index.js
var app = getApp()
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

    isLoaded: false,
    constant: app.constant,

    getParam: {

      minAge: 0,
      maxAge: 0
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    var minAge = '';
    var maxAge = '';

    console.log(options);

    if (!util.isEmptyStr(options.minAge)) {

      minAge = options.minAge;
    }

    if (!util.isEmptyStr(options.maxAge)) {

      maxAge = options.maxAge;
    }

    that.setData({
      'getParam.minAge': minAge,
      'getParam.maxAge': maxAge,
    })

    console.log(that.data.getParam);
    that.getAgeLevelListData();
    console.log(that.data);
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
    if (that.data.constant.playerStatus == 'play') {
      that.startRotateAnimation();
    } else {
      that.stopRotateAnimation();
    }

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
 * 处理专辑点击
 */
  handleAlbumTap: function (event) {
    var albumId = event.currentTarget.dataset.id;
    var albumDetailUrl = "/pages/album/detail?albumId=" + albumId;
    wx.navigateTo({
      url: albumDetailUrl
    })
  },

  /**
 * 点击更多
 */
  handleMoreTap: function (event) {

    console.log(event);
    var tagId = event.target.dataset.tag_id;
    var sectionType = event.target.dataset.type;
    var path = '';
    switch (sectionType) {
      case 'album':
        if (tagId > 0) {
          path = "/pages/tag/album?selectSecondTagId=" + tagId;
        }
        break;
    }

    if (path.length > 0) {
      wx.navigateTo({
        url: path
      })
    }
  },

  /**
   * 
   */
  getAgeLevelListData: function () {

    var that = this;
    var url = that.data.constant.domain + '/default/v2.6/age_level_list.php?min_age=' + that.data.getParam.minAge + '&max_age=' + that.data.getParam.maxAge;
    console.log("url = " + url);

    wx.request({
      url: url,
      data: {},
      header: {
        'content-type': 'application/json', // 默认值
        // 'user-agent': 'api.xiaoningmeng.net/2.8.0/adr (M5 Note,864883030379469,460027404571654,6.0,1080*1920,4.589389937671455,480,wifi,_360,zh)',
      },

      success: function (res) {
        wx.hideLoading();
        res.data.isLoaded = true;
        that.setData(res.data)
        that.setDataCallBack();
      }
    })
  },

  /**
 * 获取数据成功回调
 * 修改: 焦点图数据
 */
  setDataCallBack: function () {

    var focusArr = this.data.data.focus_pic.items;
    var albumFocusArr = new Array();

    for (var i = 0, len = focusArr.length; i < len; i++) {

      var linkUrl = focusArr[i].linkurl;
      if (0 == linkUrl.indexOf("xnm", 0)) {

        var albumIdIndex = linkUrl.indexOf("albumid");
        var paramIndex = linkUrl.indexOf("&");
        var albumIdSubStr;
        if (albumIdIndex != -1) {
          if (paramIndex != -1) {
            albumIdSubStr = linkUrl.substring(albumIdIndex, paramIndex);
          } else {
            albumIdSubStr = linkUrl.substring(albumIdIndex);
          }
          var albumIdArr = albumIdSubStr.split("=");
          var albumId = parseInt(albumIdArr[1]);
          if (albumId > 0) {
            focusArr[i].id = albumId;
            albumFocusArr.push(focusArr[i]);
          }
        }
      }
    }
    this.setData({
      'data.focus_pic.items': albumFocusArr,
      'data.focus_pic.total': albumFocusArr.length,
    });
  },

  /**
 * 处理标签点击
 */
  handleTagTap: function (event) {
    var tagId = event.currentTarget.dataset.tag_id;
    var index = event.currentTarget.dataset.index;
    var param = "";

    param = "selectSecondTagId=" + tagId;
    var tagUrl = "/pages/tag/album?" + param;
    wx.navigateTo({
      url: tagUrl
    })
  },

  /**
   * 停止旋转动画
   */
  stopRotateAnimation: function () {

    var that = this;
    var that = this;
    that.setData({
      albumRotateClass: 'rotate-paused'
    })
  },

  /**
   * 开始旋转动画
   */
  startRotateAnimation: function () {

    var that = this;
    that.setData({
      albumRotateClass: 'rotate-start'
    })
  },

})