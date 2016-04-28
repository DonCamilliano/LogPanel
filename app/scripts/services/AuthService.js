'use strict';

angular.module('mojeLogowanieApp')
    .factory('AuthService', ['$state', function ($state) {
        var auth = {
            user: {
                logged: false
            },
            login: function (userName, userPass) {
                if (userName === 'asd') {
                   auth.user.name = 'Ada';
                   auth.user.email = 'ada@ada.com';
                   auth.user.logged = true; 
                }
            }
        };
console.log(auth);
return auth;

    }]);