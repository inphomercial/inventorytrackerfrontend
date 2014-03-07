inventoryApp.factory('ReconcileService', function ($http) 
{	
	var ReconcileService = {

		stocks: [],

		getStock: function() 
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/ingredients?key=loc2";

			return $http.get(url)
				.success(function (response) {
					// it worked
					ReconcileService.stocks = [];
					for(var i=0; i < response.length; i++)
					{
						ReconcileService.stocks.push(response[i]);
					}

					return ReconcileService.stocks;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});
		},

		updateStock: function(stock, new_stock_amount)
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/ingredients/" + stock.id + "?key=loc2";	

			var reconcile_row = {				
				"ingredient_id": stock.id,
				"estimated_stock": stock.stock,
				"actual_stock": new_stock_amount
			};

			// Call create reconcile row and pass reconcile_row object
			ReconcileService.reconcileIngredient(reconcile_row);

			var selected_stock = {
				"ingredient_id": stock.id,			
				"stock": new_stock_amount				
			};

			return $http.put(url, selected_stock)
				.success(function (response) {					
					// it worked						
					for(var i=0; i < ReconcileService.stocks.length; i++)
					{					
						if(ReconcileService.stocks[i].id == stock.id)
						{												
							ReconcileService.stocks[i]['stock'] = new_stock_amount;
						}										
					}							

					return ReconcileService.stocks;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});			
		},


		// Create a new ingredient based on $key for location_id
		reconcileIngredient: function(reconcile) {
			
			var postUrl = "http://localhost/inventorytracker/public/index.php/location/reconcile?key=loc2";

			return $http({method: 'POST', url: postUrl, data: reconcile })
				.success(function( data, status, headers, config ) 
				{												
					console.log("reconciled row success");
				})
				.error(function( data, status, headers, config) {
					alert("Error" + status);
				});
		}		
	};

	return ReconcileService;
});