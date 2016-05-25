'use strict';

angular.module('mojeLogowanieApp')
  .controller('login',['$scope','$state','AuthService','$rootScope', function($scope, $state, AuthService, $rootScope) {
      $scope.message = undefined;
      console.log($scope.message);
      $scope.logUser = function() {
          AuthService.login($scope.userName, $scope.userPass)
              .then(function() {
                $rootScope.loggedUser = true;
                $state.go('article');
              }, function () {
                $scope.message= 'Logowanie nie powiodło się.';
          });
      };
  }]);
  
  