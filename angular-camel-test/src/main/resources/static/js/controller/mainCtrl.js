var app = angular.module("myApp",['ui.router','ui.calendar','ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state("index",{
                url: '/index',
                templateUrl:"index.html",
                controller:"mainCtrl"
            }).state("login",{
                url: '/login',
                templateUrl:"html/login.html",
                controller:"loginCtrl"
            }).state("registry",{
                url: '/registry',
                templateUrl:"html/registry.html",
                controller:"registryCtrl"
            }).state("overview",{
                url: '/overview',
                templateUrl:"html/overview.html",
                controller:"overviewCtrl"
            }).state("calendar",{
                url: '/calendar',
                templateUrl:"html/calendar.html",
                controller:"CalendarCtrl"
            })
        });
app.controller("mainCtrl",function ($rootScope,$scope) {
    $rootScope.isLandingPage = true;
    console.log("1"+$rootScope.isLandingPage);
})