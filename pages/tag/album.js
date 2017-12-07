const Tab = require('../../zanui-weapp/dist/tab/index');
var app = getApp()
Page(Object.assign({}, Tab, {
  data: {
    tab: {
      list: [],
      selectedId: '',
      scroll: true,
      height: 45
    },

    //页面的初始数据
    'isLoaded': false,
    'constant': app.constant,
    'currentTagId': '',
  },

  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  },

  onLoad: function (options) {

    var tagId = options.tagId;
    this.setData({
      'currentTagId': tagId,
    });
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {

    this.getData(this.data.currentTagId);
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

  getData: function (currentTagId) {
    var that = this;
    wx.request({
      url: that.data.constant.domain + '/tag/v2.6/gettagalbumlist.php?currenttagid=' + currentTagId, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json', // 默认值
        // 'user-agent': 'api.xiaoningmeng.net/2.8.0/adr (M5 Note,864883030379469,460027404571654,6.0,1080*1920,4.589389937671455,480,wifi,_360,zh)',
      },
      success: function (res) {
        wx.hideLoading();
        res.data.isLoaded = true;
        that.setData(res.data);

        //设置tab页签数据
        if (typeof (res.data.data.secondtaglist) != "undefined" && res.data.data.secondtaglist.length > 0) {
          var i;
          var tabList = [];
          var selectedId;
          for (i = 0; i < res.data.data.secondtaglist.length; i++) {

            var tagItem = {};
            if (i == 0) {
              selectedId = res.data.data.secondtaglist[i].id;
            }
            tagItem.id = res.data.data.secondtaglist[i].id;
            tagItem.title = res.data.data.secondtaglist[i].name;
            tabList.push(tagItem);
          }
          that.setData({
            tab: {
              list: tabList,
              selectedId: selectedId,
              scroll: true,
              height: 45
            },
          });
        }

        that.setDataCallBack();
      }
      
    })
    console.log("🍺  🍺 🍺");
    console.log(that.data); 
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
   * 停止下拉刷新动画
   */
  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res) {
      }
    });
  },

  /**
 * 获取数据成功回调
 * 修改: 焦点图数据
 */
  setDataCallBack: function () {

  },


}));
