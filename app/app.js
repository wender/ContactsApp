'use strict';
/* Routes */

var contactBook = angular.module('contactsBook',['ngRoute','contactBook.controllers','contactBook.services', 'mask']).
    config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/create',{templateUrl:'partials/create.html', controller: 'createCtrl'});
        $routeProvider.when('/edit/:id',{templateUrl:'partials/edit.html', controller: 'editCtrl'});
        $routeProvider.when('/list',{templateUrl:'partials/list.html', controller: 'listCtrl'});
        $routeProvider.otherwise({redirectTo: '/list'});
    }]);
