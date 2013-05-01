var app = angular.module('app', []);

app.config(function ($routeProvider, $locationProvider) { 
   $locationProvider.html5Mode(true); // enable pushState
   $routeProvider.when('/', { 
      templateUrl: '/app.html',
      controller: 'AppCtrl'
   });
   $routeProvider.when('/another/route', { 
      templateUrl: '/deep.html',
      controller: 'AppCtrl'
   });
});

app.controller('AppCtrl', function ($scope) { 
    $scope.model = { 
       message: 'This is my app!!!' 
    };
});
