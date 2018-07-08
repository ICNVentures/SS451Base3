four51.app.controller('helpInfoCtrl', ['$routeParams', '$scope', 'User', '$route', function ($routeParams, $scope, User, $route) {

    var hf = '';

    angular.forEach(user.CustomFields, function(f) 
    {
	    if (f.Name == "SSBHelpFile")
        {
		    hf = f.Value;
		}
    });

    $scope.helpdetails = hf;
}]);