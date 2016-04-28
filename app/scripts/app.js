'use strict';

/**
 * @ngdoc overview
 * @name mojeLogowanieApp
 * @description
 * # mojeLogowanieApp
 *
 * Main module of the application.
 */
angular
  .module('mojeLogowanieApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router', 
    'ngTouch',
  ])
  
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    
     // Removing # from url
        // $locationProvider.html5Mode(true);
   
   // If no state matched redirect to: 
   $urlRouterProvider.otherwise('/logowanie'); 
   
      // used states
        $stateProvider
            .state('logowanie', {
                url: '/logowanie',
                templateUrl: 'views/logowanie.html',
                controller: 'login'
            })
      .state('artykuly',{
          url: '/artykuly', 
          templateurl: 'views/artykuly.html' 
          // controller:'ArtCtrl',            
  });
  
}]);