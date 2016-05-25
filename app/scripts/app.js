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
            .state('article', {
                url: '/article',
                templateUrl: 'views/article.html',
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
            });
}])

.run(['$rootScope', 'AuthService', '$cookieStore', '$state', function($rootScope, AuthService, $cookieStore, $state) {
  
  // Logout button
        $rootScope.logout = function() {
            AuthService.logout();
        };
        
        $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
            if ((from.name !== '') && (from.name !== to.name)) {
                $rootScope.lastPage = from.name + '(' + JSON.stringify(fromParams) + ')';
            }
            
            $rootScope.user = AuthService.user;
            if (AuthService.user.logged === false) {
                $rootScope.loggedUser = false;
            } else {
                $rootScope.loggedUser = true;
            }
        });
        
        // if user cookie exists, apply it to AuthService.user
        if (typeof $cookieStore.get('user') !== 'undefined') {
            AuthService.user = $cookieStore.get('user');
        }
}]);