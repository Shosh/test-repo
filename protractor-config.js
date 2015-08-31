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
  chromeOnly: false,
  seleniumPort: null,
  multiCapabilities: [
    {
      browserName: 'chrome',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER ? process.env.TRAVIS_JOB_NUMBER : null
    }
  ]
  
};
