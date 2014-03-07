
inventoryApp.controller('stocksController', function ($scope, StockService, IngredientService) 
{	
	$scope.stocks = {};

	// Get inventory on load
	var request = StockService.getStock()
	request.then(function(res) {		
		$scope.stocks = StockService.stocks;
	}),

	$scope.updateStock = function(stock, actual_stock_amount)
	{
		console.log(stock, actual_stock_amount);
		StockService.updateStock(stock, actual_stock_amount);

		// Need to update the stocks array with the new stock amount
		// Update the local scope by adding the ingredient to the select_meal.ingredients
		/*ingredient = IngredientService.getIngredientById(stock.id);
		$scope.stocks.push(ingredient);*/
	}
});
