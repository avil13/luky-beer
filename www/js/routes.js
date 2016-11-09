angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('menu', {
        url: '/side-menu21',
        templateUrl: 'js/controllers/menu/menu.html',
        controller: 'menuCtrl'
    })



    .state('menu.index', {
        url: '/index',
        views: {
            'side-menu21': {
                templateUrl: 'js/controllers/index/index.html',
                controller: 'indexCtrl'
            }
        }
    })

    .state('menu.luck', {
        url: '/luck',
        views: {
            'side-menu21': {
                templateUrl: 'js/controllers/luck/luck.html',
                controller: 'luckCtrl'
            }
        }
    })

    .state('menu.list', {
        url: '/menu',
        views: {
            'side-menu21': {
                templateUrl: 'js/controllers/list/list.html',
                controller: 'listCtrl'
            }
        }
    })


    $urlRouterProvider.otherwise('/side-menu21/index')



});
