'use strict';

angular.module('yiqiknowApp')
  .controller('DictSearchCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    /**
     * the current status of the search
     *  0: now search has been made since pageload
     *  1: search started, result pending
     *  2: search finished, result valid
     *  3: search finished, no results found
     *  4: search finished, error occured
     */
    $scope.searchState = 0;
    
    // The request url to be used for the query
    var queryUrl = '/dictdummy.json';
    
    // The query value provided by the user
    $scope.query = 'xia4';
    
    // Stores the found items after successfull search
    $scope.foundItems = [];
    
    $scope.search = function(query){
      $scope.searchState = 1;
      $log.debug('search pending...', $scope.searchState);
      $http({
        method: 'GET',
        url: queryUrl,
        params: {q: query},
      })
      .success(function(data, status){
        if (data.length === 0){
          $scope.searchState = 3;
          $log.debug('nothing found', $scope.searchState, status);
          return;
        }
        $scope.searchState = 2;
        $scope.foundItems = data;
        $log.info('search sucessfull', $scope.searchState, data.length, status);
      })
      .error(function(data, status, headers){
        $scope.searchState = 4;
        $log.error('search error', $scope.searchState, status, headers());
      });
      $log.debug('search ended', $scope.searchState);
    };
    
    $scope.getUserMessage = function(){
      switch ($scope.searchState){
        case 0:
          return 'Going to search for';
        case 1:
          return 'Searching for';
        case 2:
          return 'items found!';
        case 3:
          return 'no matches. Sorry.';
        case 4:
          return 'An error occured, please try again';
      }
    };
    
  }])
  .controller('ResultItemCtl', ['$scope', '$log', function($scope, $log){
    $log.info('resItemCtl');
  }])
  .controller('TranslationCtl', ['$scope', '$log', function($scope, $log){
    $log.info('TransCtl');
  }]);

