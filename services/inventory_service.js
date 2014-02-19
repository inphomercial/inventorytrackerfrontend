inventoryApp.factory('InventoryService', function($http) 
{	
	var InventoryService = {

		inventories: [],
/*
		getIngredientById: function(id)
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/ingredients/" + id + "?key=loc2";

			return $http.get(url)
				.success(function (response) {		
					return response;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});				
		},
*/
		getInventories: function() 
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/inventory?key=loc2";

			return $http.get(url)
				.success(function (response) {
					// it worked
					for(var i=0; i < response.length; i++)
					{
						InventoryService.inventories.push(response[i]);
					}

					return InventoryService.inventories;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		}
/*
		
		deleteIngredient: function(id) 
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/ingredients/" + id + "?key=loc2";

			return $http.delete(url)
				.success(function (response) {
					// it worked						
					for(var i=0; i < IngredientService.ingredients.length; i++)
					{					
						if(IngredientService.ingredients[i].id == id)
						{												
							IngredientService.ingredients.splice(i, 1);
						}										
					}							

					return IngredientService;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		},
	
		// Create a new ingredient based on $key for location_id
		newIngredient: function(newIngredient) {
			
			var postUrl = "http://localhost/inventorytracker/public/index.php/location/ingredients?key=loc2";

			return $http({method: 'POST', url: postUrl, data: newIngredient })
				.success(function( data, status, headers, config ) 
				{												
					IngredientService.ingredients.push(newIngredient);
				})
				.error(function( data, status, headers, config) {
					alert("Error" + status);
				});

		},
		
		updateIngredient: function(selected_ingredient) {

			var url = "http://localhost/inventorytracker/public/index.php/location/ingredients/" + selected_ingredient.id + "?key=loc2";		

			return $http.put(url, selected_ingredient)
				.success(function (response) {
					
					// it worked						
					for(var i=0; i < IngredientService.ingredients.length; i++)
					{					
						if(IngredientService.ingredients[i].id == selected_ingredient.id)
						{												
							IngredientService.ingredients[i]['name'] = selected_ingredient.name;
							IngredientService.ingredients[i]['measurement'] = selected_ingredient.measurement;
							IngredientService.ingredients[i]['enabled'] = selected_ingredient.enabled;
						}										
					}							

					return IngredientService;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		}*/
	};

	return InventoryService;
});