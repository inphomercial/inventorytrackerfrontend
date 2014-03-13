
inventoryApp.controller('ingredientEditController', function ($scope, $routeParams, $location, IngredientService) 
{	
	$scope.id = $routeParams.ingredient_id;
	$scope.selected_ingredient = {};

	$scope.getIngredientById = function(id)
	{
		var request = IngredientService.getIngredientById(id);		
		request.then(function(res) {			
			$scope.selected_ingredient = res.data;
		})
	}

	$scope.getIngredientById($scope.id);

	$scope.deleteIngredient = function(id)
	{
		IngredientService.deleteIngredient(id);
		$location.path('/ingredients');
	};

	
	$scope.updateIngredient = function()
	{
		IngredientService.updateIngredient($scope.selected_ingredient);
		$location.path('/ingredients');
	};
});