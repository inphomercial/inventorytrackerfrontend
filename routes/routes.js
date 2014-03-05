inventoryApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/adminCompanies', {
        templateUrl: 'views/adminCompanies.html'
        //controller: 'companiesController'
      }).
      when('/adminEditCompany/:company_id', {
        templateUrl: 'views/adminEditCompany.html'
      }).
      when('/adminLocations', {
        templateUrl: 'views/adminLocations.html'
      }).
      when('/adminEditLocation/:location_id', {
        templateUrl: 'views/adminEditLocation.html'
      }).
      when('/userMeals', {
      	templateUrl: 'views/userMeals.html'
      }).
      when('/userEditMeal/:meal_id', {
        templateUrl: 'views/userEditMeal.html'
      }).
      when('/userIngredients', {
      	templateUrl: 'views/userIngredients.html',
      }).
      when('/userEditIngredient/:ingredient_id', {
        templateUrl: 'views/userEditIngredient.html'
      }).
      when('/userStocks', {
        templateUrl: 'views/userStocks.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);