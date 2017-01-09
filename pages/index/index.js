//index.js
//获取应用实例
var app = getApp()
Page({

  //页面的初始数据
  data: {
    "code": 10000,
    "data": {
        "focus": {
            "total": 5,
            "items": [
                {
                    "cover": "http://p.xiaoningmeng.net/focus/32.png@!640x260?v=1481609737",
                    "linkurl": "https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-15121060416.33.P6UR58&id=538647555934"
                },
                {
                    "cover": "http://p.xiaoningmeng.net/focus/57.png@!640x260?v=1483691074",
                    "linkurl": "xnm://www.xiaoningmeng.net/album/info.php?albumid=5311"
                },
                {
                    "cover": "http://p.xiaoningmeng.net/focus/52.png@!640x260?v=1482318716",
                    "linkurl": "https://s.click.taobao.com/t?e=m%3D2%26s%3DBU0losCg730cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67sx9sYwi50ZHgL3PGTnk8MYEznJSoMR8P4mzUK4UwxSqnL%2BTcScAYXq13HpKfjWg1f8cb1idx3L6yFtYwGoPP9CTV0hlp%2BQXb6mB42FUY%2BppxiXvDf8DaRs%3D&pvid=10_1.80.81.194_6942_148282"
                },
                {
                    "cover": "http://p.xiaoningmeng.net/focus/54.png@!640x260?v=1482917996",
                    "linkurl": "xnm://www.xiaoningmeng.net/album/info.php?albumid=8043"
                },
                {
                    "cover": "http://p.xiaoningmeng.net/focus/53.png@!640x260?v=1482827897",
                    "linkurl": "http://link.doyao.cn?hmsr=%E5%B0%8F%E6%9F%A0%E6%AA%AC&hmpl=&hmcu=&hmkw=&hmci="
                }
            ]
        },
        "category": {
            "total": 8,
            "items": [
                {
                    "title": "故事",
                    "cover": "http://p.xiaoningmeng.net/tag/2016/01/28/c81e728d9d4c2f636f067f89cc14862c.png?v=1453911544",
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=2"
                },
                {
                    "title": "儿歌",
                    "cover": "http://p.xiaoningmeng.net/tag/2016/01/26/c4ca4238a0b923820dcc509a6f75849b.png?v=1453800329",
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=1"
                },
                {
                    "title": "国学",
                    "cover": "http://p.xiaoningmeng.net/tag/2016/01/26/e4da3b7fbbce2345d7772b0674a318d5.png?v=1453800744",
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=5"
                },
                {
                    "title": "英语",
                    "cover": "http://p.xiaoningmeng.net/tag/2016/01/26/a87ff679a2f3e71d9181a67b7542122c.png?v=1453800765",
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=4"
                },
                {
                    "title": "绘本",
                    "cover": "http://p.xiaoningmeng.net/tag/2016/01/26/3988c7f88ebcb58c6ce932b957b6f332.png?v=1453800844",
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=137"
                },
                {
                    "title": "音乐",
                    "cover": "http://p.xiaoningmeng.net/tag/2016/01/26/eccbc87e4b5ce2fe28308fd9f2a7baf3.png?v=1453800899",
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=3"
                },
                {
                    "title": "科普",
                    "cover": "http://p.xiaoningmeng.net/tag/2016/01/26/45c48cce2e2d7fbdea1afc51c7c6ad26.png?v=1453800951",
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=9"
                },
                {
                    "title": "全部分类",
                    "cover": "http://p.xiaoningmeng.net/tag/all_1080.png",
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/category.php"
                }
            ]
        },
        "section": {
            "items": [
                {
                    "type": "album",
                    "tag_id": "10000",
                    "title": "今日精选",
                    "total": 6,
                    "linkurl": "xnm://api.xiaoningmeng.net/default/v2.6/recommend_list.php",
                    "items": [
                        {
                            "id": "15350",
                            "title": "我上学了",
                            "star_level": "5",
                            "intro": "宝宝上学了，身边的环境发生了很大的变化，如何帮助宝宝快速适应这种变化呢。本专辑的儿歌描述了愉快的校园生活，让宝宝在感受美好校园的同时，养成尊师爱友守纪律的好习惯，从而快速适应校园生活，在人生第一个十字路口完美转身，健康快乐成长。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/27/0a409f659e62be4aa3778846ed01deea.png@!460x460?v=1477548157",
                            "listennum": "208万",
                            "recommenddesc": "让宝宝在感受美好校园，学会遵守纪律"
                        },
                        {
                            "id": "12679",
                            "title": "火火兔儿歌",
                            "star_level": "0",
                            "intro": "火火兔原创儿歌系列，此专辑蕴含多种流行元素，采用多样化的曲风和演唱风格，给宝宝不一样的视听享受，感受音乐魅力，快乐健康成长。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/26/fcf059b3a04a642eca4c21bd3fa5e9e3.jpg@!460x460?v=1477464987",
                            "listennum": "4611",
                            "recommenddesc": "跟着火火兔学儿歌"
                        },
                        {
                            "id": "15388",
                            "title": "聆听大自然",
                            "star_level": "0",
                            "intro": "好奇的宝宝是不是喜欢探索大自然的奥秘呢？轰轰的雷声、哗哗的流水声、清脆的鸟鸣声，是不是都能引起宝宝的注意？带上宝宝一起来聆听大自然的声音吧，让宝宝感受自然的神奇，感受音乐带来的自然之声！",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/18/449ef87e4d3fa1f1f268196b185627dd.jpg@!460x460?v=1476762955",
                            "listennum": "1459",
                            "recommenddesc": "音乐,是一种动人的力量"
                        },
                        {
                            "id": "13325",
                            "title": "卡布的第一个夏之旅",
                            "star_level": "0",
                            "intro": "卡布是一个充满好奇心的孩子，正经历生命中的第一个夏天。自然界的一切变好在它眼里都充满了新鲜感，因此整个故事就在卡布无穷无尽的追问下展开。卡布妈妈的回答更是跳脱常识，充满了出人意外的巧思。而这种巧思正是建立在“爱的教育”上。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/09/23/220bd44f67edd4f311c6c06436cf9a65.jpg@!460x460?v=1474626928",
                            "listennum": "7533",
                            "recommenddesc": "生命中的第一个夏天"
                        },
                        {
                            "id": "13097",
                            "title": "家庭笑话",
                            "star_level": "4",
                            "intro": "每个孩子都是天才，他们总会冒出一些很“神奇”的话，童言无忌，总能引出一串串有趣的小笑话，工爸收集了一些出自儿童之口的小笑话，感受孩子们的天真无邪。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/04/06/220222df17837f0fd0d46fa5c6466eec.jpg@!460x460?v=1459877432",
                            "listennum": "4597",
                            "recommenddesc": "每个孩子都是天才"
                        },
                        {
                            "id": "31",
                            "title": "动物儿歌",
                            "star_level": "4",
                            "intro": "”以可爱的小动物为故事素材，吟唱成经典的儿歌经久不衰。也使孩子和小动物之间混合成了天然体，成为好朋友。本专集收集了最好听的动物儿歌，让孩子与自己喜欢的小动物来一次快乐的亲密接触！",
                            "cover": "http://p.xiaoningmeng.net/album/2015/12/26/c16a5320fa475530d9583c34fd356ef5.png@!460x460?v=1451075393",
                            "listennum": "4947",
                            "recommenddesc": ""
                        }
                    ]
                },
                {
                    "type": "author",
                    "title": "热门作者",
                    "total": 8,
                    "linkurl": "xnm://api.xiaoningmeng.net/default/v2.6/authors.php",
                    "items": [
                        {
                            "uid": "15274",
                            "nickname": "罗尔德·达尔",
                            "avatar": "http://a.xiaoningmeng.net/avatar/15274/1481619974/180",
                            "wiki_url": "http://www.xiaoningmeng.net/author/detail.php?uid=15274&author=罗尔德·达尔"
                        },
                        {
                            "uid": "15163",
                            "nickname": "E·B·怀特",
                            "avatar": "http://a.xiaoningmeng.net/avatar/15163/1481365363/180",
                            "wiki_url": "http://www.xiaoningmeng.net/author/detail.php?uid=15163&author=E·B·怀特"
                        },
                        {
                            "uid": "15218",
                            "nickname": "郑渊洁",
                            "avatar": "http://a.xiaoningmeng.net/avatar/15218/1481624850/180",
                            "wiki_url": "http://www.xiaoningmeng.net/author/detail.php?uid=15218&author=郑渊洁"
                        },
                        {
                            "uid": "18515",
                            "nickname": "孙幼军",
                            "avatar": "http://a.xiaoningmeng.net/avatar/18515/1481351929/180",
                            "wiki_url": "http://www.xiaoningmeng.net/author/detail.php?uid=18515&author=孙幼军"
                        },
                        {
                            "uid": "18379",
                            "nickname": "儒勒•凡尔纳",
                            "avatar": "http://a.xiaoningmeng.net/avatar/18379/1481349089/180",
                            "wiki_url": "http://www.xiaoningmeng.net/author/detail.php?uid=18379&author=儒勒•凡尔纳"
                        },
                        {
                            "uid": "18466",
                            "nickname": "李欧·李奥尼",
                            "avatar": "http://a.xiaoningmeng.net/avatar/18466/1481338666/180",
                            "wiki_url": "http://www.xiaoningmeng.net/author/detail.php?uid=18466&author=李欧·李奥尼"
                        },
                        {
                            "uid": "18290",
                            "nickname": "汤素兰",
                            "avatar": "http://a.xiaoningmeng.net/avatar/18290/1481342567/180",
                            "wiki_url": "http://www.xiaoningmeng.net/author/detail.php?uid=18290&author=汤素兰"
                        },
                        {
                            "uid": "18200",
                            "nickname": "宫西达也",
                            "avatar": "http://a.xiaoningmeng.net/avatar/18200/1481366936/180",
                            "wiki_url": "http://www.xiaoningmeng.net/author/detail.php?uid=18200&author=宫西达也"
                        }
                    ]
                },
                {
                    "type": "album",
                    "tag_id": "10001",
                    "title": "同龄在听",
                    "total": 6,
                    "linkurl": "xnm://api.xiaoningmeng.net/default/v2.6/same_age_list.php",
                    "items": [
                        {
                            "id": "15329",
                            "title": "吃饭前奏曲",
                            "star_level": "0",
                            "intro": "为宝宝不好好吃饭发愁么？为宝宝吃饭前不想洗手发愁么？不用严厉的去说教孩子们，来首轻快地儿歌，让爱模仿的孩子们在儿歌的感染下，去自觉的吃饭洗手。在孩子吃饭前为孩子放首《吃饭前奏曲》里的歌曲吧。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/11/04/d3b0ccb6a1a32b2594084f0da668615d.jpg@!460x460?v=1478226263",
                            "listennum": "76万",
                            "recommenddesc": "饭前记得洗手手哦"
                        },
                        {
                            "id": "15330",
                            "title": "植物博览会",
                            "star_level": "0",
                            "intro": "各种植物在小孩子的眼里都充满了生命，为什么花有红的黄的白的？叶子为什么是绿的？为什么有的花大有的花小？孩子对这个植物的大千世界充满了疑问和好奇。《植物博览会》以歌曲的形式满足孩子对这个世界的好奇，快来听听吧。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/11/03/acf7e77a5936a316105ce94cee522f5d.png@!460x460?v=1478142687",
                            "listennum": "65万",
                            "recommenddesc": "为什么花有红的黄的白的"
                        },
                        {
                            "id": "5590",
                            "title": "宝宝哆来咪",
                            "star_level": "0",
                            "intro": "抱抱熊晚安故事请继续，这里是抱抱熊电台之宝宝哆来咪~  想看更多只要关注“东方爱婴”微信公众号即可。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/11/01/b0490b85e92b64dbb5db76bf8fca6a82.jpg@!460x460?v=1477965036",
                            "listennum": "65",
                            "recommenddesc": "宝宝熊讲最动听的故事"
                        },
                        {
                            "id": "12632",
                            "title": "红蘑菇儿歌小屋",
                            "star_level": "0",
                            "intro": "小宝贝们的睡前儿歌。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/29/0d9d154fb5b905d3f6d606f8b6cbb750.jpg@!460x460?v=1477721003",
                            "listennum": "5560",
                            "recommenddesc": "小宝贝们的睡前儿歌"
                        },
                        {
                            "id": "15344",
                            "title": "我最有礼貌",
                            "star_level": "0",
                            "intro": "有礼貌的孩子总是更加招人喜欢的，比如上学时，见了老师不拘束，说声老师早；见了同学拉拉手，互相问个好。相信孩子在听了这里的儿歌后，会不自觉的养成更加礼貌的行为习惯，成为大家夸赞的好乖乖呦。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/28/e3a12e198d15821a8fcf98714770bb57.png@!460x460?v=1477641704",
                            "listennum": "69万",
                            "recommenddesc": "有礼貌的孩子总是更加招人喜欢的"
                        },
                        {
                            "id": "15347",
                            "title": "北京童谣",
                            "star_level": "0",
                            "intro": "本专辑的童谣不仅节奏韵律动感丰富，而且加入了很多的特效，如动物的叫声、风声、雨声、儿童的笑声、老北京叫卖调等，听起来既有深厚的民族传统韵味、又形象地表现了现代儿童的童真童趣，让孩子们在歌声笑声中增长知识，健康成长。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/27/437d432e126269160c1cc4e0fc72f1ee.png@!460x460?v=1477550339",
                            "listennum": "235万",
                            "recommenddesc": "听起来既有深厚的民族传统韵味、又形象地表现了童真童趣"
                        }
                    ]
                },
                {
                    "type": "album",
                    "tag_id": "10002",
                    "title": "最新上架",
                    "total": 6,
                    "linkurl": "xnm://api.xiaoningmeng.net/default/v2.6/online_list.php",
                    "items": [
                        {
                            "id": "4043",
                            "title": "乌龟见龙王",
                            "star_level": "0",
                            "intro": "我国第一本寓言故事集，作者王位著有小小说集“心中的那道风景”，寓言集“乌龟见龙王”、“长生不死药”分获首届长春童话寓言文学创作一等奖、全国第四届金骆驼创作三等奖。系中国寓言文学研究会理事。",
                            "cover": "http://p.xiaoningmeng.net/album/2017/01/05/8fb134f258b1f7865a6ab2d935a897c9.jpg@!460x460?v=1483600994",
                            "listennum": "28",
                            "recommenddesc": "我国第一本寓言故事集"
                        },
                        {
                            "id": "14499",
                            "title": "亲子儿歌一起来",
                            "star_level": "0",
                            "intro": "好听的儿歌，精彩的童谣，天天都是儿童节！儿歌 (nursery rhyme)，是以低幼儿童为主要接受对象的具有民歌风味的简短诗歌。它是儿童文学最古老也是最基本的体裁形式之一。儿歌是民歌的一种，全国各地都有。内容多反映儿童的生活情趣，传播生活、生产知识等。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/11/05/6910a0f1eff035477ff9f52993ebf0b1.png@!460x460?v=1478313697",
                            "listennum": "8826万",
                            "recommenddesc": "好听的儿歌，精彩的童谣"
                        },
                        {
                            "id": "15343",
                            "title": "开心小伙伴",
                            "star_level": "0",
                            "intro": "童年和小伙伴在一起的日子，总是令人难以忘怀的。本专辑收录的儿歌，能够让小朋友感受到和伙伴们在一起时的快乐，有助于消除孩子和其他陌生小朋友一起玩的不适应感和胆怯心理。快乐童年，有你有我，亲爱的小伙伴，一起向快乐出发吧。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/18/88cd5f09652e5b4b12be5e44148c344c.jpg@!460x460?v=1476781415",
                            "listennum": "130万",
                            "recommenddesc": "快乐童年，有你有我"
                        },
                        {
                            "id": "15340",
                            "title": "我爱唱流行",
                            "star_level": "0",
                            "intro": "当年的流行歌曲，或许不仅父母会唱，宝宝有时候也会经常跟着哼，听着这些稚嫩的童声唱流行歌曲，会不会别有一番味道呢？专辑《我爱唱流行》，精选的都是由可爱的童声演绎当今乐坛流行的歌曲，或许宝宝听了也会感觉很不一样噢。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/11/02/e82bd52ff22173a2db7c8bb56647830c.jpg@!460x460?v=1478057826",
                            "listennum": "408万",
                            "recommenddesc": "这些稚嫩的童声唱流行歌曲，别有一番味道"
                        },
                        {
                            "id": "12959",
                            "title": "吉美启蒙儿歌精选集",
                            "star_level": "4",
                            "intro": "类别：温馨篇 \r\n内容来自国内知名点读书出版商“吉美文化“（微信jmbook520），您可通过电台收听到国内外优秀的绘本故事、原创儿歌和宝贝分享快乐，更多精彩请关注微信。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/08/006bfae3a90bab38e29382170867e962.jpg@!460x460?v=1475921530",
                            "listennum": "3399",
                            "recommenddesc": "首首经典 句句好听"
                        },
                        {
                            "id": "15334",
                            "title": "洗刷刷",
                            "star_level": "0",
                            "intro": "宝宝平时洗个澡是不是怎么都不愿意呢？或者是呆在里面水凉了也不愿出来呢？洗手的时候玩着水不愿走？让宝宝养成一个正确的洗涮习惯很重要，有这方面烦恼的爸爸妈妈们来听下儿歌《洗刷刷》吧，让宝宝在快乐的歌声中完成洗刷刷。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/18/6000db4c19f0ab158c1b1bf5b06ce151.jpg@!460x460?v=1476782551",
                            "listennum": "190万",
                            "recommenddesc": "会洗刷刷的才是乖宝宝"
                        }
                    ]
                },
                {
                    "type": "album",
                    "tag_id": "2",
                    "title": "故事",
                    "total": 4,
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=2",
                    "items": [
                        {
                            "id": "14277",
                            "title": "长在树上的猫尾巴",
                            "star_level": "0",
                            "intro": "　　张秋生所著的《张秋生小巴掌经典童话》是作者的童话故事作品集。作家将真挚深沉的情感注入作品中，使它们充满了活力和魅力，从而不仅让读者感受到了儿童文学的空灵、纯美、大气，更会受到人生的启迪，达到净化心灵的目的。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/11/25/ccf4769973f7658ac976a063527c4292.jpg@!460x460?v=1480054500",
                            "listennum": "947万",
                            "recommenddesc": "帮助宝贝发现生活的美好与善良"
                        },
                        {
                            "id": "14329",
                            "title": "唐豆豆，请坐好",
                            "star_level": "0",
                            "intro": "唐豆豆从开学的第一天起，就带着新奇的眼光审视着小学生活，无论是家里还是学校，唐豆豆都闹出了许多笑话，在这些笑话中，唐豆豆明白了许多事情，的确了学习目的，端正了学习态度。\r\n这是一堂孩子从幼儿园进入小学的成长课，这是一部让孩子试着长大的成长书，这是一段孩子从迷惘到开朗的心理独白。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/28/33192f6b62911c61d4073ef0f9923420.jpg@!460x460?v=1482918859",
                            "listennum": "4539万",
                            "recommenddesc": "快来听唐豆豆的有趣成长故事"
                        },
                        {
                            "id": "3740",
                            "title": "不再害怕又大又响的东西",
                            "star_level": "0",
                            "intro": "对于很多儿童来说，响的声音和大的东西——不管是多么善意、安全，都会让他们非常焦虑。雷声、狗叫声、吸尘器声、大的动物、警报声、烟火声、大嗓门的大个子，还有高大的建筑物，都会让他们紧贴着父母，哭泣，或者逃跑。这些恐惧影响了他们的健康成长，让他们无法享受日常生活的快乐。\r\n英格·迈尔编写的这本《不再害怕又大又响的东西》中的观点和方法，帮助孩子更积极地解释令他恐惧的东西，克服恐惧。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/29/33ef701c8059391708f1c3ddbe9f1f81.jpg@!460x460?v=1482993154",
                            "listennum": "431",
                            "recommenddesc": "帮助孩子解释生活中的恐惧"
                        },
                        {
                            "id": "4100",
                            "title": "我的弟弟跟你换",
                            "star_level": "0",
                            "intro": "《我的弟弟跟你换》：妈妈新买的帽子不合适，可以拿到帽子店去换！ 小姐姐如果觉得小弟弟不合适， 是不是也可以带到婴儿店去换呢？ \r\n鳄鱼小姐姐卡洛琳看到弟弟似乎占据妈妈的拥抱和关爱，所以以「弟弟又臭、又会流口水……」为由嫌弃他，并且想把他带到婴儿店换掉。 \r\n不料，换到的猫熊宝宝、大象宝宝、老虎宝宝……似乎也都不大合适。到底，卡洛琳最后换到哪一个她觉得「合适」的小宝宝呢？",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/29/a3ec6dd8d538712a581e5b24726ce062.jpg@!460x460?v=1482994156",
                            "listennum": "167",
                            "recommenddesc": "卡洛琳能把弟弟从婴儿店换掉吗"
                        }
                    ]
                },
                {
                    "type": "album",
                    "tag_id": "1",
                    "title": "儿歌",
                    "total": 4,
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=1",
                    "items": [
                        {
                            "id": "15359",
                            "title": "外语儿歌",
                            "star_level": "0",
                            "intro": "本专辑收录了英法意德，日韩等国家的优秀儿歌，在优美的儿歌中，让宝宝感受别样的异国风情和全球文化，接触到真正属于他们自己的旋律，可以更好更全面地培养宝宝的乐感、美感，说不定将来的小歌星到大歌星，就是您的孩子。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/11/09/54bca824f5fa890e036fb9191bcdc324.jpg@!460x460?v=1478672827",
                            "listennum": "748万",
                            "recommenddesc": "能接触到真正属于自己的旋律"
                        },
                        {
                            "id": "12632",
                            "title": "红蘑菇儿歌小屋",
                            "star_level": "0",
                            "intro": "小宝贝们的睡前儿歌。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/29/0d9d154fb5b905d3f6d606f8b6cbb750.jpg@!460x460?v=1477721003",
                            "listennum": "5560",
                            "recommenddesc": "小宝贝们的睡前儿歌"
                        },
                        {
                            "id": "15494",
                            "title": "婷婷唱古文第一部",
                            "star_level": "0",
                            "intro": "江湖人称“背诗神器”，“婷婷诗教”的秘密宝器。一听钟情，每一首古诗的谱曲都源自古诗本身的意境，朗朗上口，边唱边学，轻松背古诗，不经意间让孩子变得更加多才多艺。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/29/cc6a6632b380f3f6a1c54b1222cd96c2.png@!460x460?v=1477708167",
                            "listennum": "2835",
                            "recommenddesc": "一听钟情，朗朗上口，轻松背古诗"
                        },
                        {
                            "id": "15350",
                            "title": "我上学了",
                            "star_level": "5",
                            "intro": "宝宝上学了，身边的环境发生了很大的变化，如何帮助宝宝快速适应这种变化呢。本专辑的儿歌描述了愉快的校园生活，让宝宝在感受美好校园的同时，养成尊师爱友守纪律的好习惯，从而快速适应校园生活，在人生第一个十字路口完美转身，健康快乐成长。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/27/0a409f659e62be4aa3778846ed01deea.png@!460x460?v=1477548157",
                            "listennum": "208万",
                            "recommenddesc": "让宝宝在感受美好校园，学会遵守纪律"
                        }
                    ]
                },
                {
                    "type": "album",
                    "tag_id": "5",
                    "title": "国学",
                    "total": 4,
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=5",
                    "items": [
                        {
                            "id": "15095",
                            "title": "中华典故故事",
                            "star_level": "0",
                            "intro": "　　你知道杜康造酒刘伶醉说得是什么吗？你知道狗咬吕洞宾的真正含义吗？你知不知道嫁鸡随鸡嫁狗随狗，嫁个扁担夹着走原来是由嫁乞随乞，嫁叟随叟嫁个偏瘫架着走演化而来的，而自卖自夸的王婆其实是个男的？所有那些平日里挂在嘴边、出现在字里行间的典故俗语，你都能用对地方吗？\r\n　　听最有趣的传统文化故事，从故事中掌握传统文化的要义。 一种真正意义上的有声读物，用浅易的表现形式提供一种全新的、更随意、更轻松的读书方式，使您读时能够解放双手、休息双眼，并随时、随处可取，随心、随意来读，让人们在休闲的阅读方式里汲取知识...",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/01/b165bafed6172152a6eff6fa40b09353.jpg@!460x460?v=1480590004",
                            "listennum": "16117万",
                            "recommenddesc": "趣谈字里行间的典故俗语"
                        },
                        {
                            "id": "4033",
                            "title": "林汉达中国历史故事集",
                            "star_level": "0",
                            "intro": "《中国历史故事集》是由著名的历史学家林汉达先生编写的一部连续的历史故事集，从周朝东迁一直讲到晋朝统一全国为止，前后一千零五十年。 林先生编写历史故事有两个很大的特点。 一是注意史实的准确。他写的历史故事跟演义小说不一样。演义小说虽然写得很生动，可其中有许多虚构的情节。他写历史故事着重说明历史发展进程，又比较尊重历史事实，主要取材于《春秋》、《史记》、《汉书》、《后汉书》、《三国志》等“正史”。像《三国演义》中的“桃园结义”、“草船借箭”之类的故事，他都没有采用。 二是文字的口语化。林先生是一位语言学家，对普通话有深入的研究。他是浙江宁波人，虽然只能说家乡的方言，可写起文章来，用的却是地道的普通话。这部书念起来很顺口，读着跟听故事一个样，所以不但是一部优秀的历史读物，还是一部优秀的语文读物。 因此，机灵儿给乔小姐每天讲一个林汉达先生的历史故事，并录制成音频播放，配以概要性的文字和图片，这种讲故事、看故事的方法，乔小姐非常喜欢。 当然，希望其他的小朋友和爸爸妈妈们也能喜欢。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/01/c0c783b5fc0d7d808f1d14a6e9c8280d.jpg@!460x460?v=1480590132",
                            "listennum": "764",
                            "recommenddesc": "读史使人明智"
                        },
                        {
                            "id": "9972",
                            "title": "读诗给孩子听",
                            "star_level": "0",
                            "intro": "一周一首古诗",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/11/35675fd71a153bf3baab29b904e525c8.jpg@!460x460?v=1476166259",
                            "listennum": "1887",
                            "recommenddesc": "重现国学之美，传承国粹之风"
                        },
                        {
                            "id": "15494",
                            "title": "婷婷唱古文第一部",
                            "star_level": "0",
                            "intro": "江湖人称“背诗神器”，“婷婷诗教”的秘密宝器。一听钟情，每一首古诗的谱曲都源自古诗本身的意境，朗朗上口，边唱边学，轻松背古诗，不经意间让孩子变得更加多才多艺。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/29/cc6a6632b380f3f6a1c54b1222cd96c2.png@!460x460?v=1477708167",
                            "listennum": "2835",
                            "recommenddesc": "一听钟情，朗朗上口，轻松背古诗"
                        }
                    ]
                },
                {
                    "type": "album",
                    "tag_id": "4",
                    "title": "英语",
                    "total": 4,
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=4",
                    "items": [
                        {
                            "id": "9039",
                            "title": "好听的英文圣诞儿歌",
                            "star_level": "0",
                            "intro": "圣诞节（Christmas）又称耶诞节，在每年12月25日，是基督宗教在世界上影响力最大的节日 。\r\n一年一度的圣诞节即将来临,你熟悉的圣诞歌曲有哪些？在圣诞节听到温馨又浪漫的圣诞歌曲那会有多温暖呀，快来竖起你的小耳朵一起听吧！",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/24/799fc232a527e7a7d6435c945083a329.jpg@!460x460?v=1482556673",
                            "listennum": "1699",
                            "recommenddesc": "叮叮当，叮叮当，铃儿响叮当"
                        },
                        {
                            "id": "14492",
                            "title": "育儿宝鉴",
                            "star_level": "0",
                            "intro": "　　育婴宝鉴医道至博，幼科最难。如草之芽兮，贵手调养；似蚕之苗兮，慎予保全。血气充兮，脉无可诊；神识未开兮，口不能言。城求于心，评察乎面，苟得其要也，握造化于妙手，未达其旨也，摘章句于残编。\r\n　　调护若失，疾病乃生。头要凉而背要暖，食勿饱而衣勿锦。肠胃脆薄兮，乳哺伤而成积；精神怯弱兮，闻见异而成痫。嗟哉慈母兮，过于姑息；笑彼粗工兮，误于汤丸。伐其发生之气，夭其童稚之年。徒啼号于邱陇①，休祷祀于旃。\r\n     征候要识，夭寿须知。不在手指之侧，但凭面部之间。心火上而天庭可察，肾水下而地角直观。右颊金而属肺，左颊木而属肝。脾土之位，鼻准之端。青惊赤热，黄积白疳、如煤之黑兮，必中恶毒；似赭之紫兮，斯感乎风寒。\r\n　　胎禀虚损兮，则发稀而头软；赋质充实兮，自肉厚而骨坚。性静兮少笑，神困兮多眠。肺热兮浊涕结于鼻内，脾冷兮清涎滞于颐间。两目连劄③兮，肝风之鼓；双瞳直视兮，心火之炎。气不足而囟陷，突起则为热也；血有余③而睑鲜，萎黄则为虚焉。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/11/01/5ae81daa87d6649df09002741e5b1738.jpg@!460x460?v=1477966562",
                            "listennum": "92079",
                            "recommenddesc": "轻松学英语，孩子不再难"
                        },
                        {
                            "id": "7828",
                            "title": "圣诞歌曲",
                            "star_level": "4",
                            "intro": "来一起听好听的圣诞歌曲吧！",
                            "cover": "http://p.xiaoningmeng.net/album/2016/11/09/9f564fef13bb8a7f9faa5f9071e4e045.jpg@!460x460?v=1478674617",
                            "listennum": "3916",
                            "recommenddesc": "来一起听好听的圣诞歌曲吧"
                        },
                        {
                            "id": "13",
                            "title": "儿童赞美诗",
                            "star_level": "0",
                            "intro": "英语儿歌-儿童赞美诗",
                            "cover": "http://p.xiaoningmeng.net/album/2015/10/31/c51ce410c124a10e0db5e4b97fc2af39.jpg@!460x460",
                            "listennum": "3078",
                            "recommenddesc": "韵律欢快，学英语更轻松"
                        }
                    ]
                },
                {
                    "type": "album",
                    "tag_id": "137",
                    "title": "绘本",
                    "total": 4,
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=137",
                    "items": [
                        {
                            "id": "10335",
                            "title": "怕黑的小北极熊",
                            "star_level": "0",
                            "intro": "在北极，一年中最漫长的夜晚——极夜到来之前，小北极熊米卡害怕极了。从太阳落山开始，他就陷入了无穷无尽的恐慌之中。幸运的是，他的表姐来到了他身边。带着他一起体验极夜的魅力和神秘，有了这次体验，小米卡还会害怕黑夜吗？",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/29/40f6e633518b32939156a842c93a84be.jpg@!460x460?v=1482997493",
                            "listennum": "1109",
                            "recommenddesc": "小朋友，你也害怕黑夜吗？"
                        },
                        {
                            "id": "10757",
                            "title": "市场街最后一站",
                            "star_level": "5",
                            "intro": "小杰很不开心。他不断抱怨着：为什么他不能像朋友那样有自己家的车，而要在雨天里等巴士；为什么他不能跟别人一样有一个随身听；为什么他每次都要来到这个城市最脏乱的地方。\r\n每个问题，奶奶都给他一个富有启发的回答，让他发现日常生活中那些被忽略的美好和快乐。\r\n本书荣获奖项：美国纽伯瑞文学奖金奖，美国凯迪克银奖，美国《波士顿环球报》年度最佳图画书奖，美国芝加哥公共图书馆年度最佳童书等。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/29/c2155acc6d5bcda7debfb19c3abef4af.jpg@!460x460?v=1482996665",
                            "listennum": "1205",
                            "recommenddesc": "纽伯瑞文学奖金奖作品"
                        },
                        {
                            "id": "11424",
                            "title": "安的种子",
                            "star_level": "0",
                            "intro": "《安的种子》获丰子恺优秀儿童图画书奖，获台湾2011年中国时报“开卷”ZUI佳童书奖。作品版权输出到韩国以及中国台湾、香港等地。\r\n《安的种子》以本、静与安三个小和尚为叙述线索，讲述了一个有关大自然规律的寓言故事。\r\n在这急功近利的社会中，安的那份平和的心境，宛如一潭清澈平静的水，是那么难得。一天天长大的孩子啊，你总有一天也会得到“千年莲花的种子”，会为了各种“珍贵”的东西夜以继日、马不停蹄。可是，无论如何，希望你记得安——这个你小时候听过的故事里的小和尚，记得他感激地把种子装进小布袋里，挂在胸前；记得他从容地去买东西、扫雪、做斋饭、挑水；记得他悠悠然散步的样子。他告诉你，要怀着希望、有所追求，但一定要淡定、顺其自然；同时，享受生活的过程，享受那些平凡琐碎的小事，享受等待。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/24/15d0beeeeaa7f86a5f2c6b493c29776f.jpg@!460x460?v=1482546997",
                            "listennum": "1145",
                            "recommenddesc": "丰子恺儿童图画书奖获奖绘本"
                        },
                        {
                            "id": "6922",
                            "title": "我们是朋友",
                            "star_level": "0",
                            "intro": "鳄和兔兔每天都在一起玩。小鳄想和兔兔一直在一起玩，一直到永远。必须要说拜拜这件事，是不是很奇怪。要是能住在兔兔家就好了。 “明天不能跟你玩了，和龙龙约好去郊游。”兔兔说。 “啊？！”……小鳄鱼不舒服了，这样的感觉还是第一次。跟赛跑输了生气的那种感觉不一样，跟绘画比赛时金奖被小淳得到时的心情也不一样。晕晕乎乎好像被什么卡住的感觉……",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/22/29fdff891569187da8e5ed4f7a6ea4c8.jpg@!460x460?v=1482399679",
                            "listennum": "1694",
                            "recommenddesc": "我的好朋友要被龙龙“抢走”了"
                        }
                    ]
                },
                {
                    "type": "album",
                    "tag_id": "3",
                    "title": "音乐",
                    "total": 4,
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=3",
                    "items": [
                        {
                            "id": "15376",
                            "title": "音乐感知",
                            "star_level": "0",
                            "intro": "宝宝对音乐是不是有种莫名的喜欢呢？是不是音乐响起时宝宝就会很兴奋呢？陪宝宝一起来体会音乐带给他们的快乐，同时在音乐中增进与宝宝的感情，做一个懂宝宝的家长吧！本专辑收录了好听舒心的轻音乐，让宝宝在音乐中慢慢感知世界的奇妙！",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/18/4766154cea472a154f89d033051372de.jpg@!460x460?v=1476774921",
                            "listennum": "124万",
                            "recommenddesc": "一起聆听经典，感受音乐的魅力"
                        },
                        {
                            "id": "15374",
                            "title": "古筝金曲",
                            "star_level": "0",
                            "intro": "本专辑《古筝金曲》，不仅精选了很多古筝曲子中经典的代表作，让宝宝从小感受经典的魅力，还有很多80后父母喜欢的现代歌曲，现代歌曲用古筝演奏是什么感觉呢？赶快来听下吧。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/18/acf73df8e44ed30badb8a834a87f7e94.jpg@!460x460?v=1476775375",
                            "listennum": "188万",
                            "recommenddesc": "细腻动听，韵味浓厚"
                        },
                        {
                            "id": "15375",
                            "title": "笛子金曲",
                            "star_level": "0",
                            "intro": "笛子是中国乐器代表之一，本专辑《笛子金曲》精选的不仅有高亢悠长的旋律的音乐，还有欢快华丽，婉转优美的小调，并且有很多经典的流行歌曲演奏，让您在跟宝宝欣赏的时候，不知不觉想哼上两句。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/18/73926ad475a40a4cb676b8d4516cd767.jpg@!460x460?v=1476775237",
                            "listennum": "174万",
                            "recommenddesc": "音乐是一个人时最好的陪伴"
                        },
                        {
                            "id": "15379",
                            "title": "游戏时间",
                            "star_level": "0",
                            "intro": "本专辑收录了精彩的亲子音乐，在音乐中给家长和宝宝提供了游戏音乐背景，让宝宝在玩耍的过程中锻炼出创造力、想象力、毅力与思维能力，并在最大程度上促进家长与宝宝的互动，让宝宝在最自然的状态下拥有一个健康阳光的美好心态。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/18/0b0805c2460fd34756c326458f1642af.jpg@!460x460?v=1476765802",
                            "listennum": "171万",
                            "recommenddesc": "让宝宝在玩耍中锻炼创造力"
                        }
                    ]
                },
                {
                    "type": "album",
                    "tag_id": "9",
                    "title": "科普",
                    "total": 4,
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=9",
                    "items": [
                        {
                            "id": "15012",
                            "title": "世界上最遥远的星球",
                            "star_level": "0",
                            "intro": "　　在这里，你能自由地飞向遥远的星空、潜入深邃的海洋，饱览世界上最奇妙的景观；在这里，你注定要与高贵的灵魂、不朽的人物相逢，领略他们的睿智、豁达与优雅；在这里，你可以拒绝命运的安排，为生命画一条优美的抛物线，抵达梦想的极地；在这里，你渐渐地发现自己变成了世界上最富有的人，你的心灵花园蓬勃葱茏、气象万千，勇气与力量在激越跳动，想象与激情在奔腾汹涌；在这里，你能看到世界上最惊人的奇迹，世界上最有趣的现象，世界上最重大的发现，世界上最不可思议的事情，世界上最成功的名人，世界上最不朽的名著……",
                            "cover": "http://p.xiaoningmeng.net/album/2016/11/19/f8e8b1feff822753a39b21de69259fd6.jpg@!460x460?v=1479534721",
                            "listennum": "295万",
                            "recommenddesc": "你会发现自己是世界上最富有的人"
                        },
                        {
                            "id": "15013",
                            "title": "世界上最激烈的战场",
                            "star_level": "0",
                            "intro": "　　在这里，你能看到鱼会爬树，兽会飞翔，草会奔跑，生命是何等的千姿百态，生机勃勃。在这里，你会看到牛粪能制钻石，机器人会品酒，喜怒哀乐也会遗传，大量的前沿知识为你展示了一个崭新的世界。在这里，你可以一路惊喜地走过数以百计的国家，你无需承受沿途的风尘之苦，却能享受人间的种种精彩。在这里，你可以怀着暖暖的情怀，酣畅淋漓地饱尝一次爱的盛宴，给心灵洗个澡，把灵魂放置在高处。在这里，你会看到世界上最极端的纪录，世界上最独特的生命，世界上最热的新知识，世界上最奇的冷知识，世界上最有益的忠告，世界上最有特色的国家，世界上最悬疑的案件，世界上最激烈的战场……",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/01/d8d3a2d972d6cb50e983baa5673ea92a.jpg@!460x460?v=1480589648",
                            "listennum": "234万",
                            "recommenddesc": "带你走近险象环生的战场"
                        },
                        {
                            "id": "15014",
                            "title": "世界上最深重的灾难",
                            "star_level": "0",
                            "intro": "　　在这里，你能看到鱼会爬树，兽会飞翔，草会奔跑，生命是何等的千姿百态，生机勃勃。在这里，你会看到牛粪能制钻石，机器人会品酒，喜怒哀乐也会遗传，大量的前沿知识为你展示了一个崭新的世界。在这里，你可以一路惊喜地走过数以百计的国家，你无需承受沿途的风尘之苦，却能享受人间的种种精彩。在这里，你可以怀着暖暖的情怀，酣畅淋漓地饱尝一次爱的盛宴，给心灵洗个澡，把灵魂放置在高处。在这里，你会看到世界上最极端的纪录，世界上最独特的生命，世界上最热的新知识，世界上最奇的冷知识，世界上最有益的忠告，世界上最有特色的国家，世界上最悬疑的案件，世界上最激烈的战场……\r\n　　该书为《中国少年儿童阅读文库》之一，将带你进入世界上最深重的灾难之中。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/01/2bf620c22ba6bffd71c0709ba9654212.jpg@!460x460?v=1480589741",
                            "listennum": "385万",
                            "recommenddesc": "死神原来离我们这么近"
                        },
                        {
                            "id": "13927",
                            "title": "阿西莫夫最新科学指南（下）",
                            "star_level": "0",
                            "intro": "这是一部全面介绍人类以科学的方法为工具，努力探索宇宙奥秘的科普著作。其内容涵盖了物理科学、生物科学及它们的各个分支的发展状况和所取得的成就，阐述了各门学科之间的相互渗透和交叉。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/12/01/0390aff9c68eeb7b64fbebe21c878de3.jpg@!460x460?v=1480589820",
                            "listennum": "638",
                            "recommenddesc": "一起乘着科学的翅膀翱翔"
                        }
                    ]
                },
                {
                    "type": "album",
                    "tag_id": "153",
                    "title": "育儿",
                    "total": 4,
                    "linkurl": "xnm://www.xiaoningmeng.net/default/v2.6/tag_album_list.php?tag_id=153",
                    "items": [
                        {
                            "id": "14803",
                            "title": "新妈妈的产后第一本恢复书",
                            "star_level": "0",
                            "intro": "《新妈妈的第一本产后恢复书》，本书将传统坐月子的方法进行了科学系统的总结，它结合了现代健康生活的观念，从新妈妈饮食、塑身、美容、心理、疾病等方面讲解了如何科学坐月子，如何合理补充营养与调理身心平衡等等。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/21/7ce96e616cfd1a5caa4127a0ce4bd7fd.jpg@!460x460?v=1477025600",
                            "listennum": "680万",
                            "recommenddesc": "为新妈妈准备的科学恢复指南"
                        },
                        {
                            "id": "14802",
                            "title": "十个月完美孕育",
                            "star_level": "0",
                            "intro": "《10个月完美孕育》共有10章，介绍了最新的妊娠理念，对最受准妈妈关注的孕期问题提出了科学的解决方案，有其独特的风格，每一页还收录了针对该页的内容中最受准妈妈关注的问答。妊娠每个月特制的表格和跟踪式的纲要提示让准妈妈对孕期中每个阶段的身体变化和重要事项一目了然。另外，还附有孕期心情笔记和孕期记录，用它可以记录下准妈妈幸福的10个月。",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/24/29ddf7414ac131a83205fe7195aff159.jpg@!460x460?v=1477299163",
                            "listennum": "539万",
                            "recommenddesc": "给准妈妈的科学解决方案"
                        },
                        {
                            "id": "14801",
                            "title": "孕妈妈的第一本怀孕书",
                            "star_level": "5",
                            "intro": "《孕妈妈的第一本怀孕书》由董颖主编，是孕妈妈真正的第一本孕期读物，本书用最简单最直观的图解方式进行讲解，帮孕妈妈恶补怀孕期间的基础知识，作为孕妈妈的你也要用心地学习，因为父母是孩子最好的老师，今天我们把自己的努力和对孩子全身心的爱传递给腹中的胎儿，他也会真正地感受到妈妈爸爸的爱，为了能够孕育健康聪明的宝宝，让我们一起努力吧！",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/24/209dc878267a1292ff2a1b0bdfbbc52e.jpg@!460x460?v=1477299035",
                            "listennum": "2176万",
                            "recommenddesc": "如何生一个健康聪明的宝宝"
                        },
                        {
                            "id": "5377",
                            "title": "让孩子的大脑自由",
                            "star_level": "0",
                            "intro": "没有时间读书，那就听书吧。  书中的文字，会告诉你一个与众不同的儿童世界  学习的同时，你会和孩子一起快乐成长  致所有愿意为孩子聆听的父母",
                            "cover": "http://p.xiaoningmeng.net/album/2016/10/22/23451391cd1399019fa0421129066bc6.png@!460x460?v=1477113235",
                            "listennum": "777",
                            "recommenddesc": "那些你忽略了的育儿知识"
                        }
                    ]
                }
            ]
        },
        "ad": {
            "total": 5,
            "items": [
                {
                    "cover": "http://p.xiaoningmeng.net/static/niuniufudai.jpg",
                    "linkurl": "https://gw3.mouchina.com/static/H5-3.0/share.html?key=22fa13c8a0f4ef8a1323c84356f892568fe0bcfb_3&userId=1000000483"
                },
                {
                    "cover": "http://p.xiaoningmeng.net/static/wei_cai_hui.jpg",
                    "linkurl": "http://dl2.vipc.cn/Vipc-APPxnmteg.apk"
                },
                {
                    "cover": "http://p.xiaoningmeng.net/static/vote.jpg",
                    "linkurl": "http://wechat.iuqiancheng.com/download/vote?c=xiaoningmeng"
                },
                {
                    "cover": "http://p.xiaoningmeng.net/static/xiaoshuo.jpg",
                    "linkurl": "http://jic.xiaoningmeng.net/apk/FreeBook_V41_1910_FreeShu_baomdbhl_V2.7.0_9245_118_2016-12-15-06-23-14.apk"
                }
            ]
        }
    }
  },

  onLoad: function(options) {
    // 生命周期函数--监听页面加载
    console.log('onLoad')
    //调用应用实例的方法获取全局数据
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

  onReady: function() {
    // 生命周期函数--监听页面初次渲染完成
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
      path: 'pages/index/index'
    }
  },

   viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  },
    //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    // getData();
  },

  // getData:function() {
  //   wx.request({
  //     url: 'http://dev.xiaoningmeng.net/default/v2.6.4/index.php', //仅为示例，并非真实的接口地址
  //     data: {},
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: function(res) {
  //       alert(res.data);
  //       console.log(res.data);
  //     }
  //   })
  // }
});
