//获取应用实例
var app = getApp()
Page({
  data:{
    "code": 10000,
    "data": {
        "age_level": {
            "total": 4,
            "items": [
                {
                    "title": "0-2岁",
                    "cover": "http://p.xiaoningmeng.net/age_level/0-2.png",
                    "linkurl": "xnm://api.xiaoningmeng.net/default/v2.6/online_list.php?&min_age=0&max_age=2"
                },
                {
                    "title": "3-6岁",
                    "cover": "http://p.xiaoningmeng.net/age_level/3-6.png",
                    "linkurl": "xnm://api.xiaoningmeng.net/default/v2.6/online_list.php?&min_age=3&max_age=6"
                },
                {
                    "title": "7-10岁",
                    "cover": "http://p.xiaoningmeng.net/age_level/7-10.png",
                    "linkurl": "xnm://api.xiaoningmeng.net/default/v2.6/online_list.php?&min_age=7&max_age=10"
                },
                {
                    "title": "11-14岁",
                    "cover": "http://p.xiaoningmeng.net/age_level/11-14.png",
                    "linkurl": "xnm://api.xiaoningmeng.net/default/v2.6/online_list.php?&min_age=11&max_age=14"
                }
            ]
        },
        "tag": {
            "total": 8,
            "items": [
                {
                    "id": "2",
                    "name": "故事",
                    "child_total": 9,
                    "child_items": [
                        {
                            "id": "23",
                            "name": "睡前故事",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/37693cfc748049e45d87b8c7d8b9aacd.jpg?v=1479451033",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=23"
                        },
                        {
                            "id": "158",
                            "name": "童话寓言",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/06409663226af2f3114485aa4e0a23b4.png?v=1479453352",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=158"
                        },
                        {
                            "id": "27",
                            "name": "女孩故事",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/02e74f10e0327ad868d138f2b4fdd6f0.jpg?v=1479451081",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=27"
                        },
                        {
                            "id": "25",
                            "name": "男孩故事",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/8e296a067a37563370ded05f5a3bf3ec.jpg?v=1479440881",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=25"
                        },
                        {
                            "id": "29",
                            "name": "动物故事",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/6ea9ab1baa0efb9e19094440c317e21b.jpg?v=1479452991",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=29"
                        },
                        {
                            "id": "31",
                            "name": "成语故事",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/25/c16a5320fa475530d9583c34fd356ef5.jpg?v=1480042221",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=31"
                        },
                        {
                            "id": "32",
                            "name": "历史故事",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/25/6364d3f0f495b6ab9dcf8d3b5c6e0b01.jpg?v=1480042361",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=32"
                        },
                        {
                            "id": "156",
                            "name": "神话传说",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/1c9ac0159c94d8d0cbedc973445af2da.jpg?v=1479434485",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=156"
                        },
                        {
                            "id": "183",
                            "name": "奇幻探险",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/12/12/cedebb6e872f539bef8c3f919874e9d7.jpg?v=1481533856",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=183"
                        }
                    ]
                },
                {
                    "id": "1",
                    "name": "儿歌",
                    "child_total": 3,
                    "child_items": [
                        {
                            "id": "13",
                            "name": "经典儿歌",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/c51ce410c124a10e0db5e4b97fc2af39.jpg?v=1479434521",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=13"
                        },
                        {
                            "id": "18",
                            "name": "韵律童谣",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/6f4922f45568161a8cdf4ad2299f6d23.jpg?v=1479434545",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=18"
                        },
                        {
                            "id": "20",
                            "name": "绕口令",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/98f13708210194c475687be6106a3b84.png?v=1479454839",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=20"
                        }
                    ]
                },
                {
                    "id": "5",
                    "name": "国学",
                    "child_total": 3,
                    "child_items": [
                        {
                            "id": "45",
                            "name": "唐诗宋词",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/6c8349cc7260ae62e3b1396831a8398f.png?v=1479455474",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=45"
                        },
                        {
                            "id": "47",
                            "name": "国学启蒙",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/67c6a1e7ce56d3d6fa748ab6d9af3fd7.jpg?v=1479464544",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=47"
                        },
                        {
                            "id": "49",
                            "name": "传统经典",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/f457c545a9ded88f18ecee47145a72c0.jpg?v=1479456339",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=49"
                        }
                    ]
                },
                {
                    "id": "4",
                    "name": "英语",
                    "child_total": 7,
                    "child_items": [
                        {
                            "id": "42",
                            "name": "英语儿歌",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/a1d0c6e83f027327d8461063f4ac58a6.png?v=1479446682",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=42"
                        },
                        {
                            "id": "138",
                            "name": "英语绘本",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/013d407166ec4fa56eb1e1f8cbe183b9.jpg?v=1479446917",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=138"
                        },
                        {
                            "id": "44",
                            "name": "英语故事",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/f7177163c833dff4b38fc8d2872f1ec6.jpg?v=1479462537",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=44"
                        },
                        {
                            "id": "40",
                            "name": "英语童谣",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/d645920e395fedad7bbbed0eca3fe2e0.png?v=1479446713",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=40"
                        },
                        {
                            "id": "41",
                            "name": "英语启蒙",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/3416a75f4cea9109507cacd8e2f2aefc.jpg?v=1479447169",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=41"
                        },
                        {
                            "id": "43",
                            "name": "趣味单词",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/17e62166fc8586dfa4d1bc0e1742c08b.jpg?v=1479464880",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=43"
                        },
                        {
                            "id": "129",
                            "name": "儿童英语",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/d1f491a404d6854880943e5c3cd9ca25.png?v=1479462697",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=129"
                        }
                    ]
                },
                {
                    "id": "137",
                    "name": "绘本",
                    "child_total": 4,
                    "child_items": [
                        {
                            "id": "133",
                            "name": "绘本故事",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/9fc3d7152ba9336a670e36d0ed79bc43.png?v=1479447491",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=133"
                        },
                        {
                            "id": "139",
                            "name": "爱与情感",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/e00da03b685a0dd18fb6a08af0923de0.jpg?v=1479447665",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=139"
                        },
                        {
                            "id": "140",
                            "name": "生活成长",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/1385974ed5904a438616ff7bdb3f7439.png?v=1479447702",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=140"
                        },
                        {
                            "id": "141",
                            "name": "获奖经典",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/0f28b5d49b3020afeecd95b4009adf4c.png?v=1479448462",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=141"
                        }
                    ]
                },
                {
                    "id": "3",
                    "name": "音乐",
                    "child_total": 3,
                    "child_items": [
                        {
                            "id": "35",
                            "name": "睡前音乐",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/1c383cd30b7c298ab50293adfecb7b18.jpg?v=1479434774",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=35"
                        },
                        {
                            "id": "36",
                            "name": "音乐启蒙",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/19ca14e7ea6328a42e0eb13d585e4c22.jpg?v=1479434802",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=36"
                        },
                        {
                            "id": "34",
                            "name": "古典音乐",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/e369853df766fa44e1ed0ff613f563bd.jpg?v=1479451466",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=34"
                        }
                    ]
                },
                {
                    "id": "9",
                    "name": "科普",
                    "child_total": 4,
                    "child_items": [
                        {
                            "id": "116",
                            "name": "生活常识",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/c45147dee729311ef5b5c3003946c48f.png?v=1479448882",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=116"
                        },
                        {
                            "id": "117",
                            "name": "自然科学",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/eb160de1de89d9058fcb0b968dbbbd68.png?v=1479463530",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=117"
                        },
                        {
                            "id": "115",
                            "name": "百科知识",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/2b44928ae11fb9384c4cf38708677c48.jpg?v=1479434881",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=115"
                        },
                        {
                            "id": "128",
                            "name": "儿童学习",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/76dc611d6ebaafc66cc0879c71b5db5c.jpg?v=1479450164",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=128"
                        }
                    ]
                },
                {
                    "id": "153",
                    "name": "育儿",
                    "child_total": 3,
                    "child_items": [
                        {
                            "id": "131",
                            "name": "儿童教育",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/1afa34a7f984eeabdbb0a7d494132ee5.png?v=1479450028",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=131"
                        },
                        {
                            "id": "163",
                            "name": "育儿宝典",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/0777d5c17d4066b82ab86dff8a46af6f.png?v=1479449599",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=163"
                        },
                        {
                            "id": "181",
                            "name": "怀孕安产",
                            "cover": "http://p.xiaoningmeng.net/tag/2016/11/18/fc221309746013ac554571fbd180e1c8.png?v=1479449813",
                            "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=181"
                        }
                    ]
                }
            ]
        }
    }
  },
  onLoad: function(options) {
    // 生命周期函数--监听页面加载
    console.log('onLoad-------')
    //调用应用实例的方法获取全局数据

  },
  onPullDownRefresh: function () {
       wx.stopPullDownRefresh();
  },
 onReady: function() {
    // 生命周期函数--监听页面初次渲染完成
        app.getUserInfo(function(userInfo){
      //更新数据
      this.setData({
        userInfo:userInfo
      })
      this.update()
    })
    this.setData({
      globalData:app.globalData
    })
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

  //用户点击右上角分享
  onShareAppMessage: function () {
    return {
      title: app.constant.appName,
      desc: app.constant.appDesc,
      path: 'pages/category/category'
    }
  },
})