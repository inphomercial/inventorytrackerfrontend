var inventoryApp = angular.module('Inventories', ['ngRoute']);

inventoryApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/in', {
        templateUrl: 'userIngredients.html',
        controller: 'ingredients_controller'
      }).
      when('/showOrders', {
        templateUrl: 'templates/show-orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);