/* global angular */
angular.module('skyEventApp')
  .controller('searchController', function ($scope, $location, auxiliarServices, eventBriteDataService) {
    var daySelected = ''
    var distanceSelected = ''

    $scope.getDay = function () {
      daySelected = $scope.daySelected
    }

    $scope.getDistance = function () {
      distanceSelected = $scope.distanceSelected
    }
    $scope.getQuery = function () {
      var eventName = $scope.eventName
      var locationName = $scope.locationName
      var data = { eventName: eventName, locationName: locationName, daySelected: daySelected, distanceSelected: distanceSelected }
      auxiliarServices.setDataInput(data)
      $location.path('/search-results/')
    }
    $scope.imgNoAv = 'http://res.cloudinary.com/drenzfi8m/image/upload/v1501183394/no-image-available_yxkp4d.png'
  })
