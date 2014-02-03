angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($locationProvider, $routeProvider) {

	$routeProvider
		.when('/', { templateUrl: '/partials/main', controller: 'mainCtrl' });

});

angular.module('app').controller('mainCtrl', function($scope) {
	$scope.myVar = "Hello Angular";
});