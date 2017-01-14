// http://dev.xiaoningmeng.net/default/v2.6/recommend_list.php?min_age=0&max_age=14&page=1&len=20
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
                    "age_level_str": "全部",
                    "min_age": 0,
                    "max_age": 14,
                    "album_num": 434,
                    "selected": 1
                },
                {
                    "age_level_str": "0-2岁",
                    "min_age": 0,
                    "max_age": 2,
                    "album_num": 33,
                    "selected": 0
                },
                {
                    "age_level_str": "3-6岁",
                    "min_age": 3,
                    "max_age": 6,
                    "album_num": 93,
                    "selected": 0
                },
                {
                    "age_level_str": "7-10岁",
                    "min_age": 7,
                    "max_age": 10,
                    "album_num": 9,
                    "selected": 0
                }
            ]
        },
        "total": 20,
        "items": [
            {
                "id": "14329",
                "title": "唐豆豆，请坐好",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/28/33192f6b62911c61d4073ef0f9923420.jpg@!460x460?v=1482918859",
                "listennum": "4600万",
                "recommenddesc": "快来听唐豆豆的有趣成长故事",
                "age_str": "(7-10)岁",
                "tag": {
                    "id": "2",
                    "name": "故事"
                }
            },
            {
                "id": "14277",
                "title": "长在树上的猫尾巴",
                "cover": "http://p.xiaoningmeng.net/album/2016/11/25/ccf4769973f7658ac976a063527c4292.jpg@!460x460?v=1480054500",
                "listennum": "960万",
                "recommenddesc": "帮助宝贝发现生活的美好与善良",
                "age_str": "(7-10)岁",
                "tag": {
                    "id": "2",
                    "name": "故事"
                }
            },
            {
                "id": "3740",
                "title": "不再害怕又大又响的东西",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/29/33ef701c8059391708f1c3ddbe9f1f81.jpg@!460x460?v=1482993154",
                "listennum": "661",
                "recommenddesc": "帮助孩子解释生活中的恐惧",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "2",
                    "name": "故事"
                }
            },
            {
                "id": "4100",
                "title": "我的弟弟跟你换",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/29/a3ec6dd8d538712a581e5b24726ce062.jpg@!460x460?v=1482994156",
                "listennum": "222",
                "recommenddesc": "卡洛琳能把弟弟从婴儿店换掉吗",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "2",
                    "name": "故事"
                }
            },
            {
                "id": "10757",
                "title": "市场街最后一站",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/29/c2155acc6d5bcda7debfb19c3abef4af.jpg@!460x460?v=1482996665",
                "listennum": "1280",
                "recommenddesc": "纽伯瑞文学奖金奖作品",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "137",
                    "name": "绘本"
                }
            },
            {
                "id": "10335",
                "title": "怕黑的小北极熊",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/29/40f6e633518b32939156a842c93a84be.jpg@!460x460?v=1482997493",
                "listennum": "1187",
                "recommenddesc": "小朋友，你也害怕黑夜吗？",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "137",
                    "name": "绘本"
                }
            },
            {
                "id": "3784",
                "title": "波西和皮普",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/27/e16e74a63567ecb44ade5c87002bb1d9.png@!460x460?v=1482834727",
                "listennum": "1671",
                "recommenddesc": "为幼儿量身打造的心灵成长故事",
                "age_str": "(0-14)岁",
                "tag": {
                    "id": "2",
                    "name": "故事"
                }
            },
            {
                "id": "4448",
                "title": "图图讲故事",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/13/53e19f3dbb211f20b20b45668303c1b6.jpg@!460x460?v=1481621921",
                "listennum": "3079",
                "recommenddesc": "大耳朵图图脑瓜里的有趣歪道理",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "2",
                    "name": "故事"
                }
            },
            {
                "id": "9039",
                "title": "好听的英文圣诞儿歌",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/24/799fc232a527e7a7d6435c945083a329.jpg@!460x460?v=1482556673",
                "listennum": "1792",
                "recommenddesc": "叮叮当，叮叮当，铃儿响叮当",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "4",
                    "name": "英语"
                }
            },
            {
                "id": "11424",
                "title": "安的种子",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/24/15d0beeeeaa7f86a5f2c6b493c29776f.jpg@!460x460?v=1482546997",
                "listennum": "1186",
                "recommenddesc": "丰子恺儿童图画书奖获奖绘本",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "137",
                    "name": "绘本"
                }
            },
            {
                "id": "6922",
                "title": "我们是朋友",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/22/29fdff891569187da8e5ed4f7a6ea4c8.jpg@!460x460?v=1482399679",
                "listennum": "1776",
                "recommenddesc": "我的好朋友要被龙龙“抢走”了",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "137",
                    "name": "绘本"
                }
            },
            {
                "id": "6707",
                "title": "大熊臭烘烘",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/22/602443a3d6907117d8b4a308844e963e.jpg@!460x460?v=1482394700",
                "listennum": "984",
                "recommenddesc": "不爱洗澡的宝宝没朋友",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "137",
                    "name": "绘本"
                }
            },
            {
                "id": "6974",
                "title": "我喜欢做的事",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/20/b11c3e3aaf3cfe496174ecc31a3c04d0.jpg@!460x460?v=1482232966",
                "listennum": "1407",
                "recommenddesc": "当宝宝有了小情绪······",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "137",
                    "name": "绘本"
                }
            },
            {
                "id": "4594",
                "title": "小蝌蚪找妈妈",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/16/28659414dab9eca0219dd592b8136434.jpg@!460x460?v=1481870859",
                "listennum": "4055",
                "recommenddesc": "一场有趣而感人的寻亲之旅",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "2",
                    "name": "故事"
                }
            },
            {
                "id": "7225",
                "title": "双胞胎的小被子",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/16/f629ed9325990b10543ab5946c1362fb.jpg@!460x460?v=1481879583",
                "listennum": "1490",
                "recommenddesc": "多幸运，有一个伴我成长的你",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "137",
                    "name": "绘本"
                }
            },
            {
                "id": "9386",
                "title": "雪孩子",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/16/859bf1416b8b8761c5d588dee78dc65f.jpg@!460x460?v=1481887324",
                "listennum": "3097",
                "recommenddesc": "他是冰冷的，却带给世间温暖",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "2",
                    "name": "故事"
                }
            },
            {
                "id": "11816",
                "title": "晚安，月亮",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/13/d2949eb6aaa490c835219e945ff37dad.jpg@!460x460?v=1481614279",
                "listennum": "1918",
                "recommenddesc": "记得和你爱的人道一句晚安",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "137",
                    "name": "绘本"
                }
            },
            {
                "id": "14155",
                "title": "小老鼠稀里哗啦",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/13/cf5cf27e4a8ed0ea16a917c2eb79eff5.jpg@!460x460?v=1481615475",
                "listennum": "235万",
                "recommenddesc": "一对可爱又阳光的鼠姐鼠弟",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "2",
                    "name": "故事"
                }
            },
            {
                "id": "5142",
                "title": "蚯蚓的日记",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/07/58155fc7f528a19b9fc3599b65047290.jpg@!460x460?v=1481092837",
                "listennum": "2144",
                "recommenddesc": "快来看小蚯蚓写了什么小秘密",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "137",
                    "name": "绘本"
                }
            },
            {
                "id": "5150",
                "title": "我爸爸",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/07/26c0a195973b46ba52a013c89dd82315.jpg@!460x460?v=1481091183",
                "listennum": "7885",
                "recommenddesc": "我爸爸超厉害的，什么都不怕",
                "age_str": "(3-6)岁",
                "tag": {
                    "id": "2",
                    "name": "故事"
                }
            }
        ]
    }
},
  onLoad: function(options) {
    // 生命周期函数--监听页面加载
    console.log('onLoad-------')
    //调用应用实例的方法获取全局数据

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