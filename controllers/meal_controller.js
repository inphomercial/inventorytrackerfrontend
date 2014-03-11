
inventoryApp.controller('mealsController', function ($scope, MealService, IngredientService) 
{	
	$scope.meals = {};

	// Get all meals on load
	var request = MealService.getMeals();
	request.then(function(res) {		
		$scope.meals = MealService.meals;

		// Temporary fix to check if check boxes work. change api to set true/false instead of 1/0
		for(var i=0; i<$scope.meals.length;i++)
		{
			if($scope.meals[i].enabled == 1)
			{
				$scope.meals[i].enabled = "true";	
			}
			else
			{
				$scope.meals[i].enabled = "false";
			}
 		}
	});

	$scope.updateEnabled = function(meal)
	{
		console.log(meal.enabled);

		if(meal.enabled == 1)
		{
			meal.enabled = 0;
		}
		else if(meal.enabled == 0)
		{
			meal.enabled = 1;
		}

		console.log("updating enabled " + meal.enabled);
	}

	$scope.newMeal = function()
	{		
		var newMeal = {
			"name": $scope.new_meal_name,			
			"enabled" : $scope.new_meal_enabled
		};

		MealService.newMeal(newMeal);
		$scope.new_meal_name = "";		
		$scope.new_meal_enabled = "";
	}
});
