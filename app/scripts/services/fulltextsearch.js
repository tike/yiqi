'use strict';

angular.module('yiqiApp')
  .factory('FulltextSearch', ['$http', '$log', function ($http, $log) {
    // Service logic
    // ...
    // The request url to be used for the query
    var queryUrl = '/ajax/search';
    var queryParam = '';
    var queryStatus = 0;
    var promise = null;
    
    // Stores the found items after successfull search
    var foundItems = [];

    // Public API here
    return {
      search: function (query) {
        queryParam = query;
        query.Status = 0;
        
        var plainPromise = $http({
          method: 'GET',
          url: queryUrl,
          params: {q: query},
        });
        promise = plainPromise.success(function(data, status){
          queryStatus = status;
          $log.debug('FTS: success', status, data.length);
          foundItems = data;
        })
        .error(function(data, status, headers){
          if (status === 404){
            queryStatus = status;
            $log.debug('FTS: nothing found!', status);
            return;
          }
          queryStatus = status;
          $log.error('FTS: search error', status, headers());
        });
        $log.debug('FTS: search ended');
        return plainPromise;
      },
      
      getResult: function(){
        return {
          query : queryParam,
          status: queryStatus,
          data: foundItems,
        };
      },
    };
  }]);
