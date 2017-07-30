/* global angular */
angular.module('skyEventApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search-results', {
        templateUrl: 'js/routes/search-results/template.html',
        controller: 'showEvents',
        controllerAs: 'vm'
      })
  })
