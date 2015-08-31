var config ={
  specs:['test/e2e/profile/*.js'],
  framework:'mocha',
  mochaOpts:{
    reporter:'spec',
    slow:3000,
    enableTimeouts: false
  }
};
 
exports.config = config;
