
inventoryApp.controller('ingredientsController', function ($scope, IngredientService) 
{	
	// Get all companies on load
	var request = IngredientService.getIngredients();
	request.then(function(res) {		
		$scope.ingredients = IngredientService.ingredients;
	})
	
	//$scope.selecte_dingredient = {};

	/*$scope.editIngredient = function(id)
	{	
		var request = IngredientService.getIngredientById(id);		
		request.then(function(res) {			
			$scope.selected_ingredient = res.data;
		})

	};*/

	/*$scope.deleteIngredient = function(id)
	{
		IngredientService.deleteIngredient(id);
	};

	
	$scope.updateIngredient = function()
	{
		IngredientService.updateIngredient($scope.selected_ingredient);
		$scope.selected_ingredient = {};
	};*/
	
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