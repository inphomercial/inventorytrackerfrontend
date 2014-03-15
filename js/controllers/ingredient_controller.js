
inventoryApp.controller('ingredientsController', function ($scope, IngredientService)
{
    // Used to show/hide the create new ingredients div
    $scope.createIngredientPushed = false;

    // Get all companies on load
    var request = IngredientService.getIngredients();
    request.then(function(res) {
        $scope.ingredients = IngredientService.ingredients;
    })

    // Used to show/hide the div to create a new meal
    $scope.showCreateIngredient = function()
    {
        $scope.createIngredientPushed = !$scope.createIngredientPushed;
    },

    $scope.newIngredient = function()
    {
        var newIngredient = {
            "name": $scope.new_ingredient.name,
            "unit": $scope.new_ingredient.unit,
            "enabled" : $scope.new_ingredient.enabled
        };

        IngredientService.newIngredient(newIngredient);
        $scope.new_ingredient.name = "";
        $scope.new_ingredient.unit = "";
        $scope.new_ingredient.enabled = "";

        $scope.createIngredientPushed = false;
    };
});