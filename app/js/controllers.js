'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function Ctrl($scope, $resource, Server) {
	var master = {
    name: 'Smith',
    address:{
      line1: '123 Main St.',
      city:'Anytown',
      state:'AA',
      zip:'12345'
    },
    contacts:[
      {type:'phone', value:'1(234) 555-1212'}
    ]
  };
  $scope.master = master;
  var newUser = Server.get({docid:123}, function () {
		$scope.newUser = newUser;
		console.log(newUser);
		$scope.master = newUser.form;
		$scope.cancel();
		});

  $scope.state = /^\w\w$/;
  $scope.zip = /^\d\d\d\d\d$/;
  $scope.word = /^\w*$/;

  $scope.cancel = function() {
    $scope.form = angular.copy($scope.master);
  };

  $scope.save = function() {
    $scope.master = $scope.form;
    $scope.submit($scope.form);
    $scope.cancel();
  };

  $scope.addContact = function() {
    $scope.form.contacts.push({type:'', value:''});
  };

  $scope.removeContact = function(contact) {
    var contacts = $scope.form.contacts;
    for (var i = 0, ii = contacts.length; i < ii; i++) {
      if (contact === contacts[i]) {
        contacts.splice(i, 1);
      }
    }
  };

  $scope.isCancelDisabled = function() {
    return angular.equals(master, $scope.form);
  };

  $scope.isSaveDisabled = function() {
    return $scope.FForm.$invalid || angular.equals(master, $scope.form);
  };

  $scope.submit = function(form) {
	$scope.newUser.form = form;
	$scope.newUser.$save()
  };

}
Ctrl.$inject = ['$scope', '$resource', 'Server']; //Dependency injection apparently needs this, but in simple examples it can guess the values to inject
