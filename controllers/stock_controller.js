
inventoryApp.controller('stocksApp', function ($scope, InventoryService) 
{	
	// Get inventory on load
	var request = InventoryService.getInventories();
	request.then(function(res) {		
		$scope.inventories = InventoryService.inventories;
	})	
});
