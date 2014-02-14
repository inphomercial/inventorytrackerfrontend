inventoryApp.factory('AdminService', function($http) 
{	
	var Admin = {};
	Admin.companies = [];	

	Admin.getCompanyDivState = function()
	{
		return Admin.showCompanyDiv;
	}

	Admin.createCompany = function(name, enabled)
	{
		var postUrl = "http://localhost/inventorytracker/public/index.php/admin?key=admin";

		var Company = {};
		Company.name = name;
		Company.enabled = enabled;

		return $http({method: 'POST', url: postUrl, data: Company })
			.success(function( data, status, headers, config ) {				
				// Somehow need to put id into Company..
				Admin.companies.push(Company);
			})
			.error(function( data, status, headers, config) {
				alert("Error" + status);
			});
	}

	Admin.deleteCompany = function(id) 
	{		
		var url = "http://localhost/inventorytracker/public/index.php/admin/" + id + "?key=admin";

		return $http.delete(url)
			.success(function (response) {
				// it worked						
				for(var i=0; i < Admin.companies.length; i++)
				{					
					if(Admin.companies[i].id == id)
					{												
						Admin.companies.splice(i, 1);
					}										
				}							

				return Admin;
			})
			.error(function (data, status) {
				alert("Error" + status);
			});			
	}

	Admin.getCompanies = function()
	{
		var url = "http://localhost/inventorytracker/public/index.php/admin?key=admin";

		return $http.get(url)
			.success(function (response) {
				// it worked
				for(var i=0; i < response.length; i++)
				{
					Admin.companies.push(response[i]);
				}

				return Admin;
			})
			.error(function (data, status) {
				alert("Error" + status);
			});			
	}
	
	return Admin;
})