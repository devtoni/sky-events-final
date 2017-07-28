/* global angular */
angular.module('skyEventApp')
  .controller('showEvents', function ($scope, $routeParams, eventBriteDataService, auxiliarServices) {
    var userQuery = auxiliarServices.getDataInput()
    $scope.placeSearched = userQuery.locationName
    eventBriteDataService.getData(userQuery.eventName, userQuery.locationName, userQuery.daySelected, userQuery.distanceSelected)
      .then(function (events) {
        $scope.noResults = true
        $scope.eventsArray = events.data.events
      })
      .catch(function (error) {
        $scope.noResults = false
      })

    // list of categories
    eventBriteDataService.getCat()
      .then(function (oCategories) {
        listCategories(oCategories)
      })

    $scope.getCategory = function (e) {
      $scope.catId = e.currentTarget.dataset.id
    }

    $scope.free = function (e) {
      console.log(e.target.textContent)
      if (e.target.textContent === 'Gratis') {
        $scope.gratis = true
      }
      if (e.target.textContent === 'Pago') {
        $scope.gratis = false
      }
    }

    $scope.order = function (e) {
      if (e.target.textContent === 'FECHA') {
        if ($scope.value !== 'start.local') {
          $scope.value = 'start.local'
        } else {
          $scope.value = '-start.local'
        }
      } else {
        if ($scope.value !== 'organizer_id') {
          $scope.value = 'organizer_id'
        } else {
          $scope.value = '-organizer_id'
        }
      }
    }

    function listCategories (oCategories) {
      $scope.listCategories = oCategories.data.categories
      $scope.listCategories = $scope.listCategories.map(category => {
        return {
          name: category.name,
          id: category.id
        }
      })
      $scope.listCat = $scope.listCategories.map(category => {
        return {
          [category.id]: category.name
        }
      })
      $scope.categoryName = auxiliarServices.mergeArrayOfObjects($scope.listCat)
    }
  })
