inventoryApp.factory('StockService', function ($http) 
{	
	var StockService = {

		stocks: [],

		getStock: function() 
		{
			var url = "http://localhost/inventorytracker/public/index.php/location/meals?key=loc2";

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
		}	
	};

	return StockService;
});