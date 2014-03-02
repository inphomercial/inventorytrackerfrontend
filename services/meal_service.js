inventoryApp.factory('MealService', function ($http) 
{	
	var MealService = {

		meals: [], 
		//available_ingredients: [],
		//current_ingredients: [],
		
		getMealById: function(id)
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/meals/" + id + "/ingredients?key=loc2";

			return $http.get(url)
				.success(function (response) {		
					return response;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});				
		},

		getMeals: function() 
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/meals?key=loc2";
			
			return $http.get(url)
				.success(function (response) {
					// it worked
					for(var i=0; i < response.length; i++)
					{
						MealService.meals.push(response[i]);
					}

					return MealService.meals;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		},
	
		deleteMeal: function(id) 
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/meals/" + id + "?key=loc2";

			return $http.delete(url)
				.success(function (response) {
					// it worked						
					for(var i=0; i < MealService.meals.length; i++)
					{					
						if(MealService.meals[i].id == id)
						{												
							MealService.meals.splice(i, 1);
						}										
					}							

					return MealService;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		},
		
		// Create a new ingredient based on $key for location_id
		newMeal: function(newMeal) {
			
			var postUrl = "http://localhost/inventorytracker/public/index.php/location/meals?key=loc2";

			return $http({method: 'POST', url: postUrl, data: newMeal })
				.success(function( data, status, headers, config ) 
				{												
					MealService.meals.push(newMeal);
				})
				.error(function( data, status, headers, config) {
					alert("Error" + status);
				});
		},
		
		updateMeal: function(selected_meal) {

			var url = "http://localhost/inventorytracker/public/index.php/location/meals/" + selected_meal.id + "?key=loc2";		

			return $http.put(url, selected_meal)
				.success(function (response) {
					
					// it worked						
					for(var i=0; i < MealService.meals.length; i++)
					{					
						if(MealService.meals[i].id == selected_meal.id)
						{												
							MealService.meals[i]['name'] = selected_meal.name;						
							MealService.meals[i]['enabled'] = selected_meal.enabled;
						}										
					}							

					return MealService;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		}

		/*	addIngredientToCurrent: function (name, ingredient)
		{			
			for(var i=0; i < MealService.available_ingredients.ingredients.length; i++)
			{						
				if(MealService.available_ingredients.ingredients[i].name == name)
				{
					MealService.available_ingredients.ingredients.splice(i, 1);
				}							
			}		

			MealService.current_ingredients.ingredients.push(ingredient);									
		},

		addIngredientToAvailable: function (name, ingredient)
		{			
			for(var i=0; i < MealService.current_ingredients.ingredients.length; i++)
			{				
				if(MealService.current_ingredients.ingredients[i].name == name)
				{
					MealService.current_ingredients.ingredients.splice(i, 1);
				}							
			}				

			MealService.available_ingredients.ingredients.push(ingredient);																
		},*/

		/*// Working
		getMealById: function(id)
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/meals/" + id + "?key=loc2";

			return $http.get(url)
				.success(function (response) {		
					return response;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});				
		},*/
	};

	return MealService;
});