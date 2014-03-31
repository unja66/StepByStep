var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
	  $scope.person = { name: "Ari Lerner" };
	    var updateClock = function() {
			    $scope.clock = new Date();
				  };
				    var timer = setInterval(function() {
						    $scope.$apply(updateClock);
							  }, 1000);
					  updateClock();
});


app.controller('PlayerController', function($scope) {
});

app.controller('RelatedController', function($scope){
});

