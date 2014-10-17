(function() {
	'use strict';

	howdy.app.controller('AppController', function($scope, howdyService, $location) {
	    $scope.redirectToLogin = function(){
	    	$location.url("/login")
	    }
	});
	
	howdy.app.controller('LoginPageController', function($scope, howdyService, $location) {

	});

}).call(this);
