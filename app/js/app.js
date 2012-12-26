'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngSanitize']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  	$locationProvider.html5Mode(true);
    $routeProvider.when('/app/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/app/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/app/view1'});
  }]);
