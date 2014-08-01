'use strict';

angular.module('yiqiApp')
  .controller('DictSearchCtrl', ['$scope', '$log', '$location', 'FulltextSearch', function ($scope, $log, $location, FulltextSearch) {
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
    
    // The query value provided by the user
    $scope.query = '';
    
    var promise = null;
    
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
      promise = FulltextSearch.search(query).success(function(data, status){
          $scope.searchState = 3;
          $log.debug('found', status, data.length, $scope.searchState);
          $location.path('/searchresults');
        })
      .error(function(){
        if (status === 404){
          $scope.searchState = 4;
          $log.debug('nothing found', status, $scope.searchState);
          return;
        }
        $scope.searchState = 5;
        $log.debug('error', status, $scope.searchState);
      });
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

