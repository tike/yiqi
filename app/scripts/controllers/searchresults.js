'use strict';

angular.module('yiqiApp')
  .controller('SearchResultsCtrl', ['$scope', '$log', 'FulltextSearch', function ($scope, $log, FulltextSearch) {
    $scope.resp = FulltextSearch.getResult();
    

  });
