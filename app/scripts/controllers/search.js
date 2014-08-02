'use strict';

angular.module('yiqiApp')
  .controller('SearchCtrl', ['$scope', '$log', '$routeParams', 'FulltextSearch', function ($scope, $log, $routeParams, FulltextSearch) {
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
    
    //messages shown to the user during the search execution cycle
    var messages = [
      '',
      'Going to search for',
      'Searching for',
      'items found!',
      'no matches. Sorry.',
      'An error occured, please try again.'
    ];
    var promise = null;
    $scope.query = '';
    $scope.found = [];
    
    $scope.search = function(query){
      promise = FulltextSearch.search(query)
      .success(function(data, status){
          $scope.searchState = 3;
          $scope.found = data;
          $log.debug('found', status, data.length, $scope.searchState);
        })
      .error(function(data, status){
        if (status === 404){
          $scope.searchState = 4;
          $log.debug('nothing found', status, $scope.searchState);
          return;
        }
        $scope.searchState = 5;
        $log.debug('error', status, $scope.searchState);
      });
    };
    
    $scope.languages = [ 'en', 'fr', 'de'];
  /*    {short: 'en', 'long': 'english'},
      {short: 'de', 'long': 'deutsch'},
      {short: 'fr', 'long': 'francais'},
    ]; */
    $scope.selectedLang = '';
    
    $log.debug('Meine query', $routeParams);
    $log.debug('Meine query', $routeParams.query);
    if ($routeParams.query !== undefined){
      $scope.searchState = 2;
      $scope.query = $routeParams.query;
      $scope.search($routeParams.query);
    }
  
  }]);
