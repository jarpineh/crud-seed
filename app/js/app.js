'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngSanitize', 'ngResource', 'serverServices', 'serverResources']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.when('/fform', {templateUrl: 'partials/first_form.html', controller: Ctrl});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
