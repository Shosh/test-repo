exports.config = {
//  directConnect: true,
  specs: ['test/e2e/profile/*.js'],
  baseUrl: 'http://localhost:9000/#',
  allScriptsTimeout: 40000,
  getPageTimeout: 40000,
  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec'
  },
  chromeDriver: '../node_modules/protractor/selenium/chromedriver',
  chromeOnly: false,
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  seleniumPort: null,
  capabilities: {
    'browserName': 'chrome'
  }
  
};
