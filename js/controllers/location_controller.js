inventoryApp.controller('locationsController', function ($scope, LocationService) {
    // Get all locations on load
    var request = LocationService.getLocations();
    request.then(function(res) {
        $scope.locations = LocationService.locations;
    });

    $scope.newLocation = function() {
        var newLocation = {
            'name': $scope.new_location.name,
            'address': $scope.new_location.address,
            'state': $scope.new_location.state,
            'city': $scope.new_location.city,
            'zip': $scope.new_location.zip,
            'phone': $scope.new_location.phone,
            'enabled' : $scope.new_location.enabled,
            'company_id': $scope.new_location.company_id
        };

        LocationService.newLocation(newLocation);
        $scope.new_location = {};
    };
});
