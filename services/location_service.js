inventoryApp.factory('LocationService', function ($http) 
{	
	var LocationService = {

		locations: [],

		getLocationById: function(id)
		{
			var url = "http://localhost/inventorytracker/public/index.php/admin/locations/" + id + "?key=admin";
			
			return $http.get(url)
				.success(function (response) {
					return response;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});				
		},

		getLocations: function() 
		{
			var url = "http://localhost/inventorytracker/public/index.php/admin/locations?key=admin";

			return $http.get(url)
				.success(function (response) {
					// it worked
					for(var i=0; i < response.length; i++)
					{
						LocationService.locations.push(response[i]);
					}

					return LocationService.locations;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		},

		deleteLocation: function(id) 
		{
			var url = "http://localhost/inventorytracker/public/index.php/admin/locations/" + id + "?key=admin";

			return $http.delete(url)
				.success(function (response) {
					// it worked						
					for(var i=0; i < LocationService.locations.length; i++)
					{					
						if(LocationService.locations[i].id == id)
						{												
							LocationService.locations.splice(i, 1);
						}										
					}							

					return LocationService;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		},

		newLocation: function(newLocation) {
			
			var postUrl = "http://localhost/inventorytracker/public/index.php/admin/locations/" + newLocation.company_id + "?key=admin";			

			return $http({method: 'POST', url: postUrl, data: newLocation })
				.success(function( data, status, headers, config ) 
				{												
					LocationService.locations.push(newLocation);
				})
				.error(function( data, status, headers, config) {
					alert("Error" + status);
				});
		},
		
		updateLocation: function(selected_location) {

			var url = "http://localhost/inventorytracker/public/index.php/admin/locations/" + selected_location.id + "?key=admin";
			
			return $http.put(url, selected_location)
				.success(function (response) {					
					// it worked						
					for(var i=0; i < LocationService.locations.length; i++)
					{					
						if(LocationService.locations[i].id == selected_location.id)
						{												
							LocationService.locations[i]['name'] = selected_location.name;
							LocationService.locations[i]['address'] = selected_location.address;
							LocationService.locations[i]['phone'] = selected_location.phone;
							LocationService.locations[i]['enabled'] = selected_location.enabled;
							LocationService.locations[i]['company_id'] = selected_location.company_id;
						}										
					}							

					return LocationService;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		}
	};

	return LocationService;
});