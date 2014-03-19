inventoryApp.controller('locationEditController', function ($scope, $routeParams, $location, LocationService) {
    $scope.id = $routeParams.location_id;
    $scope.location = {};

    $scope.getLocationById = function(id) {
        var request = LocationService.getLocationById($scope.id);
        request.then(function(res) {
            $scope.location = res.data;
        });
    };

    $scope.getLocationById($scope.id);

    $scope.deleteLocation = function(id) {
        LocationService.deleteLocation(id);
        $location.path('/locations');
    };

    $scope.updateLocation = function() {
        LocationService.updateLocation($scope.location);
        $location.path('/locations');
    };
});