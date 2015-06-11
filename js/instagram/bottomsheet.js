'use strict';

app.controller('BottomSheetCtrl', function($scope, $rootScope, Instagram) {

	$rootScope.selectedHash = {
		tag: 'Seattle'
	};

	$rootScope.showProgressBar = false;

	$scope.getHashTag = function (){
		$rootScope.showProgressBar = true;
		console.log("$rootScope.selectedHash", $rootScope.selectedHash.tag);
		Instagram.get(20, $rootScope.selectedHash.tag || "seattle")
			.success(function(response, status, headers, config) {
				console.log(response);
				$rootScope.showProgressBar = false;
				$rootScope.currentHash.items = {};
				if(response.meta.code !== 200){
					$rootScope.currentHash.error = response.meta.error_type + ' | ' + response.meta.error_message;
					return;
				}
				if(response.data.length > 0){
					$rootScope.currentHash.items = response.data;
					$rootScope.showProgressBar = false;
				}else{
					$rootScope.currentHash.error = "This hashtag has returned no results";
					$rootScope.showProgressBar = false;
				}
			});
	}

	
});