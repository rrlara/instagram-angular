'use strict';

app.factory('Profile', ['$http', function($http) {
	var base = "https://api.instagram.com/v1";
	// get your own client id http://instagram.com/developer/
	var clientId = '53b03b9f9ca24bfdb622fd49cd57f1b2';
	return {
		profile: function() {
			var request = '/media/popular';
			var url = base + request;
			var config = {
				'params': {
					'client_id': clientId,
					'callback': 'JSON_CALLBACK'
				}
			};
			return $http.jsonp(url, config);
		}
	};
}]);

app.factory('Popular', ['$http', function($http) {
	var base = "https://api.instagram.com/v1";
	// get your own client id http://instagram.com/developer/
	var clientId = '53b03b9f9ca24bfdb622fd49cd57f1b2';
	return {
		popular: function() {
			var request = '/media/popular';
			var url = base + request;
			var config = {
				'params': {
					'client_id': clientId,
					'callback': 'JSON_CALLBACK'
				}
			};
			return $http.jsonp(url, config);
		}
	};
}]);

app.factory('Hashtags', ['$http', function($http) {
		var base = "https://api.instagram.com/v1";
		// get your own client id http://instagram.com/developer/
		var clientId = '53b03b9f9ca24bfdb622fd49cd57f1b2';
		return {
			hashtags: function(count, hashtag) {
				var request = "/tags/" + hashtag + "/media/recent";
				var url = base + request;
				var config = {
					'params': {
						'client_id': clientId,
						'count': count,
						'callback': 'JSON_CALLBACK'
					}
				};
				return $http.jsonp(url, config);
			}
		};
}]);


app.factory('Location', ['$http', function($http) {
	var base = "https://api.instagram.com/v1";
	// get your own client id http://instagram.com/developer/
	var clientId = '53b03b9f9ca24bfdb622fd49cd57f1b2';
	return {
		location: function(lat, lng) {
			var request = "/media/search?lat=" + lat + "&lng=" + lng + "&distance=5000";
			var url = base + request;
			var config = {
				'params': {
					'client_id': clientId,
					'callback': 'JSON_CALLBACK'
				}
			};
			return $http.jsonp(url, config);
		}
	};
}]);