//index.js
//获取应用实例
var app = getApp()
Page({

  //页面的初始数据
  data: {
    'isLoaded': false,
  },

  onLoad: function (options) {

    // 生命周期函数--监听页面加载
    console.log('🤡  onLoad');

    wx.showLoading({
      title: '加载中...',
    });

    this.getData();

    //调用应用实例的方法获取全局数据
    this.setData({
      constant: app.constant
    });
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {

    //动态设置当前页面的标题。
    wx.setNavigationBarTitle({
      title: app.constant.appName,
      success: function () {
        console.log('setNavigationBarTitle --- success');
      },
      fail: function () {
        console.log('setNavigationBarTitle --- fail');
      },
      complete: function () {
        console.log('setNavigationBarTitle --- complete');
      },
    });
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
    // this.getData();
    wx.startPullDownRefresh();
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

  getData: function () {
    var that = this;
    wx.request({
      url: 'http://dev.xiaoningmeng.net/default/v2.6.4/index.php', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json', // 默认值
        // 'user-agent': 'api.xiaoningmeng.net/2.8.0/adr (M5 Note,864883030379469,460027404571654,6.0,1080*1920,4.589389937671455,480,wifi,_360,zh)',
      },
      success: function (res) {
        wx.hideLoading();
        res.data.isLoaded = true;
        console.log(res.data);
        that.setData(res.data, function () {
          that.setDataCallBack();
        });
      }
    })
  },

  /**
   * 获取数据成功回调
   * 修改: 焦点图数据
   */
  setDataCallBack: function () {

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
        tagUrl = "/pages/tag/album?tagId=" + tagId;
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
    var authorUrl = "/pages/author/album?uid=" + uid;
    wx.navigateTo({
      url: authorUrl
    })
  },

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },
});
