
inventoryApp.controller('ingredientsController', function ($scope, IngredientService) 
{	
	// Get all companies on load
	var request = IngredientService.getIngredients();
	request.then(function(res) {		
		$scope.ingredients = IngredientService.ingredients;
	})
	
	$scope.newIngredient = function()
	{		
		var newIngredient = {
			"name": $scope.new_ingredient_name,
			"unit": $scope.new_ingredient_unit,
			"enabled" : $scope.new_ingredient_enabled
		};

		IngredientService.newIngredient(newIngredient);
		$scope.new_ingredient_name = "";
		$scope.new_ingredient_unit = "";
		$scope.new_ingredient_enabled = "";
	};
});