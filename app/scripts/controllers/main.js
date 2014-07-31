'use strict';

angular.module('yiqiApp')
  .controller('MainCtrl', ['$scope', '$log', '$http', function ($scope, $log, $http) {
    $scope.query = 'zhu3';

    $scope.search = function(query){
        $log.info('Searching for', query);
        var url = '//localhost:8000/search';
        $log.debug('request url:', url);
        $http({
            method: 'GET',
            url: url,
            params: {q: query},
          }).success(function(data){
            $log.info('success', data);
          }).error(function(){
            $log.error('error fetching data.');
          });
        $log.debug('end of search');
      };
  }]);
