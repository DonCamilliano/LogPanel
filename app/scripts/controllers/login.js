'use strict';

angular.module('mojeLogowanieApp')
  .controller('login',['$scope','$state','AuthService', function($scope, AuthService) {
      $scope.message = undefined;
      $scope.logUser = function() {
      AuthService.login($scope.userName, $scope.userPass);
      };
  }]);