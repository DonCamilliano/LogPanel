'use strict';

angular.module('mojeLogowanieApp')
    .factory('AuthService',['$q', '$state','$rootScope', '$cookieStore', function ($q, $state, $rootScope, $cookieStore) {
        var auth = {
            user: {
                logged: false
            },
            login:  function(username, userpass) {
                // return UserService;
                if (username === 'test' && userpass === 'test') {
                        auth.user.name = 'Admin';
                        auth.user.email = 'admin@admin.pl';
                        auth.user.logged = true;
                        $cookieStore.put('user', auth.user);
                        return $q.resolve(auth.user);
                        } else {
                            return $q.reject(auth.user);
                        }
                
                // return UserService.save({login: username, password: password }, 
                //   function(response) {
                //         // logged in
                //         auth.user.name = response.user.name;
                //         auth.user.email = response.user.email;
                //         auth.user.hasEnovaSync = response.user.hasEnovaSync;
                //         auth.user.eid = response.user.enovaId;
                //         auth.user.mes = true;
                // }, function () {
                //     // login failed
                //     auth.user.mes = false;
                // }).$promise;
            },
            logout: function() {
                auth.user.logged = false;
                $rootScope.loggedUser = false;
                $cookieStore.remove('user');
                $state.go('logowanie');
            }
        };
return auth;
    }]);