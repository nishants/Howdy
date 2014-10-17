(function() {
	'use strict';

	howdy.app.controller('AppController', function($scope, howdyService, $location) {
	    $scope.redirectToLogin = function(){
	    	$location.url("/login")
	    }
	});
	
	howdy.app.controller('LoginPageController', function($scope, howdyService, $location) {
		var onSuccess = function(response){
			alert("logged in..");	
		}

		var onFailure = function(response){
			alert("Failed");	
		}

		$scope.user = { countryCode : "91"};

	    $scope.login = function(){
	    	howdyService.login(
	    		$scope.user.countryCode,
	    		$scope.user.phone,
	    		$scope.user.password
	    	).then(onSuccess, onFailure);
	    }

	});

}).call(this);
