# next-ip2info
> Get infomation from ip.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-ip2info
```

## usage
```js
import '@jswork/next-ip2info';

nx.ip2info('8.8.8.8').then(res=>{
  console.log(res);
});

/*
  {
    ip: '8.8.8.8',
    location: '美国 加利福尼亚州圣克拉拉县山景市谷歌公司DNS服务器',
    os: '未知操作系统',
    browser: '未知浏览器'
  }
*/
```

## resources
- http://www.cz88.net/ip/

## license
Code released under [the MIT license](https://github.com/afeiship/next-ip2info/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-ip2info
[version-url]: https://npmjs.org/package/@jswork/next-ip2info

[license-image]: https://img.shields.io/npm/l/@jswork/next-ip2info
[license-url]: https://github.com/afeiship/next-ip2info/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-ip2info
[size-url]: https://github.com/afeiship/next-ip2info/blob/master/dist/next-ip2info.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-ip2info
[download-url]: https://www.npmjs.com/package/@jswork/next-ip2info
