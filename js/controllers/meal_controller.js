inventoryApp.controller('mealsController', function ($scope, $location, MealService, IngredientService) {
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


    $scope.updateEnabled = function(meal)
    {
        console.log(meal.enabled);

        if (meal.enabled == 1) {
            meal.enabled = 0;
        } else {
            meal.enabled = 1;
        }

        console.log('updating enabled ' + meal.enabled);
    },

    $scope.newMeal = function()
    {
        if (!$scope.new_meal_name) {
            alertify.error('Please enter in a name!');
        } else {
            var newMeal = {
                'name': $scope.new_meal_name,
                'enabled' : true
            };

            request = MealService.newMeal(newMeal);
            request.then(function(res) {
                // once the meal is created, redirect to the edit page
                $location.path('/editMeal/' + res.data.id);
            })
        }
    }
});
