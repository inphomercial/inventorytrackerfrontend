
inventoryApp.controller('stocksController', function ($scope, MealService, StockService, IngredientService) 
{	
	$scope.stocks = {};
	$scope.meal = {};

	// Get inventory on load
	var request = StockService.getStock()
	request.then(function(res) {		
		$scope.stocks = StockService.stocks;

		for(var i=0;i<$scope.stocks.length;i++)
		{
			$scope.stocks[i].modified = false;
			$scope.stocks[i].wasted = 0;
			$scope.stocks[i].sold = 0;
		}
	})

	$scope.getMealById = function (id)
	{
		var request = MealService.getMealById(id);		
		request.then(function(res) {
			$scope.meal = res.data;
		})
	},

	$scope.incrementSold = function($index)
	{
		$scope.stocks[$index].modified = true;
		$scope.stocks[$index].sold++;
		
		var request = MealService.getMealById($scope.stocks[$index].id);
		request.then(function(res) {					
			 var meal = res.data;
			 StockService.sellMeal(meal);
		})			
	},
	
	$scope.incrementWaste = function($index)
	{	
		$scope.stocks[$index].modified = true;
		$scope.stocks[$index].wasted++;

		var request = MealService.getMealById($scope.stocks[$index].id);
		request.then(function(res) {					
			 var meal = res.data;
			 StockService.sellMeal(meal);
		})			
	},

	$scope.undo = function($index)
	{
		var wasted = $scope.stocks[$index].wasted;
		var sold = $scope.stocks[$index].sold;

		console.log(wasted);

		// get meal by id.

		// get ingredients for meal

		// update ingredients - stock amount by meal->amount for the single meal but for each ingredient.
	}

	/*console.log($scope.actualStock);

	$scope.updateStock = function(stock, $index)
	{
		// Updates the actual ingredient stock & creates a reconcile row
		StockService.updateStock(stock, stock.actualStock);

		// If stock hasnt veen reconciled, set to true and never change back so
		// The user can do it more than once if they need in the same session.
		if(!$scope.stocks[$index].reconciled)
		{
			$scope.stocks[$index].reconciled = true;
		}
		
		// Clear actualStock form field after submit to clear the button
		$scope.stocks[$index].actualStock = null;
	}*/
});
