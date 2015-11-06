angular.module('giphy').controller('giphyCtrl', function($scope, giphyGotServed) {

	$scope.test = "Hello world!"

	$scope.postBiz = function() {
	    giphyGotServed.postBiz($scope.biz);
	    $scope.biz = '';
	}
	
	$scope.getBiz = function() {
	    giphyGotServed.getBiz().then(function(res) {
	      $scope.biznesses = res.data.results;
	      console.log($scope.biznesses);
	   });
	};
});

