'use strict';

app.controller('InstagramCtrl', function($scope, $rootScope, Instagram, $mdSidenav, $mdBottomSheet, $mdDialog) {

	$scope.onSwipeLeft = function(ev) {
		$rootScope.toggleSidenav('left');
	};

	$rootScope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	$rootScope.currentHash = {
		hash: 'Seattle'
	};

	$scope.addToImageClicked = function (item){
		$rootScope.imageClicked = [];
		$rootScope.imageClicked.push(item);
		//console.log("imageClicked", $rootScope.imageClicked);
	}


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

	$scope.showListBottomSheet = function($event) {
		$scope.alert = '';
		$mdBottomSheet.show({
			templateUrl: 'bottomsheet.html',
			controller: 'BottomSheetCtrl',
			targetEvent: $event
		}).then(function(clickedItem) {
			$scope.alert = clickedItem.name + ' clicked!';
		});
	};

	$scope.showAdd = function(ev) {
		$mdDialog.show({
			controller: 'DialogCtrl',
			template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <img src="{{Image}}" alt="" height="475"></md-content></md-dialog>',
			targetEvent: ev
		})
			.then(function(answer) {
				$scope.alert = 'You said the information was "' + answer + '".';
			}, function() {
				$scope.alert = 'You cancelled the dialog.';
			});
	};

});