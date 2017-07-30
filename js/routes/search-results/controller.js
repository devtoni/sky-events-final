/* global angular */
(function () {
  var app = angular.module('skyEventApp')
  app.controller('showEvents', showEvents)
  function showEvents ($routeParams, eventBriteDataService, auxiliarServices) {
    var self = this
    var userQuery = auxiliarServices.getDataInput()
    self.placeSearched = userQuery.locationName

    eventBriteDataService.getData(userQuery.eventName, userQuery.locationName, userQuery.daySelected, userQuery.distanceSelected)
        .then(function (events) {
          self.noResults = true
          self.eventsArray = events.data.events
        })

      // list of categories
    eventBriteDataService.getCat()
        .then(function (oCategories) {
          listCategories(oCategories)
        })

    self.getCategory = function (e) {
      self.catId = e.currentTarget.dataset.id
    }

    self.free = function (e) {
      console.log(e.target.textContent)
      if (e.target.textContent === 'Gratis') {
        self.gratis = true
      }
      if (e.target.textContent === 'Pago') {
        self.gratis = false
      }
    }

    self.order = function (e) {
      if (e.target.textContent === 'FECHA') {
        if (self.value !== 'start.local') {
          self.value = 'start.local'
        } else {
          self.value = '-start.local'
        }
      } else {
        if (self.value !== 'organizer_id') {
          self.value = 'organizer_id'
        } else {
          self.value = '-organizer_id'
        }
      }
    }

    function listCategories (oCategories) {
      self.listCategories = oCategories.data.categories
      self.listCategories = self.listCategories.map(category => {
        return {
          name: category.name,
          id: category.id
        }
      })
      self.listCat = self.listCategories.map(category => {
        return {
          [category.id]: category.name
        }
      })
      self.categoryName = auxiliarServices.mergeArrayOfObjects(self.listCat)
    }
  }
})()
