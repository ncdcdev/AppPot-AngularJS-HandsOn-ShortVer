angular.module("app")
.controller("LoginController",
    ["$scope", "$location", "AppPot", function($scope, $location, AppPot) {

	this.userName = "Trainer1";
	this.password = "Trainer1";

	this.login = function() {
		AppPot.LocalAuthenticator.login(this.userName, this.password)
		.then(() => {
            $location.path("/");
			$scope.$apply();
		})
		.catch(error => {
    		if (error.code && error.code == "111") {
    			this.alert = {msg: error.description};
				$scope.$apply();
    		}
    		else {
    			notifyError(error);
    		}
    	});
	};

}]);