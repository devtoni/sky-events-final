/* global angular */
(function () {
  angular.module('skyEventApp')
  .controller('popularEvents', function ($scope, eventBriteDataService) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      eventBriteDataService.mostPopular(latitude, longitude)
        .then(function (data) {
          $scope.showEvent = true
          $scope.eventsArray = data.data.events.splice(0, 8)
        })
        .catch(function (error) {
          $scope.showEvent = false
        })
    })
  })
})()
