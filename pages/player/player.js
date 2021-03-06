//文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-animation.html
// pages/play/play.js

var app = getApp()
var util = require('../../utils/util.js')
var play = require('../../utils/play.js')

const backgroundAudioManager = wx.getBackgroundAudioManager();
const Toast = require('../../zanui-weapp/dist/toast/index');
var n = 0;

Page(Object.assign({}, Toast, {

  /**
   * 页面的初始数据
   */
  data: {
    'constant': app.constant,
    'animationData': {},
    'setIntervalRet': '',

    //播放进度
    'startTime': '00:00',
    'endTime': '00:00',
    'endTimeSecond': '0',
    'progressPercent': '0',

    //封面旋转
    'albumRotateClass':'',

    //显示底部弹窗
    'isShowBottomPopup': false,
  },

  onLoad: function () {

    console.log("🤡 🤡 🤡 🤡 🤡  detail 【onLoad】");
    var that = this;
    that.setPageTitle();
    that.setStoryEndTime();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onReady: function () {
    console.log("🤡 🤡 🤡 🤡 🤡  detail 【onReady】");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    console.log("🤡 🤡 🤡 🤡   detail 【onShow】");
    var that = this;
    that.setPageTitle();
    that.setStoryEndTime();
    that.playerStatusMonitor();
    if (that.data.constant.playerStatus == 'play') {
      // n = 0;
      that.startRotateAnimation();
    } else {
      that.stopRotateAnimation();
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

    console.log("🤡 🤡 🤡 🤡   detail 【onHide】");
    var that = this;
    console.log(that.data.constant.playerStatus);
    if (that.data.constant.playerStatus == 'play') {
      that.stopRotateAnimation();
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

    console.log("🤡 🤡 🤡 🤡   detail 【onUnload】");
    var that = this;
    console.log(that.data.constant.playerStatus);
    if (that.data.constant.playerStatus == 'play') {
      n = 0;
      that.stopRotateAnimation();
    }
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

  showToast(message) {
    this.showZanToast(message);
  },

  /**
   * 设置故事结束时间
   */
  setStoryEndTime: function () {

    var that = this;
    var storyList = app.constant.currentPlayAlbumDetail.storyList;
    var storyIdx = app.constant.currentPlayStoryIndex;
    var storyDetail = storyList.items[storyIdx];
    var endTimeSecond = storyDetail.times;


    that.setData({
      'endTimeSecond': endTimeSecond,
      'endTime': util.secondToDate(endTimeSecond)
    })
  },

  /**
   * 设置页面标题 
   */
  setPageTitle: function () {

    var that = this;
    var storyList = app.constant.currentPlayAlbumDetail.storyList;
    var storyIdx = app.constant.currentPlayStoryIndex;
    var storyDetail = storyList.items[storyIdx];
    wx.setNavigationBarTitle({
      title: storyDetail.title,
      success: function () {
      },

      fail: function () {

      },
      complete: function () {

      },
    });
  },

  toggleBottomPopup() {
    this.setData({
      isShowBottomPopup: !this.data.isShowBottomPopup
    });
  },

  /**
   * 列表点击
   */
  handleListTap: function (event) {

    var albumId = app.constant.currentPlayAlbumId;
    var albumDetailUrl = "/pages/album/detail?albumId=" + albumId;
    wx.navigateTo({
      url: albumDetailUrl
    })
  },

  /**
  * 音频播放按钮点击
  * 
  */
  handleAudioPlayTap: function (event) {

    console.log("##### handleAudioPlayTap #####");
    console.log(event);
    var that = this;
    play.audioPlaySwitch(
      app.constant.currentPlayAlbumDetail,
      event.currentTarget.dataset.album_id,
      app.constant.appName,
      event.currentTarget.dataset.story_id,
      event.currentTarget.dataset.story_idx,
      function () {
        console.log("【player】play.audioPlay callback Run");
        that.setData({
          'constant': app.constant,
        });
      })
  },

  //播放上一首,或者从头开始继续播放
  handlePlayPrev: function (event) {

    var that = this;
    if (app.constant.currentPlayStoryIndex > 0) {
      play.prev(function () {
        console.log("play.audioPlay callback Run");
        that.setData({
          'constant': app.constant,
        });
      });
      that.setPageTitle();
      that.setStoryEndTime();
    } else {
      that.showToast("已经是第一首~\(≧▽≦)/~啦啦啦");
    }

  },

  //播放下一首,或者从头开始继续播放
  handlePlayNext: function (event) {

    var that = this;
    var total = app.constant.currentPlayAlbumDetail.storyList.total;
    if (app.constant.currentPlayStoryIndex < total - 1) {
      play.next(function () {
        console.log("play.audioPlay callback Run");
        that.setData({
          'constant': app.constant,
        });
      });
      that.setPageTitle();
      that.setStoryEndTime();
    } else {
      that.showToast("已经是最后一首~\(≧▽≦)/~啦啦啦");
    }
  },

  /**
   * 更换播放模式
   */
  handleChangePlayerMode: function (event) {

    var that = this;
    var playerModeAll = ['order', 'repeat', 'shuffle'];
    var currentPlayerMode = event.currentTarget.dataset.player_mode;
    var currentPlayerModeIndex = playerModeAll.indexOf(currentPlayerMode);

    console.log(event);
    console.log("currentPlayerMode = " + currentPlayerMode);
    console.log("currentPlayerModeIndex = " + currentPlayerModeIndex);

    var index = 0;
    if (currentPlayerModeIndex != -1) {
      if (currentPlayerModeIndex + 1 < playerModeAll.length) {
        index = currentPlayerModeIndex + 1;
      }
    }
    console.log(index);
    console.log(playerModeAll[index]);
    app.constant.playerMode = playerModeAll[index];
    that.setData({
      'constant': app.constant,
    });

    console.log(app.constant);
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
      albumRotateClass:'rotate-start'
    })
  },

  playerStatusMonitor: function () {

    var that = this;
    //监听音频播放
    backgroundAudioManager.onPlay(function () {

      console.log("【player】backgroundAudioManager.onPlay")
      app.constant.playerStatus = 'play';
      that.setData({
        'constant': app.constant,
      })
      that.startRotateAnimation();
    })

    //监听音频暂停
    backgroundAudioManager.onPause(function () {

      console.log("【player】backgroundAudioManager.onPause")
      app.constant.playerStatus = 'pause';
      that.setData({
        'constant': app.constant,
      })
      that.stopRotateAnimation();
    })

    backgroundAudioManager.onStop(function () {
      app.constant.playerStatus = 'stop';
      that.setData({
        'constant': app.constant,
      })
      that.stopRotateAnimation();
    })

    //监听音频自然播放结束
    backgroundAudioManager.onEnded(function () {

      console.log("######## player backgroundAudioManager.onEnded ######");
      app.constant.playerStatus = 'end';
      that.setData({
        'constant': app.constant,
      })

      //播放下一首,或者从头开始继续播放
      //播放模式
      console.log("播放模式：" + app.constant.playerMode);
      var index = 0;
      if (app.constant.playerMode == 'repeat') {
        play.repeat(function () {
          console.log("play.audioPlay callback Run");
          that.setData({
            'constant': app.constant,
          }
          )
        });
      } else {
        play.next(function () {
          console.log("play.audioPlay callback Run");
          that.setData({
            'constant': app.constant,
          });
        })
      }
    })

    backgroundAudioManager.onTimeUpdate(function () {

      //播放时间及进度条处理
      var currentTimeSecond = backgroundAudioManager.currentTime;
      var startTime = util.secondToDate(currentTimeSecond);
      var progressPercent = Math.floor((currentTimeSecond / that.data.endTimeSecond) * 100);
      that.setData({
        'startTime': startTime,
        'progressPercent': progressPercent
      })
    })

    backgroundAudioManager.onPrev(function () {

      // console.log("######## backgroundAudioManager.onPrev ######");
    })

    backgroundAudioManager.onNext(function () {

      // console.log("######## backgroundAudioManager.onNext ######");
    })

    backgroundAudioManager.onError(function () {

      // console.log("######## backgroundAudioManager.onError ######");

    })

    backgroundAudioManager.onWaiting(function () {

      // console.log("######## backgroundAudioManager.onWaiting ######");

    })

    backgroundAudioManager.onCanplay(function () {
      console.log("######## backgroundAudioManager.onCanplay ######");
    })
  }
}));