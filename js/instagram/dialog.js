'use strict';

app.controller('DialogCtrl', function($scope, $rootScope, Instagram) {

	console.log("imageClicked", $rootScope.imageClicked);

	$scope.Image = $rootScope.imageClicked[0];

	$scope.caption = $rootScope.imageClicked[1];

	
});