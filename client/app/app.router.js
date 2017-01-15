(function() {
	'use strict';

	angular.module('app.router', ['ngAnimate', 'ui.router', 'ngSanitize'])
			.config(Router); 

    Router.$inject = ['$stateProvider','$urlRouterProvider'];

    function Router($stateProvider,$urlRouterProvider) {
        // For any unmatched url, redirect to notFound page
        $urlRouterProvider.otherwise("/notfound");

        // set up routes
        $stateProvider
        	//home page route
            .state('home', {
                url: '/',
                templateUrl: "/app/views/home.html",
                controller:'HomeCtrl',
                controllerAs:'hc'
            })
            //search page route
            .state('flightlist', {
            	url: '/search',
            	templateUrl: "/app/views/search.html",
            	controller:'SearchCtrl',
                controllerAs:'sc'
            })
            .state('notfound', {
            	url: '/notfound',
            	templateUrl: "/app/views/notfound.html"
            });
    }

})();
