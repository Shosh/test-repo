var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var browser = new webdriver.Builder();
browser.forBrowser("chrome");
browser.withCapabilities(webdriver.Capabilities.chrome());
browser.build();

describe('Test', function() {
  this.timeout(15000);

  beforeEach(function() {
    return browser.get("http://localhost:9000/#/profile");
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
