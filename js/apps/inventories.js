var inventoryApp = angular.module('Inventories', ['ngRoute']);

inventoryApp.version = 'v1';
inventoryApp.url = "http://localhost/inventorytracker/public/index.php/api/" + inventoryApp.version + "/";