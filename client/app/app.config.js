(function() {
	'use strict';

	angular.module('app.config', [])
			.config(Config);

			Config.$inject = ['$locationProvider'];

			function Config($locationProvider) {
				$locationProvider.html5Mode(true);
			}
})();
