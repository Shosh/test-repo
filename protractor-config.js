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
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  capabilities: {
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER
  }
  
};
