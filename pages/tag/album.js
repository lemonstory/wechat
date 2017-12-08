const Tab = require('../../zanui-weapp/dist/tab/index');
var app = getApp()

var recommend = 0;
var hot = 0;
var goodcomment = 0;

Page(Object.assign({}, Tab, {
  data: {
    tab: {
      list: [],
      selectedId: '',
      scroll: true,
      height: 45
    },
    tagalbumlist: [],

    //页面的初始数据
    'constant': app.constant,
    'currentTagId': '',
    'selectFirstTagId': '',
    'selectSecondTagId': '',
    'selectedId': '',
    //分页使用
    'startrelationid': 0,
    'len': 36,
    'isNoMore': false,
    'isLoading':false,
  },

  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      [`${componentId}.selectedId`]: selectedId,
      selectSecondTagId: selectedId,
      selectedId: selectedId,
      tagalbumlist: [],
      startrelationid:0,
      isNoMore:false,
    });

    switch (selectedId) {
      case "recommend":
        recommend = 1;
        hot = 0;
        goodcomment = 0;
        break;

      case "hot":
        recommend = 0;
        hot = 1;
        goodcomment = 0;
        break;

      case "goodcomment":
        recommend = 0;
        hot = 0;
        goodcomment = 1;
        break;

      default:
        recommend = 0;
        hot = 0;
        goodcomment = 0;
    }

    this.getData(selectedId, this.data.selectFirstTagId, selectedId, recommend, hot, goodcomment, this.data.startrelationid, this.data.len);
  },

  onLoad: function (options) {

    recommend = 0;
    hot = 0;
    goodcomment = 0;
    var selectFirstTagId = options.selectFirstTagId;
    var selectSecondTagId = options.selectSecondTagId;
    this.setData({
      'selectFirstTagId': selectFirstTagId,
      'selectSecondTagId': selectSecondTagId
    });
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {

    if (typeof (this.data.selectSecondTagId) == "undefined" || this.data.selectSecondTagId.length == 0) {
      recommend = 1;
      this.setData({
        selectedId: "recommend",
      });
    } else {
      this.setData({
        selectedId: this.data.selectSecondTagId,
      });
    }

    this.getData(this.data.selectedId, this.data.selectFirstTagId, this.data.selectSecondTagId, recommend, hot, goodcomment, this.data.startrelationid, this.data.len);
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
    this.getData(this.data.selectedId, this.data.selectFirstTagId, this.data.selectSecondTagId, recommend, hot, goodcomment, this.data.startrelationid, this.data.len);
  },

  getData: function (selectedId, selectFirstTagId, selectSecondTagId, recommend, hot, goodcomment, startrelationid, len) {

    // console.log("😀 😀 😀 selectedId= " + selectedId
    //   + ", selectFirstTagId=" + selectFirstTagId
    //   + ", selectSecondTagId=" + selectSecondTagId
    //   + ", recommend=" + recommend
    //   + ", hot=" + hot
    //   + ", goodcomment=" + goodcomment
    //   + ", startrelationid=" + startrelationid
    //   + ", len=" + len);

    var that = this;
    var currentTagId;

    if (isNaN(selectSecondTagId) || selectSecondTagId.length == 0) {
      currentTagId = selectFirstTagId;

    } else {
      currentTagId = selectSecondTagId;
    }
    var url = that.data.constant.domain
      + '/tag/v2.6/gettagalbumlist.php?direction=down&currenttagid=' + currentTagId
      + "&recommend=" + recommend
      + "&hot=" + hot
      + "&goodcomment=" + goodcomment
      + "&startrelationid="+ startrelationid
      + "&len=" + len;


    // console.log("😀 url = " + url);

    if (!that.data.isNoMore) {
      wx.request({
        url: url,
        data: {},
        header: {
          'content-type': 'application/json', // 默认值
          // 'user-agent': 'api.xiaoningmeng.net/2.8.0/adr (M5 Note,864883030379469,460027404571654,6.0,1080*1920,4.589389937671455,480,wifi,_360,zh)',
        },
        success: function (res) {
          wx.hideLoading();
          var tagAlbumListLen = res.data.data.tagalbumlist.length;
          if (tagAlbumListLen > 0) {
            var tagAlbumList = that.data.tagalbumlist;
            Array.prototype.push.apply(tagAlbumList, res.data.data.tagalbumlist);
            var startRelationId = res.data.data.tagalbumlist[tagAlbumListLen - 1].id;
                        
            that.setData({
              'tagalbumlist': tagAlbumList,
              'startrelationid': startRelationId,
              'isNoMore': false,
              'isLoading':false,
            });
          } else {

            that.setData({
              'isNoMore': true,
              'isLoading': false,
            });
          }

          //设置tab页签数据
          var tabList = [];
          var tagItem = {};
          if (typeof (res.data.data.specialtaglist) != "undefined" && res.data.data.specialtaglist.length > 0) {
            var i;

            for (i = 0; i < res.data.data.specialtaglist.length; i++) {
              tagItem = {};
              tagItem.id = res.data.data.specialtaglist[i].paramkey;
              tagItem.title = res.data.data.specialtaglist[i].name;
              tabList.push(tagItem);
            }
          }

          if (typeof (res.data.data.secondtaglist) != "undefined" && res.data.data.secondtaglist.length > 0) {
            var i;
            for (i = 0; i < res.data.data.secondtaglist.length; i++) {
              tagItem = {};
              tagItem.id = res.data.data.secondtaglist[i].id;
              tagItem.title = res.data.data.secondtaglist[i].name;
              tabList.push(tagItem);
            }
          }

          that.setData({
            tab: {
              list: tabList,
              selectedId: selectedId,
              scroll: true,
              height: 45
            },
            selectFirstTagId: res.data.data.selectfirsttagid
          });

          that.setDataCallBack();
        }
      })
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
  */
  setDataCallBack: function () {

  },

  onReachBottom: function () {
    
    if (!this.data.isNoMore) {
      this.setData({
        'isLoading': true,
      });
      setTimeout(() => {
        this.getData(this.data.selectedId, this.data.selectFirstTagId, this.data.selectSecondTagId, recommend, hot, goodcomment, this.data.startrelationid, this.data.len);
      }, 500);
    }else{
      this.setData({
        'isLoading': false,
      });
    }
  },

}));
