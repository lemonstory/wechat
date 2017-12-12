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

function isEmpty(n) {

  var ret = false;
  if (typeof (n) != "undefined" && n != null) {
    ret = false;
  } else {
    ret = true;
  }
  return ret;
}

module.exports.formatTime = formatTime;
module.exports.isEmpty = isEmpty;
