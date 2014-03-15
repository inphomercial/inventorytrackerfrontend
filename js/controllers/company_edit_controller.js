
inventoryApp.controller('companyEditController', function ($scope, $routeParams, $location, CompanyService) 
{	
	$scope.id = $routeParams.company_id;
	$scope.selected_company = {};

	$scope.getCompanyById = function(id)
	{
		// Load the specific company into the selected_company scope
		var request = CompanyService.getCompanyById(id);
		request.then(function(res) {		
			$scope.selected_company = res.data;
		})
	}

	$scope.getCompanyById($scope.id);

	// Used to update the company data
	$scope.updateCompany = function()
	{
		CompanyService.updateCompany($scope.selected_company);
		$location.path('/companies');
	};

	$scope.deleteCompany = function(id)
	{
		CompanyService.deleteCompany(id);
		$location.path("/companies");
	};
});