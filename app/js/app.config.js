angular
    .module("whiteTreeProductions", [ 'ui.router'])
    .config(function($stateProvider, $qProvider, $urlRouterProvider, $locationProvider){

        $qProvider.errorOnUnhandledRejections(false);
        $urlRouterProvider.otherwise('home');
        //$locationProvider.html5Mode({ enabled: true, requireBase: true }).hashPrefix('!');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'js/components/home/home.template.html',
                controller: 'homeCtrl'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'js/components/profile/profile.template.html',
                controller: 'profileCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'js/components/about/about.template.html',
                controller: 'aboutCtrl'
            });  

    });