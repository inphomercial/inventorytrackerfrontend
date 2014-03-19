inventoryApp.controller('reconcilesController', function ($scope, ReconcileService) {
    $scope.stocks = {};

    var request = ReconcileService.getStock()
    request.then(function(res) {
        $scope.stocks = ReconcileService.stocks;
        for(var i=0;i<$scope.stocks.length;i++) {
            $scope.stocks[i].reconciled = false;
        }
    });

    $scope.updateStock = function(stock, $index) {
        ReconcileService.updateStock(stock, stock.actualStock);
        // If stock hasnt veen reconciled, set to true and never change back so
        // The user can do it more than once if they need in the same session.
        if(!$scope.stocks[$index].reconciled) {
            $scope.stocks[$index].reconciled = true;
        }

        // Clear actualStock form field after submit to clear the button
        $scope.stocks[$index].actualStock = null;
    }
});
