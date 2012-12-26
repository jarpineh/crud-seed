'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function Ctrl($scope, $routeParams) {
	alert($routeParams);
	var master = {
    name: 'John Smith',
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
  $scope.form = master;
}
Ctrl.$inject = ['$scope', '$routeParams']; //Where is this $inject documented and why it is needed?