exports.config = {
//  directConnect: true,
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  specs: ['test/e2e/profile/*.js'],
  baseUrl: 'http://localhost',
  allScriptsTimeout: 40000,
  getPageTimeout: 40000,
  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec'
  },
  capabilities: {
    'browserName': 'firefox',
    'build': process.env.TRAVIS_BUILD_NUMBER
  }
};
