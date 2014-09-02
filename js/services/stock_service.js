inventoryApp.factory('StockService', function ($http, MealService, IngredientService, ReconcileService)
{
	var StockService = {

		stocks: [],

		getStock: function()
		{
			var url = inventoryApp.url + "location/meals?key=loc2";

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
			for (var i =0; i< meal.ingredients.length; i++)
			{
				var newTotalStock = meal.ingredients[i].stock - meal.ingredients[i].amount;
				var updatedIngredient = {
					"id": meal.ingredients[i].ingredient_id,
					"stock": newTotalStock
				};

				IngredientService.updateIngredient(updatedIngredient);
			};
		},

		undoSellMeal: function(meal, totalWasteAndSoldToRevert)
		{
			for (var i =0; i< meal.ingredients.length; i++)
			{
				var total = meal.ingredients[i].stock + (meal.ingredients[i].amount * totalWasteAndSoldToRevert);
				var updatedIngredient = {
					"id": meal.ingredients[i].ingredient_id,
					"stock": total
				};

				IngredientService.updateIngredient(updatedIngredient);
			};
		}
	};

	return StockService;
});