
inventoryApp.controller('mealsController', function ($scope, MealService, IngredientService) 
{	
	// Get all meals on load
	var request = MealService.getMeals();
	request.then(function(res) {		
		$scope.meals = MealService.meals;
	});

	// Get all availble ingredients on load
	var request = IngredientService.getIngredients();
	request.then(function(res) {		
		$scope.available_ingredients = IngredientService.ingredients;
	});
	
	// Holds the selected meal in the edit window
	$scope.selected_meal = {};
	//$scope.amount = 0;

	$scope.pushToCurrentIngredients = function (meal_id, ingredient_id, amount)
	{		
		//console.log($scope.amount);
		console.log(meal_id + " " + ingredient_id + " " + amount);

		// updated meal_ingredients with a new row
		IngredientService.addIngredientToMeal(meal_id, ingredient_id, amount);

		// Update the local scope by adding the ingredient to the select_meal.ingredients
		ingredient = IngredientService.getIngredientById(ingredient_id);
		$scope.selected_meal.ingredients.push(ingredient);

		// Used to reget all of the meal ingredients to update current ingredients list
		$scope.editMeal(meal_id);
	}

	$scope.pushToAvailableIngredients = function (meal_id, ingredient_id)
	{		
		console.log(meal_id + " " + ingredient_id);

		/*Ingredient: {
			id: 1,
			name: 'Rice'
		}

		incredient = Ingredient.get(1);
		meal.incredient[ ingredient.id ] = ingredient

		if (ingredient.id in meal.incredients)
			delete meal.incredient[ ingredient.id ]

		meal.incredients = {
			1: <Ingredient rice>,
			2: <Ingredient meat>,
			3: <Ingredient potatoes>,
		};

		// add
		mea.incredients[ 4 ] = <incredient milk>;

		// remove
		delete meal.incredients[ 1 ];*/

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

	$scope.updateIngredientAmount = function (meal_id, ingredient_id, amount)
	{
		console.log(meal_id + " " + ingredient_id + " " + amount);
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

inventoryApp.controller('newMealController', function ($scope, MealService)
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
