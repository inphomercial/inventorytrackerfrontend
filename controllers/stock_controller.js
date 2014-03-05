
inventoryApp.controller('stocksController', function ($scope, StockService) 
{	
	$scope.stocks = {};

	// Get inventory on load
	var request = StockService.getIngredients()
	request.then(function(res) {		
		$scope.stocks = StockService.stocks;
	})	
});
