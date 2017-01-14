//获取应用实例
var app = getApp()
Page({
  data:{
    "code": 10000,
    "data": {
        "info": {
            "avator": "http://a.xiaoningmeng.net/avatar/15163/1481365363/120",
            "nickname": "E·B·怀特",
            "intro": "<div style=\"text-align: justify;\">1899年7月11日 ——1985年10月1日，美国当代著名散文家、评论家。</div><div><div style=\"text-align: justify;\">1918年，从美军退役，入康奈尔大学就读，1921年毕业。这期间他曾担任过《西雅图时报》等多家出版机构的记者。</div><div style=\"text-align: justify;\">1924年他回到纽约，当了一位广告撰稿人。1926或1927年，他来到《纽约客》杂志社作编辑工作。从1938到1943年，他作为《哈珀斯》杂志的专栏作家，为该杂志的“个人观点”专栏撰写了大量的散文。这些“怀特式”的散文在1942年被结集出版后，被评论家认为是怀特最优秀的一本散文集。</div></div><div style=\"text-align: justify;\">1973年，他被选为美国文学艺术学院50名永久院士之一，还获得了美国七家大学及学院的名誉学位。</div>",
            "wiki_url": "http://www.xiaoningmeng.net/author/detail.php?uid=15163"
        },
        "total": 3,
        "items": [
            {
                "id": "14230",
                "title": "吹小号的天鹅",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/10/60bba73587de9c81e7eb9a508ef928b7.jpg@!460x460?v=1481365572",
                "listennum": "158万",
                "recommenddesc": "　　《吹小号的天鹅》是讲述一只生下来就有不能发声这一致命缺陷的天鹅，克服种种困难和命运抗争并获得成功的的故事。书中充满了机智幽默、带有善意讽刺的文字。\r\n　　《吹小号的天鹅》出版以后得到不少好评。美国当代大作家厄普代克把怀特的三部童话归于儿童文学经典作品之列，并认为《吹小号的天鹅》写得“最无拘束，娓娓而谈”，“它的故事给了小朋友一个最有说服力的关于成长的寓言”。",
                "age_str": "适合3-6岁"
            },
            {
                "id": "11310",
                "title": "精灵鼠小弟",
                "cover": "http://p.xiaoningmeng.net/album/2016/12/10/435d43e52666cd74203c69c2bfe2caa7.jpg@!460x460?v=1481365976",
                "listennum": "184",
                "recommenddesc": "《精灵鼠小弟》是美国作家E·B·怀特（1899--1985）所著的三部被誉为“二十世纪读者最多、最受爱戴的童话”之一。 利特尔家的第二个孩子斯图尔特生下来只有两英寸高，模样活脱脱就是一只小老鼠。这位老鼠小弟心地善良、聪明伶俐，一家人里头，除了那只名叫“野茉莉”的猫，没有不喜欢它的。斯图尔特最要好的朋友是寄居在他们家的小鸟玛加洛，为了让美丽的玛加洛不受“野茉莉”的欺负，鼠小弟可真是鼓足了勇气，动足了脑筋。他发誓要把玛加洛找回来，于是开动玩具车就上了路。一路上，险情趣事层出不穷，鼠小弟历尽千辛万苦……鼠小弟最后到底有没有找到玛加洛呢？你一定猜不着。好莱坞根据本书改编的电影，让倔强而可爱的鼠小弟征服了全世界。",
                "age_str": "适合3-10岁"
            },
            {
                "id": "4268",
                "title": "夏洛的网",
                "cover": "http://p.xiaoningmeng.net/album/2016/10/29/f0f6cc51dacebe556699ccb45e2d43a8.jpg@!460x460?v=1477735629",
                "listennum": "30",
                "recommenddesc": "友谊没有界限",
                "age_str": "适合7-10岁"
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