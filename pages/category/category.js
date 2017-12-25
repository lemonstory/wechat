//获取应用实例
var app = getApp()
Page({

  data: {
    'isLoaded': false,
    'constant': app.constant
  },

  onLoad: function (options) {
    this.getData();
  },

  onReady: function () {
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

  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    this.getData();
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
    wx.request({
      url: that.data.constant.domain + '/default/v2.6/category.php', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json', // 默认值
        // 'user-agent': 'api.xiaoningmeng.net/2.8.0/adr (M5 Note,864883030379469,460027404571654,6.0,1080*1920,4.589389937671455,480,wifi,_360,zh)',
      },
      success: function (res) {
        wx.hideLoading();
        res.data.isLoaded = true;
        that.setData(res.data);
        that.setDataCallBack();
      }
    })
  },

  /**
   * 获取数据成功回调
   */
  setDataCallBack: function () {
    this.stopPullDownRefresh();
  },

  /**
   * 停止下拉刷新动画
  */
  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res) {
      }
    });
  },

    /**
   * 处理标签(全部分类)点击
   * 通过linkurl字符串判断页面跳转方向
   *    1) 含有字符串tag_id={2}跳转至标签页
   *    2) 含有字符串category.php跳转至全部分类
   */
  handleTagTap: function (event) {

    var tagUrl
    var linkUrl = event.currentTarget.dataset.linkurl;
    var tagIdIndex = linkUrl.indexOf("tag_id");
    var paramIndex = linkUrl.indexOf("&");
    var tagIdSubStr;
    if (tagIdIndex != -1) {
      if (paramIndex != -1) {
        tagIdSubStr = linkUrl.substring(tagIdIndex, paramIndex);
      } else {
        tagIdSubStr = linkUrl.substring(tagIdIndex);
      }

      var tagIdArr = tagIdSubStr.split("=");
      var tagId = parseInt(tagIdArr[1]);
      if (tagId > 0) {
        tagUrl = "/pages/tag/album?selectSecondTagId=" + tagId;
      }
    }

    var categoryIndex = linkUrl.indexOf("category.php");
    if (categoryIndex > 0) {
      tagUrl = "/pages/category/category";
    }

    wx.navigateTo({
      url: tagUrl
    })
  },

  /**
   * 年龄段-点击
   */
  bindTapAgeLevel:function(event) {

    var title = event.currentTarget.dataset.title;
    var minAge = 0;
    var maxAge = 0;
    var ageStr = title.replace('岁', '')
    var ageArr = ageStr.split("-");

    minAge = ageArr[0];
    maxAge = ageArr[1];

    var url = "/pages/age/index?minAge=" + minAge + "&maxAge=" + maxAge;
    wx.navigateTo({
      url: url,
    })
  }
})