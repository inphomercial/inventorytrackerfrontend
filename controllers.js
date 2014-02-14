
inventoryApp.controller('getCompanies', function ($scope, $http, AdminService) 
{	
	var req = AdminService.getCompanies();

	req.then(function(res) {
		$scope.companies = AdminService.companies;		
	});

	$scope.showCompanyDiv = true;
	$scope.orderBy = 'id';

	$scope.toggleCompanies = function()
	{
		$scope.showCompanyDiv = !$scope.showCompanyDiv;		
	};

	$scope.deleteCompany = function(id)
	{		
		var req = AdminService.deleteCompany(id);

		req.then(function(res) {
			$scope.companies = AdminService.companies;			
		});	
	};	
});

inventoryApp.controller('createCompany', function ($scope, $http, AdminService)
{
	$scope.createCompany = function()
	{
		var req = AdminService.createCompany($scope.name, $scope.enabled);

		req.then(function(res) {
			$scope.companies = AdminService.companies;			
		});	
	};
});