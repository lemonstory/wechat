//获取应用实例
//
var Base64 = require('../../utils/base64.modified.js');
var app = getApp()
Page({
  data: {
    'isLoaded': false,
    'constant': app.constant,

    'start_album_id':'0',
    'len':50,
    'author_id':'',
    'intro': '',
  },
  onLoad: function (options) {

    this.setData({
      'author_id': options.author_id,
      'selectSecondTagId': options.start_album_id
    });

  },

  onReady: function () {

    this.getData();
    // 生命周期函数--监听页面初次渲染完成
    app.getUserInfo(function (userInfo) {
      //更新数据
      this.setData({
        userInfo: userInfo
      })
      this.update()
    })
    this.setData({
      globalData: app.globalData
    })
  },

  onShow: function () {
    // 生命周期函数--监听页面显示
  },

  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },

  onUnload: function () {
    // 生命周期函数--监听页面卸载
  },

  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
  },

  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },

  //用户点击右上角分享
  onShareAppMessage: function () {
    return {
      title: app.constant.appName,
      desc: app.constant.appDesc,
      path: 'pages/category/category'
    }
  },

  getData: function () {
    var that = this;
    var url = that.data.constant.domain + '/default/v2.6/author_album_list.php?author_id=' + that.data.author_id + "&start_album_id=" + that.data.start_album_id + "&len=" + that.data.len;
    console.log(url);
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
        var intro = res.data.data.info.intro.replace(/<(?:.|\n)*?>|&nbsp;/gm, '');
        that.setData(res.data);
        that.setData({
          'intro': intro,
        })
        that.setDataCallBack();
        console.log(res.data);
      }
    })
  },

  /**
   * 获取数据成功回调
   */
  setDataCallBack: function () {
  },

  /**
  * 处理作者wiki点击
  */
  handleAuthorTap: function (event) {

    var url = Base64.encode(event.currentTarget.dataset.url);
    var authorWikiUrl = "/pages/author/wiki?url=" + url;
    wx.navigateTo({
      url: authorWikiUrl
    })
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

})