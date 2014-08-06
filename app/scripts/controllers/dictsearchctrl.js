'use strict';

angular.module('yiqiApp')
  .controller('DictSearchCtrl', ['$scope', '$log', '$location', function ($scope, $log, $location) {
    // The query value provided by the user
    if ($scope.$parent.query === undefined){
      $scope.query = '';
    }
    $scope.search = function(){
      $location.path('/search/').search({query: $scope.query });
    };
  }]);

