/* global angular */
(function () {
  'use strict'
  var app = angular.module('skyEventApp')
  app.controller('popularEvents', popularEvents)
  function popularEvents (eventBriteDataService) {
    var self = this
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      eventBriteDataService.mostPopular(latitude, longitude)
        .then(function (data) {
          self.showEvent = true
          self.eventsArray = data.data.events.splice(0, 8)
        })
    })
  }
})()
