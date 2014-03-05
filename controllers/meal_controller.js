
inventoryApp.controller('mealsController', function ($scope, MealService, IngredientService) 
{	
	$scope.meals = {};

	// Get all meals on load
	var request = MealService.getMeals();
	request.then(function(res) {		
		$scope.meals = MealService.meals;
	});

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
