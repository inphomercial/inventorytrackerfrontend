inventoryApp.controller('companiesController', function ($scope, CompanyService) {
    var request = CompanyService.getCompanies();
    request.then(function(res) {
        $scope.companies = CompanyService.companies;
    })

    $scope.newCompany = function() {
        var newCompany = {
            'name': $scope.new_company_name,
            'enabled' : $scope.new_company_enabled
        };

        CompanyService.newCompany(newCompany);
        $scope.new_company_name = '';
        $scope.new_company_enabled = '';
    };
});