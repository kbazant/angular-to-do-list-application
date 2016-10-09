angular.module("todoListApp", []);
.controller('mainCtrl', function($scope){
	$scope.helloworld = function() {
		console.log("Hello there! This is the helloWorld controller function, in the mail Ctrl!");
	};
});