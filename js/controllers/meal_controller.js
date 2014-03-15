
inventoryApp.controller('mealsController', function ($scope, MealService, IngredientService)
{
    // Holds all the meal objects
    $scope.meals = {};

    // Used to show/hide the create new meal div
    $scope.createMealPushed = false;

    // Get all meals on load
    var request = MealService.getMeals();
    request.then(function(res)
    {
        $scope.meals = MealService.meals;
    });

    // Used to show/hide the div to create a new meal
    $scope.showCreateMeal = function()
    {
        $scope.createMealPushed = !$scope.createMealPushed;
    },

    $scope.updateEnabled = function(meal)
    {
        console.log(meal.enabled);

        if(meal.enabled == 1)
        {
            meal.enabled = 0;
        }
        else if(meal.enabled == 0)
        {
            meal.enabled = 1;
        }

        console.log("updating enabled " + meal.enabled);
    },

    $scope.newMeal = function()
    {
        var newMeal = {
            "name": $scope.new_meal_name,
            "enabled" : $scope.new_meal_enabled
        };

        MealService.newMeal(newMeal);
        $scope.new_meal_name = "";
        $scope.new_meal_enabled = "";

        // Clear to hide the create meal div after creation
        $scope.createMealPushed = false;
    }
});
