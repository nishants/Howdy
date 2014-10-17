(function() {
  	'use strict';
  	window.howdy = {};
  	howdy.app = angular.module("howdy", ['ui.router', 'restangular']);

  	howdy.app.config(
  		function (RestangularProvider, $httpProvider) {
    		$httpProvider.defaults.xsrfCookieName = 'csrftoken';
    		$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';     	
        RestangularProvider.setRequestSuffix('/');
		}

	);
}).call(this);
