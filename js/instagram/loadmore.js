'use strict';

app.controller('LoadMoreCtrl', function($scope, $rootScope, LoadMore) {

	$scope.getLoadMore = function (){

		console.log("$rootScope.paginationURL", $rootScope.paginationURL);
		if ($rootScope.paginationURL){
			$rootScope.notify = true;
			LoadMore.more($rootScope.paginationURL)
				.success(function(response, status, headers, config) {

					if(response.meta.code !== 200){
						$rootScope.currentHash.error = response.meta.error_type + ' | ' + response.meta.error_message;
						return;
					}
					if(response.data.length > 0){


						console.log("LoadMore", response);

						for (var i=0; i<response.data.length; i++){
							$rootScope.currentHash.items.push(response.data[i]);
						}

						console.log("$rootScope.currentHash.items: ", $rootScope.currentHash.items );

						$rootScope.paginationURL = response.pagination.next_url;
						$rootScope.notify = false;
					}else{
						$rootScope.currentHash.error = "This hashtag has returned no results";
						$rootScope.notify = false;
					}
				});
		}
	}

});