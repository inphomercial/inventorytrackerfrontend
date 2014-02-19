
companyApp.controller('companiesController', function ($scope, CompanyService) 
{	
	// Get all companies on load
	var request = CompanyService.getCompanies();
	request.then(function(res) {		
		$scope.companies = CompanyService.companies;
	})
	
	$scope.selected_company = {};

	$scope.editCompany = function(id)
	{	
		var request = CompanyService.getCompanyById(id);		
		request.then(function(res) {			
			$scope.selected_company = res.data;
		})
	};

	$scope.deleteCompany = function(id)
	{
		CompanyService.deleteCompany(id);
	};

	$scope.updateCompany = function()
	{
		CompanyService.updateCompany($scope.selected_company);
		$scope.selected_company = {};
	};

	// Cancels the update location and clears out the $scope.selected_location box.
	$scope.clearCompany = function()
	{
		$scope.selected_company = {};
	}
});

companyApp.controller('newCompanyController', function ($scope, CompanyService)
{
	$scope.newCompany = function()
	{		
		var newCompany = {
			"name": $scope.new_company_name,
			"enabled" : $scope.new_company_enabled
		};

		CompanyService.newCompany(newCompany);
		$scope.new_company_name = "";
		$scope.new_company_enabled = "";
	};

});