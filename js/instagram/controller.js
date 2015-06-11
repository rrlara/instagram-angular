'use strict';

app.controller('InstagramCtrl', function($scope, $rootScope, Instagram, $mdSidenav) {

	$scope.onSwipeLeft = function(ev) {
		$rootScope.toggleSidenav('left');
	};

	$rootScope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	$rootScope.currentHash = {
		hash: 'Seattle'
	};


	Instagram.get(20, $rootScope.currentHash.hash)
		.success(function(response, status, headers, config) {
			console.log(response);
			if(response.meta.code !== 200){
				$rootScope.currentHash.error = response.meta.error_type + ' | ' + response.meta.error_message;
				return;
			}
			if(response.data.length > 0){
				$rootScope.currentHash.items = response.data;
			}else{
				$rootScope.currentHash.error = "This hashtag has returned no results";
			}
		});

});