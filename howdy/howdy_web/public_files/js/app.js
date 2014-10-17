(function() {
  	'use strict';
  	window.howdy = {};
  	howdy.app = angular.module("howdy", ['ui.router', 'restangular']);

  	howdy.app.config(
  		function (RestangularProvider) {
    		RestangularProvider.setRequestSuffix('/');
		}
	);

}).call(this);
