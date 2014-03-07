
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
			"name": $scope.new_ingredient.name,
			"unit": $scope.new_ingredient.unit,
			"enabled" : $scope.new_ingredient.enabled
		};

		IngredientService.newIngredient(newIngredient);
		$scope.new_ingredient.name = "";
		$scope.new_ingredient.unit = "";
		$scope.new_ingredient.enabled = "";
	};
});