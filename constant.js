var constant = {

    "appName":"小柠檬-听儿歌故事",
    "appDesc":"让儿歌故事带给宝贝多彩童年",
    "sectionTypeAlbum":"album",
    "sectionTypeAuthor":"author",
    "domain":"http://dev.xiaoningmeng.net",


    //当前播放的专辑信息 -start
    "currentPlayAlbumDetail":{},
    'currentPlayAlbumId': '',
    'currentPlayStoryId': '',
    'currentPlayStoryIndex': '0',
    //play:播放中
    //pause:暂停
    //stop:停止
    //ended:结束
    'playerStatus': '',

    //order:顺序播放
    //repeat:单曲循环
    //shuffle:随机播放
    'playerMode':'order',
    //当前播放的专辑信息 -end
}

module.exports.constant = constant;