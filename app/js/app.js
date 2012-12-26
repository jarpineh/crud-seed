'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngSanitize']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.when('/fform', {templateUrl: 'partials/first_form.html', controller: Ctrl});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);

/*
angular.module('app').controller('personController', [
  '$log', '$scope', '$location', 'personService', function($log, $scope, $location, personService) {
    $scope.people = [];
    $scope.insertPerson = function(person) {
      return personService.save(person, function(person, getResponseHeaders) {
        $scope.error = '';
        $scope.person = {};
        $scope.people.push(person);
        return $location.path("/people/" + person.id);
      }, function(error) {
        if (error.status === 403) {
          return $scope.error = error.data;
        }
      });
    };
    return personService.get(function(people) {
      return $scope.people = people;
    });
  }
]);
*/