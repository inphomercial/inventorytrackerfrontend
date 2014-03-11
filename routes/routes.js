inventoryApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/companies', {
        templateUrl: 'views/companies.html'
        //controller: 'companiesController'
      }).
      when('/editCompany/:company_id', {
        templateUrl: 'views/editCompany.html'
      }).
      when('/locations', {
        templateUrl: 'views/locations.html'
      }).
      when('/editLocation/:location_id', {
        templateUrl: 'views/editLocation.html'
      }).
      when('/meals', {
      	templateUrl: 'views/meals.html'
      }).
      when('/editMeal/:meal_id', {
        templateUrl: 'views/editMeal.html'
      }).
      when('/ingredients', {
      	templateUrl: 'views/ingredients.html',
      }).
      when('/editIngredient/:ingredient_id', {
        templateUrl: 'views/editIngredient.html'
      }).
      when('/mealSales', {
        templateUrl: 'views/mealSales.html'
      }).
      when('/reconciles', {
        templateUrl: 'views/reconciles.html'
      }).
      when('/reports', {
        templateUrl: 'views/reports.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);