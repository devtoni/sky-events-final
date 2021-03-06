/* global angular */
angular.module('skyEventApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search-results/:id', {
        templateUrl: 'js/routes/search-results/template.html',
        controller: 'showEvents',
        controllerAs: 'vm'
      })
      .when('/evento/:id', {
        templateUrl: 'js/routes/event-information/template.html',
        controller: 'eventInformation',
        controllerAs: 'vm'
      })
  })
