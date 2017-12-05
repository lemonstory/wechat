/**
 * 
 */

//获取应用实例
var app = getApp()
var audioPauseImageUrl = "http://p.xiaoningmeng.net/static/www/btn_album_pause.png";
var audioPlayImageUrl = "http://p.xiaoningmeng.net/static/www/btn_album_play.png";

Page({
  data:{
    "code": 10000,
    "data": {
        "albumInfo": {
            "id": "14277",
            "title": "长在树上的猫尾巴",
            "star_level": "3",
            "story_num": "5",
            "intro": "　　张秋生所著的《张秋生小巴掌经典童话》是作者的童话故事作品集。作家将真挚深沉的情感注入作品中，使它们充满了活力和魅力，从而不仅让读者感受到了儿童文学的空灵、纯美、大气，更会受到人生的启迪，达到净化心灵的目的。",
            "age_str": "适合7-10岁",
            "buy_link": "https://s.click.taobao.com/t?e=m%3D2%26s%3D6ONnzq4yezocQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67vviKGJNZxEGbJxUEh8sgi8EznJSoMR8P4mzUK4UwxSqnL%2BTcScAYXq13HpKfjWg1f8cb1idx3L6yFtYwGoPP9BlcCTDVXdgTp2kziQ1W%2B3%2FxiXvDf8DaRs%3D&pvid=10_1.86.245.210_541_148402",
            "cover": "http://p.xiaoningmeng.net/album/2016/11/25/ccf4769973f7658ac976a063527c4292.jpg@!460x460?v=1480054500",
            "fav": 1,
            "listennum": "960万",
            "favnum": "1",
            "commentnum": "0"
        },
        "storyList": {
            "total": "5",
            "items": [
                {
                    "id": "476460",
                    "album_id": "14277",
                    "title": "第1集",
                    "times": "1079",
                    "mediapath": "http://mf.xiaoningmeng.net/2016/09/18/bba2b2741fb48693ebc2a540518fe559.mp3",
                    "view_order": "1",
                    "playcover": "http://p.xiaoningmeng.net/album/2016/11/25/ccf4769973f7658ac976a063527c4292.jpg@!460x460?v=1480054500"
                },
                {
                    "id": "476461",
                    "album_id": "14277",
                    "title": "第2集",
                    "times": "1012",
                    "mediapath": "http://mf.xiaoningmeng.net/2016/09/15/6f2602fccbbba1094ed8a478c8d92b1e.mp3",
                    "view_order": "2",
                    "playcover": "http://p.xiaoningmeng.net/album/2016/11/25/ccf4769973f7658ac976a063527c4292.jpg@!460x460?v=1480054500"
                },
                {
                    "id": "476462",
                    "album_id": "14277",
                    "title": "第3集",
                    "times": "1079",
                    "mediapath": "http://mf.xiaoningmeng.net/2016/09/15/e730fd14d52684e3f23645bc4ab7c048.mp3",
                    "view_order": "3",
                    "playcover": "http://p.xiaoningmeng.net/album/2016/11/25/ccf4769973f7658ac976a063527c4292.jpg@!460x460?v=1480054500"
                },
                {
                    "id": "476463",
                    "album_id": "14277",
                    "title": "第4集",
                    "times": "1047",
                    "mediapath": "http://mf.xiaoningmeng.net/2016/09/15/0837a6a7a6f1f14b4bc9f36d44238f25.mp3",
                    "view_order": "4",
                    "playcover": "http://p.xiaoningmeng.net/album/2016/11/25/ccf4769973f7658ac976a063527c4292.jpg@!460x460?v=1480054500"
                },
                {
                    "id": "476464",
                    "album_id": "14277",
                    "title": "第5集",
                    "times": "1180",
                    "mediapath": "http://mf.xiaoningmeng.net/2016/09/14/fe1e85cb628223111bd0bfe3a5135afb.mp3",
                    "view_order": "5",
                    "playcover": "http://p.xiaoningmeng.net/album/2016/11/25/ccf4769973f7658ac976a063527c4292.jpg@!460x460?v=1480054500"
                }
            ]
        },
        "tagList": [
            {
                "id": "2",
                "name": "故事",
                "cover": "http://p.xiaoningmeng.net/tag/2016/01/28/c81e728d9d4c2f636f067f89cc14862c.png?v=1453911544"
            },
            {
                "id": "158",
                "name": "童话寓言",
                "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/06409663226af2f3114485aa4e0a23b4.png?v=1479453352"
            }
        ],
        "recommendAlbumList": [
            {
                "id": "3720",
                "title": "不一样的卡梅拉",
                "star_level": "5",
                "cover": "http://p.xiaoningmeng.net/album/2016/11/15/532b81fa223a1b1ec74139a5b8151d12.png@!460x460?v=1479170906",
                "listennum": "2168",
                "recommenddesc": ""
            },
            {
                "id": "4507",
                "title": "亲爱的笨笨猪",
                "star_level": "0",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/14/7d411dca7348327b71e894c52e76eeeb.jpg@!460x460?v=1481698863",
                "listennum": "2682",
                "recommenddesc": ""
            },
            {
                "id": "5265",
                "title": "糖果王国历险记",
                "star_level": "5",
                "cover": "http://p.xiaoningmeng.net/album/2016/11/30/f127a3f714240273e254d740ed23f001.jpg@!460x460?v=1480500329",
                "listennum": "3505",
                "recommenddesc": ""
            },
            {
                "id": "14155",
                "title": "小老鼠稀里哗啦",
                "star_level": "5",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/13/cf5cf27e4a8ed0ea16a917c2eb79eff5.jpg@!460x460?v=1481615475",
                "listennum": "109万",
                "recommenddesc": ""
            },
            {
                "id": "4568",
                "title": "小鲤鱼历险记成长故事",
                "star_level": "4",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/13/bcfa8a783aaf938cdef361634d5f9289.jpg@!460x460?v=1481609595",
                "listennum": "6701",
                "recommenddesc": ""
            },
            {
                "id": "11899",
                "title": "狼的诺言",
                "star_level": "0",
                "cover": "http://p.xiaoningmeng.net/album/2016/10/08/fb087773ffbac93b13b4303f3d41de4d.jpg@!460x460?v=1475895457",
                "listennum": "1766",
                "recommenddesc": ""
            },
            {
                "id": "4215",
                "title": "小公主苏菲亚",
                "star_level": "3",
                "cover": "http://p.xiaoningmeng.net/album/2015/12/11/1d54c76f48f146c3b2d66daf9d7f845e.png@!460x460?v=1449781680",
                "listennum": "7066",
                "recommenddesc": ""
            },
            {
                "id": "7965",
                "title": "大熊和小熊",
                "star_level": "0",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/24/a440a3d316c5614c7a9310e902f4a43e.jpg@!460x460?v=1482568889",
                "listennum": "1801",
                "recommenddesc": ""
            },
            {
                "id": "15469",
                "title": "七月、七星和会说话的机器猫",
                "star_level": "0",
                "cover": "http://p.xiaoningmeng.net/album/2016/10/29/8003c8cdbcb8ca55652d4b2c5569d748.jpg@!460x460?v=1477718294",
                "listennum": "22346",
                "recommenddesc": ""
            },
            {
                "id": "13132",
                "title": "小公主苏菲亚系列",
                "star_level": "5",
                "cover": "http://p.xiaoningmeng.net/album/2016/04/10/a868d710aa4ef67a68807ce4fe8bd0da.jpg@!460x460?v=1460223007",
                "listennum": "1529",
                "recommenddesc": ""
            },
            {
                "id": "14955",
                "title": "鼠小弟战巫婆",
                "star_level": "5",
                "cover": "http://p.xiaoningmeng.net/album/2016/11/23/743db4be3c9cfffc0b06d5f7a7ab3f40.jpg@!460x460?v=1479896608",
                "listennum": "280万",
                "recommenddesc": ""
            },
            {
                "id": "14082",
                "title": "五毛钱的愿望",
                "star_level": "0",
                "cover": "http://p.xiaoningmeng.net/album/2016/11/07/ee0f827fe45c91c956bacfd78d91d47b.png@!460x460?v=1478488559",
                "listennum": "925万",
                "recommenddesc": ""
            }
        ]
    }

    
  },
  onLoad: function(options) {
    // 生命周期函数--监听页面加载
    console.log('######## onLoad ############')
    //接收页面参数
    var albumId = options.albumId;
    console.log("albumId = " + albumId);
    //调用应用实例的方法获取全局数据

    this.setData({
        'albumIntroBdIsFold':true,
        'albumIntroBdClass':'album-intro-bd-fold',
        'albumIntroBdText':'展开简介',

        'isAlbumIntroHidden':true,
        'isAlbumStorysHidden':false,
        'isAlbumSimilarHidden':true,
        'albumIntroNavBarOn':'',
        'albumStorysNavBarOn':'weui-bar__item_on',
        'albumSimilarNavBarOn':'',
        
        'currentPosition':0,
        'audioPlayBtnImageUrl':audioPlayImageUrl,
    });
  },

  onReady: function() {
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

    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('albumAudio');
    
  },

  onShow: function() {
    // 生命周期函数--监听页面显示
  },

  onHide: function() {
    // 生命周期函数--监听页面隐藏
  },

  onUnload: function() {
    // 生命周期函数--监听页面卸载

  },
  
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },

  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },

/**
 * 音频播放按钮点击
 * 
 */
  handleAudioPlayTap: function (event) {

    console.log("##### handleAudioPlayTap #####");
    var that = this;
    wx.getBackgroundAudioPlayerState({
        success:function(res) {
            //播放状态（2：没有音乐在播放，1：播放中，0：暂停中）
            var status = res.status;
            console.log("status = " + status);

            switch(status) {

                //没有音乐在播放: 则开始播放
                case 2:
                    wx.playBackgroundAudio({
                        dataUrl: event.currentTarget.dataset.url,
                        title: event.currentTarget.dataset.title,
                        coverImgUrl: event.currentTarget.dataset.cover_img_url,
                        fail:function() {
                            wx.showToast({
                                title: '播放出现故障',
                                icon: 'info',
                                duration: 2000
                            })
                        },
                    });
                    break;

                //播放中: 则暂停播放
                case 1:
                    wx.pauseBackgroundAudio();
                    break;
                    
                //暂停中:则控制播放进度至position后继续播放
                case 0:
                    console.log("that.data.currentPosition = " + that.data.currentPosition);
                    wx.seekBackgroundAudio({
                        position: that.data.currentPosition
                    });
                    wx.playBackgroundAudio({
                        dataUrl: event.currentTarget.dataset.url,
                        title: event.currentTarget.dataset.title,
                        coverImgUrl: event.currentTarget.dataset.cover_img_url,
                        fail:function() {
                            wx.showToast({
                                title: '播放出现故障',
                                icon: 'info',
                                duration: 2000
                            })
                        },
                    });
                    break;
            }

        },
        fail:function() {

        },
        complete:function() {

        },
    })

  },


  audioPause: function () {
    this.audioCtx.pause()
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
        success: function(res) {
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
        success: function(res) {
            if (res.confirm) {
            console.log('用户点击确定')
            }
        }
     })
  },

  handleAlbumIntroActionBtn: function() {
    console.log(this.data);
    if(this.data.albumIntroBdIsFold) {
      this.setData({
        'albumIntroBdIsFold':false,
        'albumIntroBdClass':'album-intro-bd-unfold',
        'albumIntroBdText':'收起',
        });
    }else{
       this.setData({
        'albumIntroBdIsFold':true,
        'albumIntroBdClass':'album-intro-bd-fold',
        'albumIntroBdText':'展开简介',
        });
    }
  },

  handleAlbumIntroNavTap:function() {
    this.setData({
        'isAlbumIntroHidden':false,
        'isAlbumStorysHidden':true,                                                                                      'isAlbumSimilarHidden':true,
        'albumIntroNavBarOn':'weui-bar__item_on',
        'albumStorysNavBarOn':'',
        'albumSimilarNavBarOn':'',
    });
  },

    handleAlbumStorysNavTap:function() {
    this.setData({
        'isAlbumIntroHidden':true,                                                              
        'isAlbumStorysHidden':false,
        'isAlbumSimilarHidden':true,
        'albumIntroNavBarOn':'',
        'albumStorysNavBarOn':'weui-bar__item_on',
        'albumSimilarNavBarOn':'',
    });
  },

    handleAlbumSimilarNavTap:function() {
    this.setData({
        'isAlbumIntroHidden':true,
        'isAlbumStorysHidden':true,
        'isAlbumSimilarHidden':false,
        'albumIntroNavBarOn':'',
        'albumStorysNavBarOn':'',
        'albumSimilarNavBarOn':'weui-bar__item_on',
    });
  },

    /**
   * 处理专辑点击
   */
  handleAlbumTap:function(event) {
      var albumId = event.currentTarget.dataset.id;
      var albumDetailUrl = "/pages/album/detail?albumId="+albumId;
      wx.navigateTo({
      url: albumDetailUrl
    })
  },

    /**
   * 处理标签点击
   */
  handleTagTap: function(event) {
    var tagId = event.currentTarget.dataset.id;
    var tagUrl = "/pages/tag/album?tagId="+tagId;
    wx.navigateTo({
      url: tagUrl
    })
  },
})

  //监听音乐暂停
  wx.onBackgroundAudioPause(function(){
    
    console.log("######## wx.onBackgroundAudioPause ######");
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    wx.getBackgroundAudioPlayerState({
        success: function(res) {
            console.log("currentPosition = " + res.currentPosition);
            currentPage.setData({
                'currentPosition':res.currentPosition,
                'audioPlayBtnImageUrl':audioPlayImageUrl,
            })  
        }
    })
  });

  //监听音乐播放
  wx.onBackgroundAudioPlay(function(){
    
    console.log("######## wx.onBackgroundAudioPlay ######");
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    wx.getBackgroundAudioPlayerState({
        success: function(res) {
            if(1 === res.status)
            console.log("status = " + res.status);
            currentPage.setData({
                'audioPlayBtnImageUrl':audioPauseImageUrl,
            })  
        }
    })
  })
