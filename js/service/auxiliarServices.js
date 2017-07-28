(function () {
  angular.module('skyEventApp')
  .service('auxiliarServices', function ($sce) {
    var data = {}
    this.setDataInput = function (object) {
      data = object
    }

    this.getDataInput = function () {
      return data
    }

    this.mergeArrayOfObjects = function (array) {
      return Object.assign.apply(Object, array)
    }

    this.renderHtmlWithAngular = function (html) {
      return $sce.trustAsHtml(html)
    }
  })
})()
