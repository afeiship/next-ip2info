const nx = require('@feizheng/next-js-core2');
require('../src/next-ip2info');

describe('api.basic test', () => {
  test('nx.ip2info should return ip/addresss/os/device', function(done) {
    nx.ip2info('8.8.8.8').then(res=>{
      console.log(res);
      expect(res).toHaveProperty('ip');
      expect(res).toHaveProperty('location');
      expect(res).toHaveProperty('os');
      expect(res).toHaveProperty('browser');
      done();
    })
  });
});
