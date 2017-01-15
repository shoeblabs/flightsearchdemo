(function() {
    'use strict';

    angular.module('app')
			.controller('SearchCtrl',SearchCtrl);

		    SearchCtrl.$inject = [];

		    function SearchCtrl() {
		    	var vm = this;
		    	
		    	vm.title = "search page";
		    }

})();

