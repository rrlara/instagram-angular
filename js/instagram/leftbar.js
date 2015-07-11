'use strict';

app.controller('SideBarCtrl', function($scope, $rootScope, Hashtags) {

	$rootScope.selectedHash = {
		tag: 'Popular'
	};

	$rootScope.showProgressBar = false;

	$rootScope.paginationURL = "";

	$scope.searchTag = function(tags){
		$rootScope.imageClicked = [];
		$rootScope.selectedHash.tag = tags;
		$scope.getHashTag();

	}

	$scope.getHashTag = function (){
		$rootScope.notify = true;
		$rootScope.imageClicked = [];
		console.log("$rootScope.selectedHash", $rootScope.selectedHash.tag);
		Hashtags.hashtags(20, $rootScope.selectedHash.tag || "seattle")
			.success(function(response, status, headers, config) {
				console.log(response);

				$rootScope.currentHash.items = {};
				if(response.meta.code !== 200){
					$rootScope.currentHash.error = response.meta.error_type + ' | ' + response.meta.error_message;
					return;
				}
				if(response.data.length > 0){
					$rootScope.currentHash.items = response.data;
					console.log(response.pagination.next_url);
					$rootScope.paginationURL = response.pagination.next_url;
					$rootScope.notify = false;
				}else{
					$rootScope.currentHash.error = "This hashtag has returned no results";
					$rootScope.notify = false;
				}

				if(response.meta.code !== 400){
					$rootScope.currentHash.error = response.meta.error_type + ' | ' + response.meta.error_message;
					$rootScope.notify = false;
					return;
				}

			});
	}

	
});