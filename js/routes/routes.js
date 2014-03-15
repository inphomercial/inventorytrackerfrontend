inventoryApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/companies', {
        templateUrl: 'views/companies/companies.html'
      })
      .when('/editCompany/:company_id', {
        templateUrl: 'views/companies/editCompany.html'
      })
      .when('/locations', {
        templateUrl: 'views/locations/locations.html'
      })
      .when('/editLocation/:location_id', {
        templateUrl: 'views/locations/editLocation.html'
      })
      .when('/meals', {
      	templateUrl: 'views/meals/meals.html'
      })
      .when('/editMeal/:meal_id', {
        templateUrl: 'views/meals/editMeal.html'
      })
      .when('/ingredients', {
      	templateUrl: 'views/ingredients/ingredients.html',
      })
      .when('/editIngredient/:ingredient_id', {
        templateUrl: 'views/ingredients/editIngredient.html'
      })
      .when('/mealSales', {
        templateUrl: 'views/meals/mealSales.html'
      })
      .when('/reconciles', {
        templateUrl: 'views/reconciles.html'
      })
      .when('/reports', {
        templateUrl: 'views/reports.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);