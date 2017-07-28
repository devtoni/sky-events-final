(function () {
  /* global angular */
  angular.module('skyEventApp')
    .controller('eventInformation', function ($scope, $sce, $routeParams, eventBriteDataService, auxiliarServices) {
      var ids = $routeParams.id.split('&')
      var [eventId, venueId] = [ids[0], ids[1]]

      eventBriteDataService.getLocalization(venueId)
        .then(function (data) {
          $scope.locaInfo = data
        })

      eventBriteDataService.getId(eventId)
        .then(function (data) {
          $scope.infoEvent = data
        })
      $scope.goBack = function () {
        window.history.back()
      }
      $scope.renderHtml = auxiliarServices.renderHtmlWithAngular
    })
})()
