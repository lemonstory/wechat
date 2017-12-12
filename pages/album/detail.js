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
const Toast = require('../../zanui-weapp/dist/toast/index');


//页面二维码地址
var qrCodeUrl = "https://wx1.sinaimg.cn/mw690/00019562gy1fmae3hw25tj20sn0trjxp.jpg";
//用户头像地址
var avatarUrl = "https://tva3.sinaimg.cn/crop.10.0.1102.1102.50/b8b73ba1jw8fcno216vedj20v90ummzs.jpg";
var name = "帅帅";

const ctx = wx.createCanvasContext('myCanvas');

Page(Object.assign({}, Toast, {
  data: {
    'albumId': '',
    'isLoaded': false,
    'constant': app.constant,
    'swiperItemHeight': 0,
    'swiperSoundItemHeight': 0,

    'showBottomPopup': false,

    //生成分享卡片相关 -start
    'isImageDownloadComplete': false,
    'isQrCodeDownloadComplete': false,
    'isAvatarDownloadComplete': false,

    'imageTempFilePath': '',
    'qrCodeTempFilePath': '',
    'avatarTempFilePath': '',
    'canvasTempFilePath': '',
    'isCanvasToFileOk': false,
    'isCanvasToFileBeing': false,
    //生成分享卡片相关 -end

    //保存到相册
    'isCanvasFilePreview': false,
    'isCanvasFileSavePhone': false,
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
    //分享卡片预览后则自动保存至相册
    var that = this;
    if (that.data.isCanvasFilePreview && !that.data.isCanvasFileSavePhone) {
      that.handleSaveImageToPhotosAlbum()
    }
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

    var that = this;
    if (options.from === 'button') {
      // 来自页面内转发按钮
      console.log(options.target)
    } else {

    }
    return {
      title: this.data.data.albumInfo.title,
      path: '/pages/album/detail?albumId=' + this.data.albumId,
      imageUrl: this.data.data.albumInfo.cover,
      success: function (res) {
        // 转发成功
        console.log(res);
      },
      fail: function (res) {
        // 转发失败
        console.log(res);
        if (res.errMsg == "shareAppMessage:fail cancel") {
          that.showToast("被取消了,不高兴 😭 ");
        }
      }
    }
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

  /**
   * 生成分享卡片
   */
  generateShareCard: function () {

    var that = this;
    console.log("generateShareCard RUN");
    that.toggleBottomPopup();

    that.downloadImageFile(that.data.data.albumInfo.cover, qrCodeUrl, avatarUrl, name, that.data.data.albumInfo.title);
    that.handlePreviewImage();
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

  toggleBottomPopup() {
    this.setData({
      showBottomPopup: !this.data.showBottomPopup
    });
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

  showToast(message) {
    this.showZanToast(message);
  },

  downloadImageFile: function (imageUrl, qrCodeUrl, avatarUrl,name,title) {
    var that = this;
    //下载封面图地址
    wx.downloadFile({

      url: imageUrl,
      success: function (res) {
        console.log("wx.downloadFile SUCCESS");
        if (res.statusCode === 200) {
          that.setData({
            'imageTempFilePath': res.tempFilePath,
          });
        }
      },
      fail: function (res) {
        console.log("wx.downloadFile FAIL");
        console.log(res);
      },

      complete: function (res) {
        console.log("wx.downloadFile COMPLETE");
        console.log(res);
        that.setData({
          'isImageDownloadComplete': true,
        });

        if (that.data.isImageDownloadComplete && that.data.isQrCodeDownloadComplete && that.data.isAvatarDownloadComplete) {
          that.startCanvasDraw(name, title);
        }
      }
    });

    //下载二维码
    wx.downloadFile({

      url: qrCodeUrl,
      success: function (res) {
        console.log("wx.downloadFile SUCCESS");
        if (res.statusCode === 200) {
          that.setData({
            'qrCodeTempFilePath': res.tempFilePath,
          });
        }
      },
      fail: function (res) {
        console.log("wx.downloadFile FAIL");
        console.log(res);
      },

      complete: function (res) {
        console.log("wx.downloadFile COMPLETE");
        console.log(res);
        that.setData({
          'isQrCodeDownloadComplete': true,
        });

        if (that.data.isImageDownloadComplete && that.data.isQrCodeDownloadComplete && that.data.isAvatarDownloadComplete) {
          that.startCanvasDraw(name, title);
        }
      }
    });

    //下载头像
    wx.downloadFile({

      url: avatarUrl,
      success: function (res) {
        console.log("wx.downloadFile SUCCESS");
        if (res.statusCode === 200) {
          that.setData({
            'avatarTempFilePath': res.tempFilePath,
          });
        }
      },
      fail: function (res) {
        console.log("wx.downloadFile FAIL");
        console.log(res);
      },

      complete: function (res) {
        console.log("wx.downloadFile COMPLETE");
        console.log(res);
        that.setData({
          'isAvatarDownloadComplete': true,
        });

        if (that.data.isImageDownloadComplete && that.data.isQrCodeDownloadComplete && that.data.isAvatarDownloadComplete) {
          that.startCanvasDraw(name, title);
        }
      }
    });
  },

  /**
  * @param name String 用户姓名
  * @param title String 专辑标题
  */
  startCanvasDraw: function (name,title) {

    var rectWidth;
    var rectHeight;
    var rectX = 30;
    var rectY = 10;
    var imageWidth = 180;
    var imageHeight = 180;
    var avatarWidth = 28;
    var avatarHeight = 28;
    var avatarMargin = 20;
    var nameMarginLeft = 20;
    var titleMarginLeft = 60;
    var lineHeight = 25;
    var qrCodeWidth = 120;

    try {
      var res = wx.getSystemInfoSync()
      console.log(res.model)
      console.log(res.pixelRatio)
      console.log(res.windowWidth)
      console.log(res.windowHeight)
      console.log(res.language)
      console.log(res.version)
      console.log(res.platform)

      rectWidth = res.windowWidth * 0.8;
      rectHeight = (res.windowWidth * 0.8) / (res.windowWidth / res.windowHeight);
      rectX = res.windowWidth * 0.1;
      rectY = res.windowHeight * 0.02;

    } catch (e) {
      // Do something when catch error
    }

    console.log("rectWidth = " + rectWidth + ", rectHeight = " + rectHeight + ", rectX = " + rectX + ", rectY = " + rectY);



    var that = this;

    //正方形容器,阴影
    //TODO:圆角矩形背景
    ctx.setFillStyle('#F5F6F5')
    // ctx.setShadow(30, 10, 50, '#B5B5B5');
    // ctx.fillRect(30, 10, 300, 400)
    ctx.setStrokeStyle('blue')
    // ctx.strokeRect(rectX, rectY, rectWidth, rectHeight)
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight)

    //TODO:让封面图居中

    ctx.drawImage(that.data.imageTempFilePath, rectX + rectWidth / 2 - imageWidth / 2, rectY, imageWidth, imageHeight);

    //用户头像

    ctx.save(); // 保存当前ctx的状态
    ctx.arc(rectX + avatarWidth / 2 + avatarWidth / 2, rectY + avatarMargin + imageWidth + avatarWidth / 2, avatarWidth / 2, 0, 2 * Math.PI); //画出圆
    ctx.clip(); //裁剪上面的圆形
    ctx.drawImage(that.data.avatarTempFilePath, rectX + avatarWidth / 2, rectY + avatarMargin + imageWidth, avatarWidth, avatarWidth); // 在刚刚裁剪的园上画图
    ctx.restore(); // 还原状态

    //二维码
    ctx.drawImage(that.data.qrCodeTempFilePath, rectWidth * 0.9 - qrCodeWidth / 2, rectY + imageHeight + avatarMargin + avatarMargin + lineHeight * 3 - qrCodeWidth / 2, qrCodeWidth, qrCodeWidth);

    //用户姓名
    //最多四个汉字
    ctx.setFontSize(15)
    ctx.setFillStyle("#FFA500")
    ctx.setTextAlign('left')

    ctx.fillText(name, rectX + avatarWidth + nameMarginLeft, rectY + imageHeight + avatarMargin + avatarMargin)

    //专辑名称
    ctx.setFontSize(14)
    ctx.setFillStyle("#B5B5B5")
    ctx.setTextAlign('left')

    ctx.fillText('家的小宝贝 正在收听' + title, rectX + avatarWidth + nameMarginLeft + titleMarginLeft, rectY + imageHeight + avatarMargin + avatarMargin)
    // ctx.fillText('长长长的名字', rectX + avatarWidth + nameMarginLeft, rectY + imageHeight + avatarMargin + avatarMargin + lineHeight)

    //二维码推荐语
    ctx.setFontSize(14)
    ctx.setFillStyle("#000111")
    ctx.setTextAlign('left')
    ctx.fillText('长按二维码, 马上收听.', rectX + avatarWidth / 2, rectY + imageHeight + avatarMargin + avatarMargin + lineHeight * 3)

    //draw是异步
    //TODO:draw 的异步callback在ios  微信6.5.23 上时而工作,时而不工作
    console.log("开始 ### draw ### ");
    ctx.draw(false, function () {
      console.log("完成 ### draw ### ");
      console.log("🐷 🐷 🐷 🐷 🐷 🐷 🐷 🐷 🐷 🐷");
      that.handleCanvasToTempFilePath();
    });

    if (!that.data.isCanvasToFileBeing && !that.data.isCanvasToFileOk) {
      setTimeout(that.handleCanvasToTempFilePath, 600);
    }
  },



  //canvas生成图片
  //TODO:偶发的会出现 canvasToTempFilePath fail canvas is empty 的错误
  handleCanvasToTempFilePath: function () {

    console.log("开始 ### CanvasToTempFilePath ### ");
    var that = this;
    console.log("that.data.isCanvasToFileOk = " + that.data.isCanvasToFileOk);
    if (!that.data.isCanvasToFileBeing && !that.data.isCanvasToFileOk) {

      that.setData({
        'isCanvasToFileBeing': true,
      })

      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        canvasId: 'myCanvas',
        fileType: 'png',
        quality: 1,
        success: function (res) {
          console.log("😀😀😀😀😀😀");
          console.log(res);
          that.setData({
            'canvasTempFilePath': res.tempFilePath,
            'isCanvasToFileOk': true,
          })
          //显示预览图
          that.handlePreviewImage();
        },
        fail(res) {
          console.log("🐌 🐌 🐌 wx.canvasToTempFilePath FAIL");
          console.log(res);
        },
        complete(res) {
          that.setData({
            'isCanvasToFileBeing': false,
          })
          console.log("🍺 🍺 🍺 wx.canvasToTempFilePath COMPLETE");
          console.log(res);
        },
      })
    }
    console.log("完成 ### CanvasToTempFilePath ### ");
  },

  handleSaveImageToPhotosAlbum: function () {

    var that = this;
    //保存图片到系统相册
    if (that.data.isCanvasToFileOk) {
      wx.saveImageToPhotosAlbum({

        filePath: that.data.canvasTempFilePath,
        success(res) {
          that.setData({
            'isCanvasFileSavePhone': true,
          });
          that.showToast("已经保存到系统相册");
        },

        fail(res) {
          console.log("wx.saveImageToPhotosAlbum FAIL");
          console.log(res);
        },

        complete(res) {
          console.log("wx.saveImageToPhotosAlbum COMPLETE");
          console.log(res);
        },
      })
    } else {
      console.log("🐛 handleSaveImageToPhotosAlbum isCanvasToFileOk FALSE")
    }

  },

  handlePreviewImage: function () {

    var that = this;
    if (that.data.isCanvasToFileOk) {

      wx.previewImage({
        current: that.data.canvasTempFilePath, // 当前显示图片的http链接
        urls: [that.data.canvasTempFilePath], // 需要预览的图片http链接列表
        success: function (res) {

          console.log("wx.previewImage SUCCESS");
          console.log(res);
          that.setData({
            'isCanvasFilePreview': true,
          });
        },
        fail: function (res) {
          console.log("wx.previewImage FAIL");
          console.log(res);
        },
        complete: function (res) {
          console.log("wx.previewImage COMPLETE");
          console.log(res);
        },
      })
    } else {
      console.log("🐛 handlePreviewImage isCanvasToFileOk FALSE")
    }
  },

}));

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