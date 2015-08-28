describe('A unit test suite', function() {
  var profileCtrl = null;
  var userDataMock = {student: ['Testdata A', 'B', 'C']};
  
  beforeEach(function() {
    module('testingApp');
    module('testingApp.profile');
  });
  beforeEach(inject(function($controller) {
    profileCtrl = $controller('profileCtrl', {
      user: userDataMock
    });
  }));

  it('has a user', function() {
    expect(profileCtrl.user).to.not.be.undefined;
  });
  
  it('user is student', function() {
    expect(profileCtrl.user.student).to.not.be.undefined;
    expect(profileCtrl.user.student.length).to.equal(3);
  });

  it('has student', function() {
    expect(profileCtrl.student).to.not.be.undefined;
    expect(profileCtrl.student.length).to.equal(3);
  });
});
