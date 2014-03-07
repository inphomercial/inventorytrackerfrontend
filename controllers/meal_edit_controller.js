
inventoryApp.controller('mealEditController', function ($scope, $routeParams, $location, MealService, IngredientService) 
{	
	$scope.id = $routeParams.meal_id;
	$scope.selected_meal = {};

	// Get all availble ingredients on load
	var request = IngredientService.getIngredients();
	request.then(function(res) {		
		$scope.available_ingredients = IngredientService.ingredients;

		for(var i=0;i<$scope.available_ingredients.length;i++)
		{
			$scope.available_ingredients[i].modified = false;
		}
	});

	$scope.getMealById = function (id)
	{
		var request = MealService.getMealById(id);		
		request.then(function(res) {
			$scope.selected_meal = res.data;
		})
	}

	$scope.getMealById($scope.id);

	$scope.addIngredientToMeal = function (meal_id, ingredient_id)
	{						
		// updated meal_ingredients with a new row
		IngredientService.addIngredientToMeal(meal_id, ingredient_id, 0);

		// Update the local scope by adding the ingredient to the select_meal.ingredients
		ingredient = IngredientService.getIngredientById(ingredient_id);
		$scope.selected_meal.ingredients.push(ingredient);
		
		// Used to reget all of the meal ingredients to update current ingredients list
		$scope.editMeal(meal_id);		
	}

	$scope.removeIngredientFromMeal = function (meal_id, ingredient_id)
	{				
		// removes ingredient from meal
		IngredientService.removeIngredientFromMeal(meal_id, ingredient_id);

		for(var i=0; i < $scope.selected_meal.ingredients.length; i++)
		{					
			if($scope.selected_meal.ingredients[i].ingredient_id == ingredient_id)
			{												
				$scope.selected_meal.ingredients.splice(i, 1);
			}										
		}		
	}

	$scope.updateIngredientAmount = function (meal_id, ingredient_id, amount, $index)
	{				
		// updated meal_ingredients meal amount
		IngredientService.addIngredientToMeal(meal_id, ingredient_id, amount);

		// Used to have a visual of rows that have been changed		
		if(!$scope.selected_meal.ingredients[$index].modified)
		{
			$scope.selected_meal.ingredients[$index].modified = true;
		}		
	}

	// Grabs the specific meal from the db by id and saves it to select_meal
	$scope.editMeal = function(id)
	{	
		var request = MealService.getMealById(id);		
		request.then(function(res) {
			console.log(res.data);
			$scope.selected_meal = res.data;
		})

	};

	$scope.deleteMeal = function(id)
	{
		MealService.deleteMeal(id);
		$location.path("/userMeals");
	};

	// Writes the new updates to the database
	$scope.updateMeal = function()
	{
		MealService.updateMeal($scope.selected_meal);
		$location.path('/userMeals');
	};

	// Cancels the update location and clears out the $scope.selected_location box.
	$scope.clearMeal = function()
	{
		$scope.selected_meal = {};
	}
});