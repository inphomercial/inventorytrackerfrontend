inventoryApp.factory('StockService', function ($http, MealService, IngredientService, ReconcileService) 
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
						if(response[i].enabled)
						{
							StockService.stocks.push(response[i]);	
						}					
					}

					return StockService.stocks;
				})
				.error(function (data, status) {
					alert("Error" + status);
				});
		},

		sellMeal: function(meal)	
		{
			console.log(meal);

			for (var i =0; i< meal.ingredients.length; i++) 
			{
				console.log(meal.ingredients[i]);

				var newTotalStock = meal.ingredients[i].stock - meal.ingredients[i].amount;			
				var updatedIngredient = {
					"id": meal.ingredients[i].ingredient_id,
					"stock": newTotalStock
				};
				
				IngredientService.updateIngredient(updatedIngredient);			
			};					
		}
	};

	return StockService;
});