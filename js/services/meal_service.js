inventoryApp.factory('MealService', function ($http, IngredientService) {
    var MealService = {
        meals: [],

        getMealById: function(id) {
            var url = inventoryApp.url + "location/meals/" + id + "/ingredients?key=loc2";
            return $http.get(url)
                .success(function (response) {
                    return response;
                })
                .error(function (data, status) {
                    alert("Error " + status);
                });
        },

        getMeals: function() {
            var url = inventoryApp.url + "location/meals?key=loc2";
            return $http.get(url)
                .success(function (response) {
                    MealService.meals = [];
                    for(var i=0; i < response.length; i++) {
                        MealService.meals.push(response[i]);
                    }
                    return MealService.meals;
                })
                .error(function (data, status) {
                    alert("Error " + status);
                });
        },

        deleteMeal: function(id) {
            var url = inventoryApp.url + "location/meals/" + id + "?key=loc2";
            return $http.delete(url)
                .success(function (response) {
                    alertify.success("Meal Deleted");
                    for(var i=0; i < MealService.meals.length; i++) {
                        if(MealService.meals[i].id == id) {
                            MealService.meals.splice(i, 1);
                        }
                    }
                    return MealService;
                })
                .error(function (data, status) {
                    alert("Error " + status);
                });
        },

        // Create a new ingredient based on $key for location_id
        newMeal: function(newMeal) {
            var postUrl = inventoryApp.url + "location/meals?key=loc2";
            return $http({method: 'POST', url: postUrl, data: newMeal })
                .success(function( data, status, headers, config )
                {
                    alertify.success("Meal Created");
                    MealService.meals.push(data);
                    return data;
                })
                .error(function( data, status, headers, config) {
                    alert("Error " + status);
                });
        },

        updateMeal: function(meal) {
            var url = inventoryApp.url + "location/meals/" + meal.id + "?key=loc2";
            return $http.put(url, meal)
                .success(function (response) {
                    console.log(response);
                    alertify.success("Meal Updated");
                    for(var i=0; i < MealService.meals.length; i++) {
                        if(MealService.meals[i].id == meal.id) {
                            MealService.meals[i]['name'] = meal.name;
                            MealService.meals[i]['enabled'] = meal.enabled;
                        }
                    }
                    return response;
                })
                .error(function (data, status) {
                    alert("Error " + status);
                });
        }
    };

    return MealService;
});