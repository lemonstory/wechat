function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds();


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

	
function getShortTimeStr(dateTime) {
		
  var date = dateTime.substring(8, 10);
  var month = dateTime.substring(5, 7);
  return month + "/" + date;
}


/**
 * 是否为空对象
 */
function isEmptyObject(e) {
  var t;
  for (t in e)
    return !1;
  return !0
}

/** 
 * 是否为空字符串，有空格不是空字符串 
 * @param str 
 * @returns {Boolean} 
 */
function isEmptyStr(str) {
  if (str == null || typeof str == "undefined" ||
    str == "") {
    return true;
  }
  return false;
};

//给数字字符串补零，不支持负数
function padNumber(num, fill) {
  //改自：http://blog.csdn.net/aimingoo/article/details/4492592
  var len = ('' + num).length;
  return (Array(
    fill > len ? fill - len + 1 || 0 : 0
  ).join(0) + num);
}

//秒转化成 分秒 00:00
function secondToDate(result) {
  // var h = Math.floor(result / 3600);
  var m = Math.floor((result / 60 % 60));
  var s = Math.floor((result % 60));
  var ret = padNumber(m, 2) + ":" + padNumber(s, 2);
  return ret;
}

/**
 * 选取范围内随机值
 * @param {Number} min - 下限（或上限）
 * @param {Number} max - 上限（或下限）
 * @returns {Number} - 上下限区间内的随机值
 */
function randomFrom(min, max) {
  var temp;

  if (min > max) {
    temp = min;
    min = max;
    max = temp;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.formatTime = formatTime;
module.exports.isEmptyStr = isEmptyStr;
module.exports.isEmptyObject = isEmptyObject;
module.exports.padNumber = padNumber;
module.exports.getShortTimeStr = getShortTimeStr;
module.exports.secondToDate = secondToDate;
module.exports.randomFrom = randomFrom;

