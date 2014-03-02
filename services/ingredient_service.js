inventoryApp.factory('IngredientService', function ($http) 
{	
	var IngredientService = {

		ingredients: [],

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

		removeIngredientFromMeal: function(meal_id, ingredient_id)
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/meals/" + meal_id + "/ingredients/" + ingredient_id + "?key=loc2";

			return $http.delete(url)
				.success(function (response) {
					return true;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});				
		},

		addIngredientToMeal: function(meal_id, ingredient_id, amount)
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/meals/" + meal_id + "/ingredients?key=loc2";
			
			var data = {
				'meal_id': meal_id,
				'ingredient_id': ingredient_id,
				'amount': amount 
			};

			return $http.put(url, data)
				.success(function (response) {			
					return true;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		},

		getIngredients: function() 
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/ingredients?key=loc2";

			return $http.get(url)
				.success(function (response) {
					// it worked
					for(var i=0; i < response.length; i++)
					{
						IngredientService.ingredients.push(response[i]);
					}

					return IngredientService.ingredients;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		},

		
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
							IngredientService.ingredients[i]['unit'] = selected_ingredient.unit;
							IngredientService.ingredients[i]['enabled'] = selected_ingredient.enabled;
						}										
					}							

					return IngredientService;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		}
	};

	return IngredientService;
});