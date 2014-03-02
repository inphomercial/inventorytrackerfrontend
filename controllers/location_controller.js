
inventoryApp.controller('locationsController', function ($scope, LocationService) 
{		
	// Get all locations on load
	var request = LocationService.getLocations();
	request.then(function(res) {		
		$scope.locations = LocationService.locations;
	})
	
	// Used for storing the currently selected location to edit
	$scope.selected_location = {};

	// The selector in the table list of which location to edit
	$scope.editLocation = function(id)
	{			
		var request = LocationService.getLocationById(id);				
		request.then(function(res) {			
			$scope.selected_location = res.data;
			console.log($scope.selected_location);
		})

	};

	$scope.deleteLocation = function(id)
	{		
		LocationService.deleteLocation(id);
	};

	// Save button clicked, actually makes the PUT request to update the db
	$scope.updateLocation = function()
	{
		LocationService.updateLocation($scope.selected_location);
		$scope.selected_location = {};
	};

	// Cancels the update location and clears out the $scope.selected_location box.
	$scope.clearLocation = function()
	{
		$scope.selected_location = {};
	}
});

inventoryApp.controller('newLocationController', function ($scope, LocationService)
{
	$scope.newLocation = function()
	{				
		var newLocation = {
			"name": $scope.new_location_name,
			"address": $scope.new_location_address,
			"phone": $scope.new_location_phone,
			"enabled" : $scope.new_location_enabled,
			"company_id": $scope.new_location_company_id
		};

		LocationService.newLocation(newLocation);
		$scope.new_location_name = "";
		$scope.new_location_address = "";
		$scope.new_location_phone = "";
		$scope.new_location_enabled = "";
		$scope.new_location_company_id = "";
	};

});