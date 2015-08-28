exports.config = {
//  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
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
