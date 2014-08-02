'use strict';

angular.module('yiqiApp')
  .controller('SearchResultsCtrl', ['$scope', '$log', 'FulltextSearch', function ($scope, $log, FulltextSearch) {
    $scope.resp = FulltextSearch.getResult();
    
    $scope.languages = [
      {short: 'en', 'long': 'english'},
      {short: 'de', 'long': 'deutsch'},
      {short: 'fr', 'long': 'francais'},
    ];
    $scope.selectedLang = '';

  }]);
