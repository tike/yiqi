'use strict';

angular.module('yiqiApp')
  .controller('MainCtrl', ['$scope', '$log', '$http', function ($scope, $log, $http) {
    $scope.query = 'dose';
    $scope.excuting = false;
    $scope.message = "Search for";
    $scope.foundItems = [];

    $scope.search = function(query){
        $log.info('Searching for', query);
        $scope.excuting = true;
        $scope.message = "Searching for"
        var url = '//localhost:8000/ajax/search';
        $log.debug('request url:', url);
        $http({
            method: 'GET',
            url: url,
            params: {q: query},
          }).success(function(data, status, headers, config){
            $scope.excuting = false;
            $scope.message = "Found " + data.length + " results for "
            $scope.foundItems = data;
            $log.info('success', data.length, status);
          }).error(function(data, status, headers, config){
            $scope.excuting = false;
            $log.error('error', data, status, headers(), config);
          });
        $log.debug('end of search');
      };
  }]);
