angular.module('skyEventApp')
    .factory('eventBriteDataService', function ($http) {
      const TOKEN = 'D4627P2NQ5UXCUTWSXIV'
      function getData (typeEvent, address, optionSelected, distanceSelected) {
        // Preparation for undefined selected options
        typeEvent = typeEvent || 'fiesta'
        address = address || 'barcelona'
        optionSelected = optionSelected || 'this_week'
        distanceSelected = distanceSelected || 1000

        var urlSearch = 'https://www.eventbriteapi.com/v3/events/search/?token=<%token%>&location.address=<%address%>&q=<%typeEvent%>&start_date.keyword=<%optionSelected%>&location.within=<%distanceSelected%>km'
        urlSearch = urlSearch.replace('<%token%>', TOKEN)
                             .replace('<%address%>', address)
                             .replace('<%typeEvent%>', typeEvent)
                             .replace('<%optionSelected%>', optionSelected)
                             .replace('<%distanceSelected%>', distanceSelected)

        return $http.get(urlSearch)
      }

      function mostPopularByPlace (lat, lon) {
        var urlSearch = 'https://www.eventbriteapi.com/v3/events/search/?token=<%token%>&location.latitude=<%lat%>&location.longitude=<%lon%>'
        urlSearch = urlSearch.replace('<%token%>', TOKEN)
                             .replace('<%lat%>', lat)
                             .replace('<%lon%>', lon)
        return $http.get(urlSearch)
      }

      function getLocalization (venueId) {
        var urlLocalization = 'https://www.eventbriteapi.com/v3/venues/<%venueId%>/?token=' + TOKEN
        urlLocalization = urlLocalization.replace('<%venueId%>', venueId)
        return $http.get(urlLocalization)
      }

      function getId (eventId) {
        var urlSearch = 'https://www.eventbriteapi.com/v3/events/' + eventId + '/?token=' + TOKEN
        return $http.get(urlSearch)
      }

      function getCategories () {
        var urlSearch = 'https://www.eventbriteapi.com/v3/categories/?token=' + TOKEN
        return $http.get(urlSearch)
      }

      function getTicket (id) {
        var urlSearch = 'https://www.eventbriteapi.com/v3/events/' + id + '/orders/?token=' + TOKEN
        return $http.get(urlSearch)
      }

      return {
        mostPopular: mostPopularByPlace,
        getData: getData,
        getLocalization: getLocalization,
        getId: getId,
        getCat: getCategories,
        getTicket: getTicket
      }
    })
