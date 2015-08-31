var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Test', function() {
  beforeEach(function() {
    return browser.get("#/profile");
  });

  it('should have email there', function() {
    var elt = element(by.binding('vm.user.email'));
    elt.getText()
      .then(function(text) {
        expect(text).to.equal('m.h.vasileva@gmail.com');
      });
  });
});
