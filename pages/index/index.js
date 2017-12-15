//index.js
//获取应用实例
var app = getApp()
Page({

  //页面的初始数据
  data: {
    'isLoaded': false,
    'constant': app.constant
  },

  onLoad: function (options) {

    // wx.showToast({
    //   title: '加载中...',
    //   icon: 'loading'
    // });
    
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {

    this.getData();
    //动态设置当前页面的标题。
    wx.setNavigationBarTitle({
      title: app.constant.appName,
      success: function () {
      },

      fail: function () {

      },
      complete: function () {

      },
    });
  },

  onShow: function () {
    // 生命周期函数--监听页面显示
    this.setData({
      'constant': app.constant,
    })
  },

  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },

  onUnload: function () {
    // 生命周期函数--监听页面卸载
  },

  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },

  //用户点击右上角分享
  onShareAppMessage: function () {
    return {
      title: app.constant.appName,
      desc: app.constant.appDesc,
      path: 'pages/index/index'
    }
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    this.getData();
  },

  getData: function () {
    var that = this;
    wx.request({
      url: that.data.constant.domain+'/default/v2.6.4/index.php', //仅为示例，并非真实的接口地址
      data: {},
      header: {
     'content-type': 'application/json', // 默认值
        // 'user-agent': 'api.xiaoningmeng.net/2.8.0/adr (M5 Note,864883030379469,460027404571654,6.0,1080*1920,4.589389937671455,480,wifi,_360,zh)',
      },
      success: function (res) {
        wx.hideLoading();
        res.data.isLoaded = true;
        console.log(res.data);
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

    this.stopPullDownRefresh();
    var focusArr = this.data.data.focus.items;
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
      'data.focus.items': albumFocusArr,
      'data.focus.total': albumFocusArr.length,
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
    var index = event.currentTarget.dataset.index;
    var linkUrl = this.data.data.category.items[index].linkurl;
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
        tagUrl = "/pages/tag/album?selectFirstTagId=" + tagId;
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
   * 处理今日精选,同龄在听,最新上架右侧{更多}点击
   */
  handleRecommendTap: function (event) {


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
   * 处理作者点击
   */
  handleTapAuthor: function (event) {
    var uid = event.currentTarget.dataset.uid;
    var authorUrl = "/pages/author/album?author_id=" + uid + "&start_album_id=0";
    wx.navigateTo({
      url: authorUrl
    })
  },

  /**
   * 停止下拉刷新动画
   */
  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res) {
      }
    });
  }
});
