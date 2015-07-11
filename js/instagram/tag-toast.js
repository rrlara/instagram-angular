'use strict';

app.controller('ToastCtrl', function($scope, $rootScope, $http, $mdToast) {

	$rootScope.showCustomToast = function() {
		$mdToast.show({
			controller: 'ToastCtrl',
			templateUrl: 'tag-toast.html',
			hideDelay: 6000,
			position: 'top'
		});
	};

	$rootScope.closeToast = function() {
		$mdToast.hide();
	};

});