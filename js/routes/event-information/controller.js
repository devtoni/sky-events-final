  /* global angular */
(function () {
  'use strict'
  var app = angular.module('skyEventApp')
  app.controller('eventInformation', eventInformation)
  function eventInformation ($sce, $routeParams, eventBriteDataService, auxiliarServices) {
    var self = this
    var ids = $routeParams.id.split('&')
    var [eventId, venueId] = [ids[0], ids[1]]
    self.renderHtml = auxiliarServices.renderHtmlWithAngular
    eventBriteDataService.getLocalization(venueId)
      .then(function (data) {
        self.locaInfo = data
      })
    eventBriteDataService.getId(eventId)
      .then(function (data) {
        self.infoEvent = data
      })
  }
})()
