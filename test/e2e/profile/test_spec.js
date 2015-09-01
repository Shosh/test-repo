var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var sys = require('sys');
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

describe('Test', function() {
  this.timeout(15000);

  beforeEach(function() {
    exec("ls -la", puts); 
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
