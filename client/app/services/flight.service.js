(function() {
    'use strict';

    angular.module('app')
			.service('FlightService',FlightService);

		    FlightService.$inject = ['$http'];

		    function FlightService($http) {
		    	var service = {
		    		getFlights:getFlights
		    	};

		    	return service;

		    	//get list of flights
		    	function getFlights(data) {
		    		$filter('filter')(flights,{date:data.date,})	
		    	}
		    }

})();

