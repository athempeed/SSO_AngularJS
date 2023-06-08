angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute',
  'AdalAngular'
]).
config(['$routeProvider','$httpProvider', 'adalAuthenticationServiceProvider','$locationProvider', function($routeProvider, $httpProvider, adalAuthenticationServiceProvider,$locationProvider) {
  $routeProvider.
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController",  requireADLogin: true}).
	when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController", requireADLogin: true}).
	otherwise({redirectTo: '/drivers'});

  adalAuthenticationServiceProvider.init({
    // clientId is the identifier assigned to your app by Azure Active Directory.
    tenant: "peth365dev.onmicrosoft.com",
    clientId: "2182ed42-585f-4b9e-8116-b80cfe0d0099"
  },
  $httpProvider   // Optionally, pass http provider to inject request interceptor to attach tokens
  );
  $locationProvider.html5Mode(true).hashPrefix('!');
}]);


