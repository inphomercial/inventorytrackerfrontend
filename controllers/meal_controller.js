
mealApp.controller('mealsController', function ($scope, MealService) 
{	
	// Get all companies on load
	var request = MealService.getMeals();
	request.then(function(res) {		
		$scope.meals = MealService.meals;
	})
	
	$scope.selected_meal = {};

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
	};

	// Writes the new updates to the database
	$scope.updateMeal = function()
	{
		MealService.updateMeal($scope.selected_meal);
		$scope.selected_meal = {};
	};

	// Cancels the update location and clears out the $scope.selected_location box.
	$scope.clearMeal = function()
	{
		$scope.selected_meal = {};
	}
});

mealApp.controller('mealIngredientController', function ($scope, MealService)
{	
	$scope.available_ingredients = MealService.available_ingredients;
	$scope.current_ingredients = MealService.current_ingredients;
	
	$scope.pushToCurrentIngredients = function (name, ingredient)
	{		
		MealService.addIngredientToCurrent(name, ingredient);
	}

	$scope.pushToAvailableIngredients = function (name, ingredient)
	{		
		MealService.addIngredientToAvailable(name, ingredient);
	}

	/*// Get all companies on load
	var request = IngredientService.getIngredients();
	request.then(function(res) {		
		$scope.available_ingredients = IngredientService.ingredients;
	})*/

});

mealApp.controller('newMealController', function ($scope, MealService)
{
	$scope.newMeal = function()
	{		
		var newMeal = {
			"name": $scope.new_meal_name,			
			"enabled" : $scope.new_meal_enabled
		};

		MealService.newMeal(newMeal);
		$scope.new_meal_name = "";		
		$scope.new_meal_enabled = "";
	};
});
