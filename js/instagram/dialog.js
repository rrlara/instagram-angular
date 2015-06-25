'use strict';

app.controller('DialogCtrl', function($scope, $rootScope) {

	console.log("imageClicked", $rootScope.imageClicked);

	$scope.isImage = false;
	$scope.isVideo = false;

	console.log("$rootScope.imageClicked", $rootScope.imageClicked);

	if ($rootScope.imageClicked[0].type == 'video'){
		$scope.isVideo = true;
		$scope.Image = $rootScope.imageClicked[0].videos.standard_resolution.url;
	}else{
		$scope.isImage = true;
		$scope.Image = $rootScope.imageClicked[0].images.standard_resolution.url;
	}

	$scope.caption = $rootScope.imageClicked[0].caption.text || "";

	$scope.userName = $rootScope.imageClicked[0].user.full_name;

	$scope.userNameLink = "https://instagram.com/" + $rootScope.imageClicked[0].user.username + "/";

	$scope.likeCount = $rootScope.imageClicked[0].likes.count;

	$scope.commentCount = $rootScope.imageClicked[0].comments.count;



	
});