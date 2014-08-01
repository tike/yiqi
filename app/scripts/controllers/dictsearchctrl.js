'use strict';

angular.module('yiqiApp')
  .controller('DictSearchCtrl', ['$scope', '$http', '$log', '$location', function ($scope, $http, $log, $location) {
    /**
     * the current status of the search
     *  0: now search has been made since pageload
     *  1: user is typing a query
     *  2: search started, result pending
     *  3: search finished, results found
     *  4: search finished, no results found
     *  5: search finished, error occured
     */
    $scope.searchState = 0;
    
    // The request url to be used for the query
    var queryUrl = '/ajax/search';
    
    // The query value provided by the user
    $scope.query = '';
    
    // Stores the found items after successfull search
    $scope.foundItems = [];
    
    //messages shown to the user during the search execution cycle
    var messages = [
      '',
      'Going to search for',
      'Searching for',
      'items found!',
      'no matches. Sorry.',
      'An error occured, please try again.'
    ];
    
    $scope.search = function(query){
      $scope.searchState = 2;
      $log.debug('search pending...', $scope.searchState);
      $http({
        method: 'GET',
        url: queryUrl,
        params: {q: query},
      })
      .success(function(data, status){
        if (data.length === 0){
          $scope.searchState = 4;
          $log.debug('nothing found', $scope.searchState, status);
          return;
        }
        $scope.searchState = 3;
        $scope.foundItems = data;
        $log.info('search sucessfull', $scope.searchState, data.length, status);
        $location.path('/searchresults');
      })
      .error(function(data, status, headers){
        if (status === 404){
          $scope.searchState = 4;
          $log.debug('nothing found!', $scope.searchState, status);
          return;
        }
        $scope.searchState = 5;
        $log.error('search error', $scope.searchState, status, headers());
      });
      $log.debug('search ended', $scope.searchState);
    };
    
    $scope.watchSearchState = function(){
      $scope.searchState = 1;
    };
    
    $scope.getUserMessage = function(){
      return messages[$scope.searchState];
    };
    
  }])
  .controller('ResultItemCtl', ['$scope', '$log', function($scope, $log){
    $log.info('resItemCtl');
  }])
  .controller('TranslationCtl', ['$scope', '$log', function($scope, $log){
    $log.info('TransCtl');
  }]);

