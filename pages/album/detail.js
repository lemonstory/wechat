/**
 * swiperItemHeight:说明
 *  1）简介里面的高度是固定的：722rpm
 *  2) 相似里面的高度是固定的: 2180rpm
 *  2) 声音里面的高度是计算的: 计算方法 每行高度(104) * 行数(y) = 高度(z) z赋值给swiperItemHeight
 */

//获取应用实例
var app = getApp()
var audioPauseImageUrl = "http://p.xiaoningmeng.net/static/www/btn_album_pause.png";
var audioPlayImageUrl = "http://p.xiaoningmeng.net/static/www/btn_album_play.png";
const backgroundAudioManager = wx.getBackgroundAudioManager();
const swiperIntroItemHeight = 722;
const swiperRecommendAlbumItemHeight = 2180;
const soundLineHeight = 104;


Page({
  data: {
    'albumId': '',
    'isLoaded': false,
    'constant': app.constant,
    'swiperItemHeight': 0,
    'swiperSoundItemHeight': 0,
  },
  onLoad: function (options) {

    //接收页面参数
    var albumId = options.albumId;
    this.getData(albumId);
    this.setData({
      'albumId': albumId,
      'albumIntroBdIsFold': true,
      'albumIntroBdClass': 'album-intro-bd-fold',
      'albumIntroBdText': '展开简介',

      //初始显示声音选项卡
      'currentTab': 1,

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

  //用户点击右上角分享
  onShareAppMessage: function () {

    return {
      title: app.constant.appName,
      desc: app.constant.appDesc,
      path: 'pages/album/detail'
    }
  },

  onShareAppMessage: function (options) {
    if (options.from === 'button') {
      // 来自页面内转发按钮
      console.log(options.target)
    }
    return {
      title: this.data.data.albumInfo.title,
      path: '/pages/album/detail?albumId=' + this.data.albumId,
      imageUrl: this.data.data.albumInfo.cover,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  handleShareAlbumTap: function () {
    // wx.showActionSheet({
    //   itemList: ['发送给朋友', '生成卡片分享至朋友圈'],
    //   success: function (res) {
    //     switch (res.tapIndex) {
    //       case 0:
    //         wx.showShareMenu({
    //           withShareTicket: true
    //         })
    //         break;
    //       case 1:
    //         console.log("生成卡片分享至朋友圈");
    //         break;
    //       default:
    //         console.log(res.tapIndex);
    //     }
    //     console.log(res.tapIndex)
    //   },
    //   fail: function (res) {
    //     console.log(res.errMsg)
    //   }
    // })

    
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
        that.setData({
          'swiperSoundItemHeight': soundLineHeight * res.data.data.storyList.items.length,
          'swiperItemHeight': soundLineHeight * res.data.data.storyList.items.length,
        })
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

      switch (e.detail.current) {
        case 0:
          that.setData({
            swiperItemHeight: swiperIntroItemHeight
          });
          break;

        case 1:
          that.setData({
            swiperItemHeight: that.data.swiperSoundItemHeight
          });
          break;

        case 2:
          that.setData({
            swiperItemHeight: swiperRecommendAlbumItemHeight
          });
          break;
      }

    }
  },

  /**
   * 音频播放按钮点击
   * 
   */
  handleAudioPlayTap: function (event) {

    console.log("##### handleAudioPlayTap #####");


    if (typeof (backgroundAudioManager.paused) == "undefined") {

      console.log("😀 开始播放");
      backgroundAudioManager.title = event.currentTarget.dataset.title;
      backgroundAudioManager.epname = event.currentTarget.dataset.epname;
      backgroundAudioManager.singer = event.currentTarget.dataset.singer;
      backgroundAudioManager.coverImgUrl = event.currentTarget.dataset.cover_img_url;
      backgroundAudioManager.src = event.currentTarget.dataset.url;

    } else if (backgroundAudioManager.paused) {

      console.log("😀😀 恢复播放");
      backgroundAudioManager.play();

    } else {

      //如果是不同专辑
      if (backgroundAudioManager.epname != event.currentTarget.dataset.epname) {
        console.log("😀😀😀 播放新专辑");
        backgroundAudioManager.title = event.currentTarget.dataset.title;
        backgroundAudioManager.epname = event.currentTarget.dataset.epname;
        backgroundAudioManager.singer = event.currentTarget.dataset.singer;
        backgroundAudioManager.coverImgUrl = event.currentTarget.dataset.cover_img_url;
        backgroundAudioManager.src = event.currentTarget.dataset.url;
      } else {
        //如果是同一专辑
        console.log("😀😀😀😀 暂停播放");
        backgroundAudioManager.pause();
      }
    }
  },

  /** 
  * 滑动切换tab 
  */
  bindChange: function (e) {

    var that = this;
    that.setData({
      currentTab: e.detail.current
    });

    switch (e.detail.current) {
      case 0:
        that.setData({
          swiperItemHeight: swiperIntroItemHeight
        });
        break;

      case 1:
        that.setData({
          swiperItemHeight: that.data.swiperSoundItemHeight
        });
        break;

      case 2:
        that.setData({
          swiperItemHeight: swiperRecommendAlbumItemHeight
        });
        break;
    }
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


