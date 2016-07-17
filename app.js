 var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

 myApp.config(function($stateProvider, $urlRouterProvider) {
 	$urlRouterProvider.otherwise("/Things_to_Do_First.html");
 	$stateProvider.state('wiki', {
 		url : "/:name",
 		templateUrl: function($stateParams) {
 			return 'data/' + $stateParams.name;
 		},
 		controller : function ($timeout) {
 			// alert();
 			// $("html, body").scrollTop(0);
 		}
 	})
 });

 myApp.controller('pokemonCtrl', ['$http', '$scope', function($http, $scope) {
 	$http.get("links.json").then(function(data) {
 		console.log("DDDDD");
 		console.log(data.data);
 		$scope.links = data.data;
 	}).catch(function(err) {
 		console.error(err);
 	});

 }])