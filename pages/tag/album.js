//获取应用实例
var app = getApp()
Page({
  data:{
    "code": 10000,
    "data": {
        "selectfirsttagid": "4",
        "selectsecondtagid": "138",
        "firsttaglist": [
            {
                "id": "2",
                "pid": "0",
                "name": "故事",
                "md5name": "a014c4d5e512992602b5f02e16ca5b24",
                "cover": "2016/01/28/c81e728d9d4c2f636f067f89cc14862c.png",
                "covertime": "1453911544",
                "ordernum": "99",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "1",
                "pid": "0",
                "name": "儿歌",
                "md5name": "129061a45be0043eac553947747459c2",
                "cover": "2016/01/26/c4ca4238a0b923820dcc509a6f75849b.png",
                "covertime": "1453800329",
                "ordernum": "98",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "5",
                "pid": "0",
                "name": "国学",
                "md5name": "7fa695e57376d0a457deab20645b2a9f",
                "cover": "2016/01/26/e4da3b7fbbce2345d7772b0674a318d5.png",
                "covertime": "1453800744",
                "ordernum": "97",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "4",
                "pid": "0",
                "name": "英语",
                "md5name": "4145d4c179e1aafdb5a0295da9a82d42",
                "cover": "2016/01/26/a87ff679a2f3e71d9181a67b7542122c.png",
                "covertime": "1453800765",
                "ordernum": "96",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "137",
                "pid": "0",
                "name": "绘本",
                "md5name": "b6cf59e19ee1201705bd3f950cd2e849",
                "cover": "2016/01/26/3988c7f88ebcb58c6ce932b957b6f332.png",
                "covertime": "1453800844",
                "ordernum": "95",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "3",
                "pid": "0",
                "name": "音乐",
                "md5name": "95521bb744463633c858cc50abb44e7d",
                "cover": "2016/01/26/eccbc87e4b5ce2fe28308fd9f2a7baf3.png",
                "covertime": "1453800899",
                "ordernum": "93",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "9",
                "pid": "0",
                "name": "科普",
                "md5name": "cb5909f2fd6a1fab81c85d60b5ef82a5",
                "cover": "2016/01/26/45c48cce2e2d7fbdea1afc51c7c6ad26.png",
                "covertime": "1453800951",
                "ordernum": "92",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "153",
                "pid": "0",
                "name": "育儿",
                "md5name": "375420f8ec5339dbd79152476edc3be6",
                "cover": "2016/10/08/b3e3e393c77e35a4a3f3cbd1e429b5dc.png",
                "covertime": "1475908444",
                "ordernum": "92",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            }
        ],
        "secondtaglist": [
            {
                "id": "42",
                "pid": "4",
                "name": "英语儿歌",
                "md5name": "b6d77f404ea9651190a8cb319b6f00cc",
                "cover": "2016/11/18/a1d0c6e83f027327d8461063f4ac58a6.png",
                "covertime": "1479446682",
                "ordernum": "99",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "138",
                "pid": "4",
                "name": "英语绘本",
                "md5name": "4a53c16d00c5ebaa8e92cfa618a43f37",
                "cover": "2016/11/18/013d407166ec4fa56eb1e1f8cbe183b9.jpg",
                "covertime": "1479446917",
                "ordernum": "98",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "44",
                "pid": "4",
                "name": "英语故事",
                "md5name": "2cde1d47e171e624d1075703e8628f7b",
                "cover": "2016/11/18/f7177163c833dff4b38fc8d2872f1ec6.jpg",
                "covertime": "1479462537",
                "ordernum": "97",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "40",
                "pid": "4",
                "name": "英语童谣",
                "md5name": "864813176e8c9d4d0ae713e40f63982a",
                "cover": "2016/11/18/d645920e395fedad7bbbed0eca3fe2e0.png",
                "covertime": "1479446713",
                "ordernum": "0",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "41",
                "pid": "4",
                "name": "英语启蒙",
                "md5name": "fca1beaa4e0a8559d9ecf542784332d8",
                "cover": "2016/11/18/3416a75f4cea9109507cacd8e2f2aefc.jpg",
                "covertime": "1479447169",
                "ordernum": "0",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "43",
                "pid": "4",
                "name": "趣味单词",
                "md5name": "da74c0da948d73740daafeedd30c02a0",
                "cover": "2016/11/18/17e62166fc8586dfa4d1bc0e1742c08b.jpg",
                "covertime": "1479464880",
                "ordernum": "0",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            },
            {
                "id": "129",
                "pid": "4",
                "name": "儿童英语",
                "md5name": "f4d3fd96fec7d5d6f8d498d57bb81b63",
                "cover": "2016/11/18/d1f491a404d6854880943e5c3cd9ca25.png",
                "covertime": "1479462697",
                "ordernum": "0",
                "status": "1",
                "addtime": "2016-12-06 13:28:45"
            }
        ],
        "tagalbumlist": [
            {
                "id": "32513",
                "tagid": "138",
                "albumid": "7252",
                "albuminfo": {
                    "id": "7252",
                    "title": "好奇猴乔治",
                    "story_num": "18",
                    "intro": "《好奇猴乔治》讲述了一只充满好奇的猴子，因缘际会离开丛林被带到了人类世界，单纯的好奇心给他带来了一连串的新奇冒险。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/12/24/201d546992726352471cfea6b0df0a48.jpg@!460x460?v=1482569558",
                    "listennum": "10",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "32508",
                "tagid": "138",
                "albumid": "7866",
                "albuminfo": {
                    "id": "7866",
                    "title": "外研中华传统故事双语绘本",
                    "story_num": "24",
                    "intro": "《中华传统故事双语绘本》旨在让不同年龄层次、不同文化背景的读者共享中国传统文化盛宴，品味中华文化的博大精深。这套图文并茂、寓教于乐的双语绘本不仅适合需要学习并研究中华传统文化的炎黄子孙阅读，也适合想了解并传播中华传统文化的外国友人赏析。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/12/24/1963bd5135521d623f6c29e6b1174975.jpg@!460x460?v=1482569006",
                    "listennum": 0,
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "32466",
                "tagid": "138",
                "albumid": "11224",
                "albuminfo": {
                    "id": "11224",
                    "title": "下雪真好玩",
                    "story_num": "3",
                    "intro": "新西兰押韵绘本大师Joy Cowley参编创作。\r\n 纯英文绘本，语言简洁优美，兼顾复现性、韵律感。\r\n 英、德、意、韩等国际大奖插画师创作。\r\n 英语启蒙与艺术、健康、科学、社会等整合发展。\r\n 提供家庭亲子游戏和园所集体活动建议。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/12/24/ee89223a2b625b5152132ed77abbcc79.jpg@!460x460?v=1482560757",
                    "listennum": "6",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "32456",
                "tagid": "138",
                "albumid": "10234",
                "albuminfo": {
                    "id": "10234",
                    "title": "Child's Play",
                    "story_num": "12",
                    "intro": "廖彩杏书单Child's Play 6册指偶书。\r\nAn interactive finger puppet book that helps promote discussion while having fun.",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/12/24/8eb4b4c01bf3375828c5494c2f6e7685.jpg@!460x460?v=1482553844",
                    "listennum": "2",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "32454",
                "tagid": "138",
                "albumid": "3851",
                "albuminfo": {
                    "id": "3851",
                    "title": "I Am Library",
                    "story_num": "10",
                    "intro": "在《I Am》系列书籍中，透过孩子深感兴趣的大自然主题，让「叶绿素」、「光合作用」这些原本似乎很艰涩的知识性词汇，很容易就能被吸收，很适合作为孩子拓展知识广度的启蒙书籍。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/12/24/dc0439caeb74ffc2795571af07a7eab1.jpg@!460x460?v=1482553445",
                    "listennum": "1",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "32394",
                "tagid": "138",
                "albumid": "12981",
                "albuminfo": {
                    "id": "12981",
                    "title": "双语绘本故事",
                    "story_num": "56",
                    "intro": "Oscar & the Very Hungry Dragon：\r\nIt s time to feed the dragon! But this year the village is out of princesses.So the villagers send Oscar, a not so plump little boywho would rather COOK dinner than BE dinner.Putting his culinary skills to the test, Oscar shows the dragon that filet mignon and banana splits are much more delicious than princesses and children.Ute Krause s captivating artwork and engaging story create a recipe for reading\"",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/12/23/aaf662be6cd123f4c54c4d90d24b1373.jpg@!460x460?v=1482487810",
                    "listennum": 0,
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "31999",
                "tagid": "138",
                "albumid": "7204",
                "albuminfo": {
                    "id": "7204",
                    "title": "粉红猪小妹原版绘本",
                    "story_num": "30",
                    "intro": "粉红猪小妹佩佩是一只非常可爱的小粉红猪，她与弟弟乔治、爸爸、妈妈快乐地住在一起。粉红猪小妹最喜欢做的事情是玩游戏，打扮的漂漂亮亮，渡假，以及住在小泥坑里快乐的跳上跳下！除了这些，她还喜欢到处探险，虽然有些时候会遇到一些小状况，但总可以化险为夷，而且都会带给大家意外的惊喜！",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/12/16/ae3d525daf92cee0003a7f2d92c34ea3.jpg@!460x460?v=1481881391",
                    "listennum": "151",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "31986",
                "tagid": "138",
                "albumid": "7237",
                "albuminfo": {
                    "id": "7237",
                    "title": "Is Your mama a Llama",
                    "story_num": "42",
                    "intro": "Is Your mama a Llama? 小美洲驼找妈妈的温馨故事",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/12/16/742141ceda6b8f6786609d31c8ef129f.png@!460x460?v=1481878868",
                    "listennum": "1",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "31918",
                "tagid": "138",
                "albumid": "4553",
                "albuminfo": {
                    "id": "4553",
                    "title": "世界经典童话双语绘本故事",
                    "story_num": "15",
                    "intro": "《世界经典童话双语绘本系列》主要特点：1.精致优美、风格多样的绘画，让孩子得到潜移默化的艺术熏陶。2.具备双语功能，自然营造中英两种语境，促进孩子语言发展。3.融故事、动漫、音乐、游戏于一体，趣味十足，功能强大。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/12/14/ccb1d57d7fa17c6bec423ffcabba9cd6.jpg@!460x460?v=1481709540",
                    "listennum": "9",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "31907",
                "tagid": "138",
                "albumid": "4541",
                "albuminfo": {
                    "id": "4541",
                    "title": "Oliver Jeffers智慧小孩系列",
                    "story_num": "8",
                    "intro": "When a boy discovers a single-propeller airplane in hiscloset, he does what any young adventurer would do: He flies itinto outer space! Millions of miles from Earth, the plane begins tosputter and quake, its fuel tank on empty. The boy executes adaring landing on the moon . . . but there’s no telling what kindof slimy, slithering, tentacled, fangtoothed monsters lurk in thedarkness! (Plus, it’s dark and lonely out there.) Coincidentally,engine trouble has stranded a young Martian on the other side ofthe moon, and he’s just as frightened and alone. Martian,Earthling—it’s all the same when you’re in need of a friend.",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/12/14/2f3c6a4cd8af177f6456e7e51a916ff3.jpg@!460x460?v=1481707135",
                    "listennum": 0,
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "31206",
                "tagid": "138",
                "albumid": "5273",
                "albuminfo": {
                    "id": "5273",
                    "title": "英文原版绘本",
                    "story_num": "16",
                    "intro": "英文原版绘本音频-我的私房课",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/30/205e73579f21c2ed134dbd6ce7e4a1ea.jpg@!460x460?v=1480499909",
                    "listennum": "81",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "30513",
                "tagid": "138",
                "albumid": "4849",
                "albuminfo": {
                    "id": "4849",
                    "title": "外教故事绘本音频",
                    "story_num": "10",
                    "intro": "外教故事绘本音频",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/25/ec1f764517b7ffb52057af6df18142b7.jpg@!460x460?v=1480056491",
                    "listennum": "2",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29635",
                "tagid": "138",
                "albumid": "7816",
                "albuminfo": {
                    "id": "7816",
                    "title": "鸽子系列合集",
                    "story_num": "6",
                    "intro": "鸽子系列，轻松有趣，孩子们的最爱！",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/12/a2a722df674185b45ae4752a1e7d5444.jpg@!460x460?v=1478928841",
                    "listennum": "77",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29631",
                "tagid": "138",
                "albumid": "9055",
                "albuminfo": {
                    "id": "9055",
                    "title": "女巫温妮",
                    "story_num": "12",
                    "intro": "主要讲述女巫温妮和她的大黑猫威尔伯之间发生的趣事。女巫温妮和黑猫威尔伯住在一栋黑色的房子里，房子里的东西也全是黑色的，什么都看不清。有时，温妮还会被黑猫威尔伯绊倒。这可真麻烦！于是，温妮举起了魔法棒。这下子，会发生什么事呢？",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/12/60b2149f6bafd1cc9d505496f09160ba.jpg@!460x460?v=1478928288",
                    "listennum": "17",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29624",
                "tagid": "138",
                "albumid": "9063",
                "albuminfo": {
                    "id": "9063",
                    "title": "DR.SEUSS 经典绘本",
                    "story_num": "28",
                    "intro": "let life be beautiful like summer flowers and death like autumn leaves.",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/12/ce653013fadbb2ff27530d3de3790f1b.jpg@!460x460?v=1478927717",
                    "listennum": "2",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29623",
                "tagid": "138",
                "albumid": "9064",
                "albuminfo": {
                    "id": "9064",
                    "title": "ERIC CARLE 绘本",
                    "story_num": "147",
                    "intro": "let life be beautiful like summer flowers and death like autumn leaves.",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/12/6e3adb1ae0e02c934766182313b6775d.jpg@!460x460?v=1478927917",
                    "listennum": "64",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29599",
                "tagid": "138",
                "albumid": "9619",
                "albuminfo": {
                    "id": "9619",
                    "title": "创意绘本",
                    "story_num": "90",
                    "intro": "愿你被这世界温柔相待",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/12/e4f67a0e4293245fba713c412fc63e28.jpg@!460x460?v=1478920549",
                    "listennum": "30",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29562",
                "tagid": "138",
                "albumid": "10345",
                "albuminfo": {
                    "id": "10345",
                    "title": "鸽子系列",
                    "story_num": "8",
                    "intro": "☆教给孩子如何说“不”，让孩子理解家长为何要说“不” \r\n ☆荣获世界绘本最高奖——美国凯迪克大奖！ \r\n ☆被纽约公共图书馆列为“每个人都应该知道的100种绘本” \r\n   \r\n   巴士司机临时有事，离开前特别嘱咐读者，千万“别让鸽子开巴士！”可是鸽子使出百般伎俩：苦苦哀求、撒个小谎、拍马屁、套近乎、耍赖……千方百计想坐上驾驶座，你会同意让鸽子开巴士吗？一看书名就能引起读者强烈的好奇：为什么鸽子要开巴士？为什么不让鸽子开巴士？为什么是鸽子？这到底是一本怎样的书呀！趣味的创意构图，柔和的温暖色调，再加上小鸽子俏皮的耍赖个性，让你不自觉要对他大声喊出“不行！”",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/12/e1e4e65fddf79af60aab04457a6565a6.jpg@!460x460?v=1478913998",
                    "listennum": "27",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29453",
                "tagid": "138",
                "albumid": "4786",
                "albuminfo": {
                    "id": "4786",
                    "title": "英文绘本故事音频（一）",
                    "story_num": "45",
                    "intro": "每天和孩子共读20分钟是你所能给孩子最珍贵的礼物。经常读故事给孩子听，有一天他（她）会读给你听。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/10/1d3b7f1f8a7625f8d5e700dcf0d9ae68.jpg@!460x460?v=1478771727",
                    "listennum": "21",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29451",
                "tagid": "138",
                "albumid": "4755",
                "albuminfo": {
                    "id": "4755",
                    "title": "Peter Rabbit",
                    "story_num": "23",
                    "intro": "书中塑造了一系列可爱动物形象，淘气又胆小怕事的彼得兔、冒失的本杰明兔子、尖酸贪婪的小老鼠塞缪尔.胡子、不喑世事又挺有主张的杰米玛鸭子、大智若愚，心胸开阔的平小猪……他们住在一个美丽的山村，永远不会老。 彼得兔不听从妈妈的指示，它溜进了麦奎格先生的菜园，顽皮的彼得兔拼命地偷吃麦奎格所种的蔬菜。糟糕的是，比得兔被发现了，所以他赶快逃跑。逃跑当中，彼得兔把他的蓝夹克和鞋子都弄丢了······",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/10/a7c628dced6a691f1fd31aebc647a0a8.jpg@!460x460?v=1478771551",
                    "listennum": 0,
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29424",
                "tagid": "138",
                "albumid": "4660",
                "albuminfo": {
                    "id": "4660",
                    "title": "TOP绘本",
                    "story_num": "73",
                    "intro": "艾猪猪绘本 http://ipigpig.taobao.com",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/10/ee0b86d2e127f776eaaa97d77e078e41.png@!460x460?v=1478769122",
                    "listennum": 0,
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29304",
                "tagid": "138",
                "albumid": "12828",
                "albuminfo": {
                    "id": "12828",
                    "title": "peppapig season第一季",
                    "story_num": "52",
                    "intro": "peppapigseason1粉红猪小妹第一季。适合0-6岁英语启蒙的动画。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/10/4b816bc18d998441c4cbc6058277c844.png@!460x460?v=1478757688",
                    "listennum": "94",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29297",
                "tagid": "138",
                "albumid": "11365",
                "albuminfo": {
                    "id": "11365",
                    "title": "英语绘本随身听",
                    "story_num": "41",
                    "intro": "听绘本，读英语。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/10/fe2bea6aeb9a3568ed12ac54fdad114f.jpg@!460x460?v=1478756679",
                    "listennum": "6",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "29193",
                "tagid": "138",
                "albumid": "12053",
                "albuminfo": {
                    "id": "12053",
                    "title": "东方娃娃绘本英语",
                    "story_num": "9",
                    "intro": "绘本英语》杂志是以世界著名儿童绘本故事为主体,通过英语对话方式表现,由绘本故事、歌曲、游戏综合而成的适合4—10岁儿童阅读的绘本英语期刊.《绘本英语》针对儿童的接受能力和生活经验,将世界绘本故事名著用英语会话表现出来,激发儿童对英语学习的热情.培养儿童正确的发音和语感,通过绘本故事、歌曲、韵律操来引导儿童熟练使用双语.最终养成语言学习的好习惯.《绘本英语》让你孩子轻松开口说英语!",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/09/8b8f66308ee7c3ad5d1031a5721f0753.png@!460x460?v=1478690963",
                    "listennum": "3",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "28977",
                "tagid": "138",
                "albumid": "10412",
                "albuminfo": {
                    "id": "10412",
                    "title": "Eric Carle",
                    "story_num": "18",
                    "intro": "<span>家长日报公众号（Jiazhangribao）和米粒妈公众号（milimaABC）每天都有免费资源大放送！ 源自：Eric Carle</span>",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/09/1b6171ff276542bd344c1600aaca6165.png@!460x460?v=1478690478",
                    "listennum": 0,
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "28772",
                "tagid": "138",
                "albumid": "5660",
                "albuminfo": {
                    "id": "5660",
                    "title": "精灵鼠小弟",
                    "story_num": "18",
                    "intro": "精灵鼠小弟E.B.White.-.Stuart.Little",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/10/29/fa1839c55070bf5cb53fd4a2e523641c.jpg@!460x460?v=1477736437",
                    "listennum": "6",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "28002",
                "tagid": "138",
                "albumid": "5484",
                "albuminfo": {
                    "id": "5484",
                    "title": "著名英文绘本故事第二部",
                    "story_num": "41",
                    "intro": "一些著名英文绘本的音频故事，仅供大家学习。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/10/12/03b2ceb73723f8b53cd533e4fba898ee.jpg@!460x460?v=1476263958",
                    "listennum": "1",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "28000",
                "tagid": "138",
                "albumid": "5485",
                "albuminfo": {
                    "id": "5485",
                    "title": "著名英文绘本故事第一部",
                    "story_num": "109",
                    "intro": "一些著名英文绘本的音频，供大家学习参考。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/10/12/d7b431b1a0cc5f032399870ff4710743.jpg@!460x460?v=1476264030",
                    "listennum": "5",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "27531",
                "tagid": "138",
                "albumid": "12059",
                "albuminfo": {
                    "id": "12059",
                    "title": "世界经典绘本",
                    "story_num": "4",
                    "intro": "世界经典绘本 原版音频",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/09/d95935d7d6fbe4895b69f61eaebfc247.jpg@!460x460?v=1478689656",
                    "listennum": "4",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "27528",
                "tagid": "138",
                "albumid": "12110",
                "albuminfo": {
                    "id": "12110",
                    "title": "杰瑞说绘本",
                    "story_num": "3",
                    "intro": "Jerry中英文说绘本，帮助孩子回忆和加深理解绘本课堂所学的知识，适合孩子在每次绘本教学结束后收听，对原有内容有加深和扩展。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/09/36597855fca55b54f30f55d8820a2f8b.png@!460x460?v=1478689545",
                    "listennum": "1",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "27506",
                "tagid": "138",
                "albumid": "12577",
                "albuminfo": {
                    "id": "12577",
                    "title": "花格子大象艾玛",
                    "story_num": "20",
                    "intro": "关注微信公众号“TigerArtStudio”，点击左下角菜单“加入我们”,让我们一起探索这个美丽的世界吧！ \r\n \r\n花格子大象艾玛系列绘本迄今已转译为二十多国语言，掳获了全球无数幼儿的心，是欧洲“寓言大师”大卫•麦基的经典作品。 \r\n故事的主角艾玛，善用自己的与众不同，转换为他独特的幽默感，带给大家欢乐。在艾玛的身上，我们可以看见人性中的美丽与单纯，也能因此发觉自己潜在的的真性情，因而感觉获得支持！",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/10/08/a01ef14cfea1aaacee576832f80ab8da.jpg@!460x460?v=1475916276",
                    "listennum": "27",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "27070",
                "tagid": "138",
                "albumid": "12277",
                "albuminfo": {
                    "id": "12277",
                    "title": "英文经典绘本",
                    "story_num": "13",
                    "intro": "Iris英文经典故事朗读，欢迎小朋友们倾听。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/09/96276c4db2d39c1529b9fdbfc9e5b2e6.png@!460x460?v=1478689385",
                    "listennum": "5",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "27048",
                "tagid": "138",
                "albumid": "4437",
                "albuminfo": {
                    "id": "4437",
                    "title": "苏斯博士大全集",
                    "story_num": "45",
                    "intro": "世界童书大师的经典之作，见证美国启蒙教育的力作，陪伴几代孩子成长的亲密朋友！\r\n苏斯博士作品，全球销量逾3亿册。曾获美国图画书最高荣誉凯迪克大奖和普利策特殊贡献奖，两次获奥斯卡金像奖和艾美奖，美国教育部指定的儿童重要阅读辅导读物。2-4岁亲子共读，5-10岁自主阅读。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/09/4bbbe6cb5982b9110413c40f3cce680b.png@!460x460?v=1478690730",
                    "listennum": "16",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "26889",
                "tagid": "138",
                "albumid": "13148",
                "albuminfo": {
                    "id": "13148",
                    "title": "丽声妙想英文绘本第七级",
                    "story_num": "6",
                    "intro": "现在就介绍一下自己最明显的特点，让人们记住我。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/09/a69ce85561d92b453d0d8ebae2e2cff6.png@!460x460?v=1478688967",
                    "listennum": 0,
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "26887",
                "tagid": "138",
                "albumid": "13149",
                "albuminfo": {
                    "id": "13149",
                    "title": "丽声妙想英文绘本第六级",
                    "story_num": "6",
                    "intro": "现在就介绍一下自己最明显的特点，让人们记住我。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/09/822101d70094b444b08be638059568f2.png@!460x460?v=1478688956",
                    "listennum": "1",
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            },
            {
                "id": "26885",
                "tagid": "138",
                "albumid": "13150",
                "albuminfo": {
                    "id": "13150",
                    "title": "丽声妙想英文绘本第五级",
                    "story_num": "6",
                    "intro": "现在就介绍一下自己最明显的特点，让人们记住我。",
                    "age_str": "适合0-14岁",
                    "cover": "http://p.xiaoningmeng.net/album/2016/11/09/302fb879d23a9f8b8b43c453fd3bfed3.png@!460x460?v=1478688946",
                    "listennum": 0,
                    "recommenddesc": "",
                    "fav": 0,
                    "favnum": "0",
                    "star_level": "0"
                }
            }
        ],
        "specialtaglist": [
            {
                "name": "推荐",
                "paramkey": "recommend",
                "paramvalue": 1
            },
            {
                "name": "最热门",
                "paramkey": "hot",
                "paramvalue": 1
            },
            {
                "name": "好评榜",
                "paramkey": "goodcomment",
                "paramvalue": 1
            },
            {
                 "name": "睡前故事",
                 "paramkey": "goodcomment",
                 "paramvalue": 1
            },
            {
                 "name": "童话寓言",
                 "paramkey": "goodcomment",
                 "paramvalue": 1
            },
            {
                 "name": "女孩故事",
                 "paramkey": "goodcomment",
                 "paramvalue": 1
            },
            {
                 "name": "动物故事",
                 "paramkey": "goodcomment",
                 "paramvalue": 1
            },
            {
                 "name": "成语故事",
                 "paramkey": "goodcomment",
                 "paramvalue": 1
            }



        ]
    }
  },
  onLoad: function(options) {
    // 生命周期函数--监听页面加载
    console.log('onLoad-------')
    //获取路径中参数
    var tagId = options.tagId;
    console.log("tagId = " + tagId);
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
      path: 'pages/tag/album'
    }
  },
})