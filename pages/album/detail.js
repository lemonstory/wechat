/**
 * 
 */

//获取应用实例
var app = getApp()
var audioPauseImageUrl = "http://p.xiaoningmeng.net/static/www/btn_album_pause.png";
var audioPlayImageUrl = "http://p.xiaoningmeng.net/static/www/btn_album_play.png";
const backgroundAudioManager = wx.getBackgroundAudioManager();

Page({
  data: {
    'isLoaded': false,
    'constant': app.constant
  },
  onLoad: function (options) {
    
    //接收页面参数
    var albumId = options.albumId;
    this.getData(albumId);

    this.setData({
      'albumIntroBdIsFold': true,
      'albumIntroBdClass': 'album-intro-bd-fold',
      'albumIntroBdText': '展开简介',

      'isAlbumIntroHidden': true,
      'isAlbumStorysHidden': false,
      'isAlbumSimilarHidden': true,
      'albumIntroNavBarOn': '',
      'albumStorysNavBarOn': 'weui-bar__item_on',
      'albumSimilarNavBarOn': '',
      'currentPosition': 0,
      'audioPlayBtnImageUrl': audioPlayImageUrl,
    });
  },

  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    //     app.getUserInfo(function(userInfo){
    //   //更新数据
    //   this.setData({
    //     userInfo:userInfo
    //   })
    //   this.update()
    // })
    // this.setData({
    //   globalData:app.globalData
    // })

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

  /**
   * 音频播放按钮点击
   * 
   */
  handleAudioPlayTap: function (event) {

    console.log("##### handleAudioPlayTap #####");

    
    if (typeof (backgroundAudioManager.paused) == "undefined" || backgroundAudioManager.paused) {
      console.log("😀 开始播放");
      backgroundAudioManager.title = event.currentTarget.dataset.title;
      backgroundAudioManager.epname = "专辑名称";
      backgroundAudioManager.singer = "主播名称";
      backgroundAudioManager.coverImgUrl = event.currentTarget.dataset.cover_img_url;
      backgroundAudioManager.src = event.currentTarget.dataset.url;
    }else{
      console.log("😀😀😀 暂停播放");
      backgroundAudioManager.pause();
    }
  },

  //用户点击右上角分享
  onShareAppMessage: function () {
    return {
      title: app.constant.appName,
      desc: app.constant.appDesc,
      path: 'pages/album/detail'
    }
  },

  handleShareAlbumTap: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },


  handleBatchDownloadAlbum: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },

  handleAlbumIntroActionBtn: function () {
    console.log(this.data);
    if (this.data.albumIntroBdIsFold) {
      this.setData({
        'albumIntroBdIsFold': false,
        'albumIntroBdClass': 'album-intro-bd-unfold',
        'albumIntroBdText': '收起',
      });
    } else {
      this.setData({
        'albumIntroBdIsFold': true,
        'albumIntroBdClass': 'album-intro-bd-fold',
        'albumIntroBdText': '展开简介',
      });
    }
  },

  handleAlbumIntroNavTap: function () {
    this.setData({
      'isAlbumIntroHidden': false,
      'isAlbumStorysHidden': true, 'isAlbumSimilarHidden': true,
      'albumIntroNavBarOn': 'weui-bar__item_on',
      'albumStorysNavBarOn': '',
      'albumSimilarNavBarOn': '',
    });
  },

  handleAlbumStorysNavTap: function () {
    this.setData({
      'isAlbumIntroHidden': true,
      'isAlbumStorysHidden': false,
      'isAlbumSimilarHidden': true,
      'albumIntroNavBarOn': '',
      'albumStorysNavBarOn': 'weui-bar__item_on',
      'albumSimilarNavBarOn': '',
    });
  },

  handleAlbumSimilarNavTap: function () {
    this.setData({
      'isAlbumIntroHidden': true,
      'isAlbumStorysHidden': true,
      'isAlbumSimilarHidden': false,
      'albumIntroNavBarOn': '',
      'albumStorysNavBarOn': '',
      'albumSimilarNavBarOn': 'weui-bar__item_on',
    });
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
   * 处理标签点击
   */
  handleTagTap: function (event) {
    var tagId = event.currentTarget.dataset.id;
    var tagUrl = "/pages/tag/album?tagId=" + tagId;
    wx.navigateTo({
      url: tagUrl
    })
  },


  getData: function (albumId) {
    var that = this;
    var url = that.data.constant.domain + '/album/v2.6/info.php?album_id=' + albumId;
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
  },


})

//监听音乐播放
backgroundAudioManager.onPlay(function () {

  console.log("######## backgroundAudioManager.onPlay ######");
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  wx.getBackgroundAudioPlayerState({
    success: function (res) {
      if (1 === res.status)
        console.log("status = " + res.status);
      currentPage.setData({
        'audioPlayBtnImageUrl': audioPauseImageUrl,
      })
    }
  })
})

//监听音乐暂停
backgroundAudioManager.onPause(function () {

  console.log("######## backgroundAudioManager.onPause ######");
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  wx.getBackgroundAudioPlayerState({
    success: function (res) {
      console.log("currentPosition = " + res.currentPosition);
      currentPage.setData({
        'currentPosition': res.currentPosition,
        'audioPlayBtnImageUrl': audioPlayImageUrl,
      })
    }
  })
}

);


