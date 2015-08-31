var config ={
  specs:['test/e2e/profile/*.js'],
  framework:'mocha',
  mochaOpts:{
    reporter:'spec',
    slow:3000,
    enableTimeouts: false
  }
};

if (process.env.TRAVIS_BUILD_NUMBER) {
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.capabilities = {
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Test'
  };
}
 
exports.config = config;
