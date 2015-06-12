'use strict';

app.controller('InstagramCtrl', function($scope, $rootScope, Instagram, $mdSidenav, $mdBottomSheet, $mdDialog, $mdToast) {

	$scope.onSwipeLeft = function(ev) {
		$rootScope.toggleSidenav('left');
	};

	$rootScope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	$rootScope.currentHash = {
		hash: 'Seattle'
	};

	$rootScope.location = {
		lat: '',
		ln: ''
	};

	$scope.clickedInstagram = function (item){

		console.log("item: ", item);

		$rootScope.location.lat = item.location.latitude;
		$rootScope.location.lng = item.location.longitude;

	}

	$scope.addToImageClicked = function (item){
		$rootScope.imageClicked = [];
		$rootScope.imageClicked.push(item.images.standard_resolution.url);

		$rootScope.imageClickedCaption = [];
		$rootScope.imageClicked.push(item.caption.text);
		//console.log("imageClicked", $rootScope.imageClicked);
	}


	Instagram.get(50, $rootScope.currentHash.hash)
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
			template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <img src="{{Image}}" alt="" width="100%"></md-content>' +
			'<div id="caption">{{caption}}</div></md-dialog>',
			targetEvent: ev
		})
			.then(function(answer) {
				$scope.alert = 'You said the information was "' + answer + '".';
			}, function() {
				$scope.alert = 'You cancelled the dialog.';
			});
	};

	$scope.dateconverter = function (timestamp){
		var date = new Date(timestamp * 1000);
		return date
	}

	$rootScope.showSimpleToast = function() {
		$mdToast.show(
			$mdToast.simple()
				.content('Welcome Rene! Search for a hashtag')
				.position('bottom left')
				.hideDelay(3000)
		);
	};

	$rootScope.showSimpleToast();

});