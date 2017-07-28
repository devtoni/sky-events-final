/* global angular */
angular.module('skyEventApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/routes/home/template.html'
      })
  })
