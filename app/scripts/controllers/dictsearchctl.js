'use strict';

angular.module('yiqiApp')
  .controller('DictsearchctlCtrl', function ($scope) {
    /**
     * the current status of the search
     *  0: now search has been made since pageload
     *  1: search started, result pending
     *  2: search finished, result valid
     *  3: search finished, no results found
     *  4: search finished, error occured
     */
    $scope.searchState = 0;
    
    /**
     *  The query value provided by the user
     */
    $scope.query = 'xia4';
  });
