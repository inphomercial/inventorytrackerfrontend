inventoryApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/adminCompanies', {
        templateUrl: 'views/adminCompanies.html',
        controller: 'companiesController'
      }).
      when('/adminLocations', {
        templateUrl: 'views/adminLocations.html',
        controller: 'locationsController'
      }).
      when('/userMeals', {
      	templateUrl: 'views/userMeals.html',
      	controller: 'mealsController'
      }).
      when('/userIngredients', {
      	templateUrl: 'views/userIngredients.html',
      	controller: 'ingredientsController'
      }).
      when('#userMealsSelected', {
        templateUrl: 'views/userMealsSelected.html',
        controller: 'mealsController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);