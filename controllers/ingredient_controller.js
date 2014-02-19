
ingredientsApp.controller('ingredientsController', function ($scope, IngredientService) 
{	
	// Get all companies on load
	var request = IngredientService.getIngredients();
	request.then(function(res) {		
		$scope.ingredients = IngredientService.ingredients;
	})
	
	$scope.selected_ingredient = {};

	$scope.editIngredient = function(id)
	{	
		var request = IngredientService.getIngredientById(id);		
		request.then(function(res) {			
			$scope.selected_ingredient = res.data;
		})

	};

	$scope.deleteIngredient = function(id)
	{
		IngredientService.deleteIngredient(id);
	};

	
	$scope.updateIngredient = function()
	{
		IngredientService.updateIngredient($scope.selected_ingredient);
		$scope.selected_ingredient = {};
	};

	// Cancels the update location and clears out the $scope.selected_location box.
	$scope.clearIngredient = function()
	{
		$scope.selected_ingredient = {};
	}
});

ingredientsApp.controller('newIngredientController', function ($scope, IngredientService)
{
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