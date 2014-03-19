inventoryApp.controller('stocksController', function ($scope, MealService, StockService) {
    $scope.stocks = {};
    $scope.meal = {};

    var request = StockService.getStock()
    request.then(function(res) {
        $scope.stocks = StockService.stocks;
        for(var i=0;i<$scope.stocks.length;i++) {
            $scope.stocks[i].modified = false;
            $scope.stocks[i].wasted = 0;
            $scope.stocks[i].sold = 0;
        }
    });

    $scope.getMealById = function (id) {
        var request = MealService.getMealById(id);
        request.then(function(res) {
            $scope.meal = res.data;
        });
    };

    $scope.incrementSold = function($index) {
        $scope.stocks[$index].modified = true;
        $scope.stocks[$index].sold++;

        var request = MealService.getMealById($scope.stocks[$index].id);
        request.then(function(res) {
             var meal = res.data;
             StockService.sellMeal(meal);
        })

        // Write a row to a sales table for reporting
    };

    $scope.incrementWaste = function($index) {
        $scope.stocks[$index].modified = true;
        $scope.stocks[$index].wasted++;

        var request = MealService.getMealById($scope.stocks[$index].id);
        request.then(function(res) {
             var meal = res.data;
             StockService.sellMeal(meal);
        })
    };

    $scope.undo = function($index) {
        var wasted = $scope.stocks[$index].wasted;
        var sold = $scope.stocks[$index].sold;
        var totalWastedAndSoldToRevert = wasted + sold;

        var request = MealService.getMealById($scope.stocks[$index].id);
        request.then(function(res) {
             var meal = res.data;
             StockService.undoSellMeal(meal, totalWastedAndSoldToRevert);
        });
        $scope.stocks[$index].modified = false;
        $scope.stocks[$index].sold = 0;
        $scope.stocks[$index].wasted = 0;
    };
});
