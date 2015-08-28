exports.config = {
//  directConnect: true,
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  specs: ['test/e2e/profile/*.js'],
  baseUrl: 'http://localhost:9000/#',
  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec',
    slow: 3000,
    tmeout: 3000
  },
  capabilities: {
    'browserName': 'firefox'
  }
};
