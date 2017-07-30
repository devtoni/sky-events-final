/* global angular */

(function () {
  'use strict'
  var app = angular.module('skyEventApp')
  app.controller('searchController', searchController)
  function searchController ($location, auxiliarServices, eventBriteDataService) {
    var self = this
    var daySelected = ''
    var distanceSelected = ''
    self.getDay = function () {
      daySelected = self.daySelected
    }
    self.getDistance = function () {
      distanceSelected = self.distanceSelected
    }
    self.getQuery = function () {
      var eventName = self.eventName
      var locationName = self.locationName
      var data = { eventName: eventName, locationName: locationName, daySelected: daySelected, distanceSelected: distanceSelected }
      auxiliarServices.setDataInput(data)
      $location.path('/search-results/')
    }
  }
})()
