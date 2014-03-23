inventoryApp.controller('companyEditController', function ($scope, $routeParams, $location, CompanyService) {
    var company_id = $routeParams.company_id;
    $scope.company = {};

    // onload get the company data and bind it to the scope
    var request = CompanyService.getCompanyById(company_id);
    request.then(function(res) {
        $scope.company = res.data;
    })

    $scope.updateCompany = function(id) {
        CompanyService.updateCompany($scope.company);
        $location.path('/companies');
    };

    $scope.deleteCompany = function(id) {
        CompanyService.deleteCompany(id);
        $location.path('/companies');
    };
});