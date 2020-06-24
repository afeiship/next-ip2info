/*!
 * name: @feizheng/next-ip2info
 * description: Get infomation from ip.
 * homepage: https://github.com/afeiship/next-ip2info
 * version: 1.0.1
 * date: 2020-06-24T07:49:01.893Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var fetch = require('node-fetch');
  var iconvLite = require('iconv-lite');
  var RETURN_BUFFER = function (res) { return res.buffer(); };
  var INFO_RE = /ShowIPAddr\('(.*?)','(.*?)','(.*?) (.*?) '\);/;

  var DEFAULT_OPTIONS = { context: global };

  nx.ip2info = function (inIp) {
    var url = 'http://ipaddr.cz88.net/data.php?ip=' + inIp;
    return new Promise(function (resolve) {
      fetch(url).then(RETURN_BUFFER).then(function (res) {
        var resStr = iconvLite.decode(res, 'gbk');
        var matched = INFO_RE.exec(resStr);
        resolve({
          ip: matched[1],
          location: matched[2],
          os: matched[3],
          browser: matched[4],
        });
      })
    })
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.ip2info;
  }
})();

//# sourceMappingURL=next-ip2info.js.map
