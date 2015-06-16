'use strict';

app.controller('DialogCtrl', function($scope, $rootScope) {

	console.log("imageClicked", $rootScope.imageClicked);

	$scope.Image = $rootScope.imageClicked[0].images.standard_resolution.url;

	$scope.caption = $rootScope.imageClicked[0].caption.text || "";

	$scope.userName = $rootScope.imageClicked[0].user.full_name;

	$scope.userNameLink = "https://instagram.com/" + $rootScope.imageClicked[0].user.username + "/";

	
});