(function() {
	'use strict';

	howdy.app.service('howdyService', ['Restangular', function(Restangular) {	 	    
	    return {
	    	login: function(phone, countryCode, password){	   
	    		return  Restangular.all('login').post({phone: phone, countryCode: countryCode, password: password});
	    	}
	    };
	}]);

}).call(this);
