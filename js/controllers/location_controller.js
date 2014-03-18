
inventoryApp.controller('locationsController', function ($scope, LocationService)
{
    // Get all locations on load
    var request = LocationService.getLocations();
    request.then(function(res) {
        $scope.locations = LocationService.locations;
    });

    $scope.newLocation = function()
    {
        var newLocation = {
            "name": $scope.new_location_name,
            "address": $scope.new_location_address,
            "state": $scope.new_location_state,
            "city": $scope.new_location_city,
            "zip": $scope.new_location_zip,
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
        $scope.new_location_zip = '';
        $scope.new_location_state = '';
        $scope.new_location_city = '';
    };
});