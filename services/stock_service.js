inventoryApp.factory('StockService', function ($http) 
{	
	var StockService = {

		stocks: [],

		getStock: function() 
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/ingredients?key=loc2";

			return $http.get(url)
				.success(function (response) {
					// it worked
					StockService.stocks = [];
					for(var i=0; i < response.length; i++)
					{
						StockService.stocks.push(response[i]);
					}

					return StockService.stocks;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});
		},

		updateStock: function(stock, new_stock_amount)
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/ingredients/" + stock.id + "?key=loc2";	

			var selected_stock = {
				"ingredient_id": stock.id,			
				"stock": new_stock_amount
				/*"estimated_stock": stock.stock*/
			};

			var reconcile_row = {
				"location_id": 2,
				"ingredient_id": stock.id,
				"estimated_stock": stock.stock,
				"actual_stock": new_stock_amount
			};

			// Call create reconcile row and pass reconcile_row object

			return $http.put(url, selected_stock)
				.success(function (response) {
					console.log(response, url);
					// it worked						
					for(var i=0; i < StockService.stocks.length; i++)
					{					
						if(StockService.stocks[i].id == stock.id)
						{												
							StockService.stocks[i]['stock'] = selected_stock.new_stock_amount;
						}										
					}							

					return StockService.stocks;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		}



		/*
		getIngredientById: function(id)
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/ingredients/" + id + "?key=loc2";

			return $http.get(url)
				.success(function (response) {		
					return response;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});				
		},
*/
		/*getInventories: function() 
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/inventory?key=loc2";

			return $http.get(url)
				.success(function (response) {
					// it worked
					for(var i=0; i < response.length; i++)
					{
						InventoryService.inventories.push(response[i]);
					}

					return InventoryService.inventories;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		}*/
/*
		
		deleteIngredient: function(id) 
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/ingredients/" + id + "?key=loc2";

			return $http.delete(url)
				.success(function (response) {
					// it worked						
					for(var i=0; i < IngredientService.ingredients.length; i++)
					{					
						if(IngredientService.ingredients[i].id == id)
						{												
							IngredientService.ingredients.splice(i, 1);
						}										
					}							

					return IngredientService;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		},
	
		// Create a new ingredient based on $key for location_id
		newIngredient: function(newIngredient) {
			
			var postUrl = "http://localhost/inventorytracker/public/index.php/location/ingredients?key=loc2";

			return $http({method: 'POST', url: postUrl, data: newIngredient })
				.success(function( data, status, headers, config ) 
				{												
					IngredientService.ingredients.push(newIngredient);
				})
				.error(function( data, status, headers, config) {
					alert("Error" + status);
				});

		},
		
		updateIngredient: function(selected_ingredient) {

			var url = "http://localhost/inventorytracker/public/index.php/location/ingredients/" + selected_ingredient.id + "?key=loc2";		

			return $http.put(url, selected_ingredient)
				.success(function (response) {
					
					// it worked						
					for(var i=0; i < IngredientService.ingredients.length; i++)
					{					
						if(IngredientService.ingredients[i].id == selected_ingredient.id)
						{												
							IngredientService.ingredients[i]['name'] = selected_ingredient.name;
							IngredientService.ingredients[i]['measurement'] = selected_ingredient.measurement;
							IngredientService.ingredients[i]['enabled'] = selected_ingredient.enabled;
						}										
					}							

					return IngredientService;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		}*/
	};

	return StockService;
});