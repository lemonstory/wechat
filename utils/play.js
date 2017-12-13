
/**
 * 播放工具
 * 
 */

var util = require('util.js')
const backgroundAudioManager = wx.getBackgroundAudioManager();
var app = getApp()


/**
 * 音频播放开关(播放 或 暂停)
 */
function audioPlaySwitch(albumDetailData, albumId, singer, storyId, storyIdx, callback) {

  console.log("🎵 🎵 🎵  audioPlay START");
  console.log("albumId = " + albumId + ", storyId = " + storyId + ", storyIdx = " + storyIdx);

  if (!util.isEmpty(albumId)) {

    var currentPagePlayAlbumId = albumId;
    var currentPagePlayStoryId = storyId;
    var currentPagePlayStoryIdx = storyIdx;

    if (currentPagePlayStoryId.length == 0 && currentPagePlayStoryIdx.length == 0) {
      currentPagePlayStoryIdx = 0;
      currentPagePlayStoryId = albumDetailData.storyList.items[currentPagePlayStoryIdx].id;
    }
    console.log("currentPagePlayAlbumId = " + currentPagePlayAlbumId + ", currentPagePlayStoryId = " + currentPagePlayStoryId + ", currentPagePlayStoryIdx = " + currentPagePlayStoryIdx);
    if (typeof (backgroundAudioManager.paused) == "undefined") {

      console.log("😀 开始播放");
      setPlayerData(albumDetailData, currentPagePlayAlbumId, singer, currentPagePlayStoryId, currentPagePlayStoryIdx);


    } else if (backgroundAudioManager.paused) {

      //如果是不同专辑,或播放同一专辑的不同歌曲
      if ((app.constant.currentPlayAlbumId != currentPagePlayAlbumId) || (app.constant.currentPlayAlbumId == currentPagePlayAlbumId && app.constant.currentPlayStoryId != currentPagePlayStoryId)) {

        console.log("😀😀😀 【目前暂停状态】如果是不同专辑,或播放同一专辑的不同歌曲, 重新播放");
        setPlayerData(albumDetailData, currentPagePlayAlbumId, singer, currentPagePlayStoryId, currentPagePlayStoryIdx);

      } else {
        console.log("😀😀 恢复播放");
        backgroundAudioManager.play();
      }
    } else {

      //如果是不同专辑,或播放同一专辑的不同歌曲
      if ((app.constant.currentPlayAlbumId != currentPagePlayAlbumId) || (app.constant.currentPlayAlbumId == currentPagePlayAlbumId && app.constant.currentPlayStoryId != currentPagePlayStoryId)) {

        console.log("😀😀😀 【目前播放状态】如果是不同专辑,或播放同一专辑的不同歌曲, 重新播放");
        setPlayerData(albumDetailData, currentPagePlayAlbumId, singer, currentPagePlayStoryId, currentPagePlayStoryIdx);

      } else {
        //如果是同一专辑
        console.log("😀😀😀😀 暂停播放");
        backgroundAudioManager.pause();
      }
    }
  }

  if (typeof (callback) === 'function') {
    callback(albumDetailData, albumId, singer, storyId, storyIdx);
  }
}

/**
 * 设置播放数据
 */
function setPlayerData(albumDetailData, albumId, singer, storyId, storyIdx) {

  app.constant.currentPlayAlbumDetail = albumDetailData;
  app.constant.currentPlayAlbumId = albumId;
  app.constant.currentPlayStoryId = storyId;
  app.constant.currentPlayStoryIndex = storyIdx;

  backgroundAudioManager.title = albumDetailData.storyList.items[storyIdx].title;
  backgroundAudioManager.epname = albumDetailData.albumInfo.title;
  backgroundAudioManager.singer = singer;
  backgroundAudioManager.coverImgUrl = albumDetailData.storyList.items[storyIdx].playcover;
  backgroundAudioManager.src = albumDetailData.storyList.items[storyIdx].mediapath;

}

//播放上一首,或者从头开始继续播放
function prev(callback) {
  
  if (app.constant.currentPlayStoryIndex > 0) {
    var index = app.constant.currentPlayStoryIndex - 1;
    if (index < 0) {
      index = 0;
    }
    var storyId = app.constant.currentPlayAlbumDetail.storyList.items[index].id;
    audioPlaySwitch(
      app.constant.currentPlayAlbumDetail,
      app.constant.currentPlayAlbumId,
      app.constant.appName,
      storyId,
      index,
      callback);
  }
}

function next(callback) {

  var total = app.constant.currentPlayAlbumDetail.storyList.total;
  if (app.constant.currentPlayStoryIndex < total - 1) {
    var index = app.constant.currentPlayStoryIndex + 1;
    if (index >= total) {
      index = 0;
    }
    var storyId = app.constant.currentPlayAlbumDetail.storyList.items[index].id;
    audioPlaySwitch(
      app.constant.currentPlayAlbumDetail,
      app.constant.currentPlayAlbumId,
      app.constant.appName,
      storyId,
      index,
      callback);
  }
}

module.exports.audioPlaySwitch = audioPlaySwitch;
module.exports.prev = prev;
module.exports.next = next;