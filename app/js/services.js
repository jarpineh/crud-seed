'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

/*
 angular.module('save', ['ngResource']).
    factory('save_fform', function($resource){
    	return $resource('/save', {}, {
    query: {method:'POST', params:{data:'phones'}, isArray:true}
  });
});/*
