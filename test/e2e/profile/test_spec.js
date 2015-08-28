var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Test', function() {
  this.timeout(15000);

  beforeEach(function() {
    if (process.env.SAUCE_USERNAME != undefined) {
      this.browser = new webdriver.Builder()
      .usingServer('http://'+ process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'@ondemand.saucelabs.com:80/wd/hub')
      .withCapabilities({
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER,
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        browserName: "chrome"
      }).build();
    } else {
      this.browser = new webdriver.Builder()
      .withCapabilities({
        browserName: "chrome"
      }).build();
    }

    return this.browser.get("http://localhost:9000/#/profile");
  });

  it('should have email there', function() {
    var elt = element(by.binding('vm.user.email'));
    elt.getText()
      .then(function(text) {
        expect(text).to.equal('m.h.vasileva@gmail.com');
        done();
      });
  });
});
