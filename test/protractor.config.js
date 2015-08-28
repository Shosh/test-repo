module.exports.config = {
  
  scpecs: ['../test/e2e/profile/test_spec.js'],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec',
    slow: 3000,
    enableTimeouts: false
  },
  capabilities: {
    'browserName': 'firefox'
  }
};
