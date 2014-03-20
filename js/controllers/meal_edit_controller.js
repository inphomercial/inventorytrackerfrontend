inventoryApp.controller('mealEditController', function ($scope, $routeParams, $location, MealService, IngredientService) {
    $scope.meal_id = $routeParams.meal_id;
    $scope.meal = {};
    $scope.available_ingredients = [];

    // Initialize the meal to be edited
    var request = MealService.getMealById($scope.meal_id);
    request.then(function(res) {
        $scope.meal = res.data;
        // Initialize the available ingredients
        var new_request = IngredientService.getIngredients();
        new_request.then(function(res) {
            IngredientService.ingredients.forEach(function(ingredient, index) {
                // only add ingredients that we don't already have
                if ($scope.meal.ingredients) {
                    if (!hasIngredient(ingredient, $scope.meal.ingredients)) {
                        $scope.available_ingredients.push(ingredient);
                    }
                } else {
                    $scope.available_ingredients.push(ingredient);
                }
            });
        });
    });

    /**
     * addIngredient to Meal
     * @param {Meal} meal
     * @param {Ingredient} new_ingredient NOT the same as a MealIngredient
     */
    $scope.addIngredientToMeal = function (meal, new_ingredient) {
        var req = IngredientService.addIngredientToMeal(meal.id, new_ingredient.id, 1);
        req.then(function(res) {
            // okay this needs some explaination.  A meal doesn't have an
            // Ingredient object, it has a MealIngredient object.  So we really
            // need to find that MealIngredient and add that to its ingredients,
            // but instead of that I am just getting the meal again from the service
            // which should just return a nice fresh meal (pun intended)
            var sub_req = MealService.getMealById($scope.meal_id);
            sub_req.then(function(res) {
                $scope.available_ingredients.forEach(function(ingredient, index) {
                    if (ingredient.id == new_ingredient.id) {
                        $scope.available_ingredients.splice(index, 1);
                    }
                });
                $scope.meal = res.data;
            });
        });
    };

    /**
     * Remove and ingredient from a meal
     * @param  {Meal} meal
     * @param  {MealIngredient} ingredient NOT the same object as an Ingredient
     */
    $scope.removeIngredientFromMeal = function (meal, ingredient) {
        var req = IngredientService.removeIngredientFromMeal(meal.id, ingredient.ingredient_id);
        req.then(function(res) {
            // As with the add Ingredient.  We can't simply add the ingredient
            // passed in since It is a MealIngredient.  So we need to find that
            // Ingredient by the ingredient ID and add that to the list
            var sub_req = IngredientService.getIngredientById(ingredient.ingredient_id);
            sub_req.then(function(res) {
                for(var i=0; i < $scope.meal.ingredients.length; i++) {
                    if($scope.meal.ingredients[i].ingredient_id == ingredient.ingredient_id) {
                        $scope.meal.ingredients.splice(i, 1);
                    }
                }
                $scope.available_ingredients.push(res.data);
            });
        });
    };

    $scope.updateIngredientAmount = function (meal_id, ingredient_id, amount, $index) {
        IngredientService.addIngredientToMeal(meal_id, ingredient_id, amount);
    };

    $scope.deleteMeal = function(id) {
        MealService.deleteMeal(id);
        $location.path('/meals');
    };

    $scope.updateMeal = function() {
        MealService.updateMeal($scope.meal);
        // $location.path('/meals');
    };

    /**
     * Helper function for checking to see if a given ingredient is in a list
     * of ingredients
     * @param  {Ingredient}  ingredient
     * @param  {Array}  ingredients [description]
     * @return {Boolean} true if array contains the ingredient
     */
    function hasIngredient(ingredient, ingredients) {
        found = false;
        ingredients.forEach(function (item) {
            if (ingredient.id == item.ingredient_id) {
                found = true;
                return;
            }
            return false;
        });
        return found;
    };
});