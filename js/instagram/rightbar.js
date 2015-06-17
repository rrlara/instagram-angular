'use strict';

app.controller('RightBarCtrl', function($scope, $rootScope, $mdSidenav) {

	//$rootScope.selectedHash = {
	//	tag: 'Popular'
	//};
    //
	//$rootScope.showProgressBar = false;
    //
	//$scope.getHashTag = function (){
	//	$rootScope.notify = true;
	//	console.log("$rootScope.selectedHash", $rootScope.selectedHash.tag);
	//	Hashtags.hashtags(20, $rootScope.selectedHash.tag || "seattle")
	//		.success(function(response, status, headers, config) {
	//			console.log(response);
    //
	//			$rootScope.currentHash.items = {};
	//			if(response.meta.code !== 200){
	//				$rootScope.currentHash.error = response.meta.error_type + ' | ' + response.meta.error_message;
	//				return;
	//			}
	//			if(response.data.length > 0){
	//				$rootScope.currentHash.items = response.data;
	//				$rootScope.notify = false;
	//			}else{
	//				$rootScope.currentHash.error = "This hashtag has returned no results";
	//				$rootScope.notify = false;
	//			}
	//		});
	//}

	$scope.close = function () {
		$mdSidenav('right').close()
			.then(function () {
				$log.debug("close RIGHT is done");
			});
	};
	
});