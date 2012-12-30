'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

angular.module('serverResources', ['ngResource']).
    factory('Server', function($resource){
    	var User = $resource('/data/:docid', {'docid':'123'});
  		return User;
	});

angular.module('serverServices', []).factory('Book', function($http) {
  // Book is a class which we can use for retrieving and 
  // updating data on the server
  var Book = function(data) {
    angular.extend(this, data);
  }

  // a static method to retrieve Book by ID
  Book.get = function(id) {
    return $http.get('/Book/' + id).then(function(response) {
      return new Book(response.data);
    });
  };

  // an instance method to create a new Book
  Book.prototype.create = function() {
    var book = this;
	book.id = 123;
	return book;
  }

  return Book;
});
