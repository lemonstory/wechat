
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
               url: that.data.constant.domain + '/default/v2.6.4/index.php', //仅为示例，并非真实的接口地址
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
   * 点击切换简介,声音,相似tab
   */
     handleSwichNav: function (e) {

          var that = this;
          if (this.data.currentTab === e.target.dataset.current) {
               return false;
          } else {

               that.setData({
                    currentTab: e.target.dataset.current
               })
          }
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
