var now = new Date();
function createtime() {
  var grt = new Date("11/24/2023 18:00:00");
  now.setTime(now.getTime() + 250);
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
      ? `<img class='boardsign' src='https://img.shields.io/badge/%E4%B8%8A%E7%8F%AD%E6%97%B6%E9%97%B4-%E7%B4%A7%E5%BC%A0%E5%9C%B0%E6%91%B8%E9%B1%BC%E4%B8%AD-orange' title='maplex正在紧张的摸鱼中'><span class='textTip'> <br> 本站已经运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`
    : `<img class='boardsign'  src='https://img.shields.io/badge/%E4%B8%8B%E7%8F%AD%E6%97%B6%E9%97%B4-%E5%A4%A7%E8%83%86%E5%9C%B0%E6%91%B8%E9%B1%BC%E4%B8%AD-green' title='maplex正在大胆的摸鱼'><span class='textTip'> <br> 本站已经运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`),
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
setInterval(() => {
  createtime();
}, 250);
