inventoryApp.controller('mealsController', function ($scope, $location, MealService, IngredientService) {
    $scope.meals = [];

    var request = MealService.getMeals();
    request.then(function(res) {
        $scope.meals = MealService.meals;
    });


    $scope.updateEnabled = function(meal) {
        if (meal.enabled == 1) {
            meal.enabled = 0;
        } else {
            meal.enabled = 1;
        }
    };

    $scope.newMeal = function() {
        if (!$scope.new_meal_name) {
            alertify.error('Please enter in a name!');
        } else {
            var newMeal = {
                'name': $scope.new_meal_name,
                'enabled' : true
            };

            request = MealService.newMeal(newMeal);
            request.then(function(res) {
                $location.path('/editMeal/' + res.data.id);
            })
        }
    }
});
