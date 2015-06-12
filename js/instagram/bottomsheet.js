'use strict';

app.controller('BottomSheetCtrl', function($scope, $rootScope) {

	var lat = $rootScope.location.lat;
	var	lng = $rootScope.location.lng;

	$scope.Image = 'https://maps.googleapis.com/maps/api/staticmap?scale=1' +
		'&zoom=13&size=640x640&sensor=false&maptype=terrain&markers=color:red|' + lat + ',' + lng;

	console.log($scope.Image);

	
});