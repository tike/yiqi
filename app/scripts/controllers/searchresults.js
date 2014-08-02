'use strict';

angular.module('yiqiApp')
  .controller('SearchResultsCtrl', ['$scope', '$log', '$routeParams', 'FulltextSearch', function ($scope, $log, $routeParams, FulltextSearch) {
    $log.debug('query', $routeParams);
    if ($routeParams.query !== undefined){
      FulltextSearch.search($routeParams.query);
    }
    $scope.resp = FulltextSearch.getResult();
    
    $scope.languages = [
      {short: 'en', 'long': 'english'},
      {short: 'de', 'long': 'deutsch'},
      {short: 'fr', 'long': 'francais'},
    ];
    $scope.selectedLang = '';

  }]);
