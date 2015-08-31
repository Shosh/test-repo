var config ={
  specs:['test/e2e/profile/*.js'],
  framework:'mocha',
  mochaOpts:{
    reporter:'spec',
    slow:3000,
    enableTimeouts: false
  },
  baseUrl: 'http://localhost:9000/',
  allScriptsTimeout: 30000,
  getPageTimeout: 30000
};
 
exports.config = config;
