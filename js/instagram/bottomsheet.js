'use strict';

app.controller('BottomSheetCtrl', function($scope, $rootScope, $timeout) {

	var lat = $rootScope.location.lat;
	var	lng = $rootScope.location.lng;

	//$scope.googleMapLink = "http://maps.google.com/maps?q=" + lat + "," + lng;
    //
	//$scope.Image = 'https://maps.googleapis.com/maps/api/staticmap?scale=1' +
	//	'&zoom=15&size=640x640&sensor=false&maptype=terrain&markers=color:red|' + lat + ',' + lng;
    //
	//console.log($scope.Image);

	var map,
		locationMarker;

	if (map != undefined) { map.remove(); }

	$timeout(setMap, 300);

	function setMap(){
		map = L.map('map', {
			invalidateSize: true,
			zoomControl:false
		}).setView([lat, lng], 13);
		var basemapUrl = 'http://{s}.tiles.mapbox.com/v3/spatialdev.map-4o51gab2/{z}/{x}/{y}.png';
		var basemapLayer = L.tileLayer(basemapUrl,{
			//detectRetina: true
		});
		basemapLayer.addTo(map);

		 //create an orange rectangle
		locationMarker = L.circle([lat, lng], 35, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.7
		}).addTo(map);
	}



	
});