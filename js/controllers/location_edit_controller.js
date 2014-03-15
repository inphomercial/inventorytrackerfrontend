
inventoryApp.controller('locationEditController', function ($scope, $routeParams, $location, LocationService) 
{	
	$scope.id = $routeParams.location_id;
	$scope.selected_location = {};	

	$scope.getLocationById = function(id)
	{
		// Get all locations on load
		var request = LocationService.getLocationById($scope.id);
		request.then(function(res) {		
			$scope.selected_location = res.data;
		})
	}

	$scope.getLocationById($scope.id);

	$scope.deleteLocation = function(id)
	{		
		LocationService.deleteLocation(id);
		$location.path("/locations");
	};

	// Save button clicked, actually makes the PUT request to update the db
	$scope.updateLocation = function()
	{
		LocationService.updateLocation($scope.selected_location);
		$location.path("/locations");
	};
});