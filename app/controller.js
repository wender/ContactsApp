'use strict';
/* Controllers */

var contactBookCtrl = angular.module('contactBook.controllers', []);

contactBookCtrl.controller('listCtrl', ['$scope', '$location', 'ContactsFactory',
    function ($scope, $location, ContactsFactory) {
        ContactsFactory.setLocalStorage();
        $scope.editContact = function (id) {
            $location.path('/edit/' + id);
        };
        $scope.deleteContact = function (id) {
            ContactsFactory.remove({ id: id });
            $scope.contacts = ContactsFactory.getAll();
        };
        $scope.createContact = function () {
            $location.path('/create');
        };
        $scope.contacts = ContactsFactory.getAll();
    }]);

contactBookCtrl.controller('editCtrl', ['$scope', '$routeParams', '$location', 'ContactsFactory',
    function ($scope, $routeParams, $location, ContactsFactory) {
        $scope.list = function () {
            $location.path('/list');
        };
        $scope.updateContact = function () {
            ContactsFactory.update($scope.contact);
            $location.path('/list');
        };
        $scope.contact = ContactsFactory.get({id: $routeParams.id});
    }]);

contactBookCtrl.controller('createCtrl', ['$scope', '$location', 'ContactsFactory',
    function ($scope, $location, ContactsFactory) {
        $scope.contacts = function(){
            return ContactsFactory.getAll();
        };
        $scope.list = function () {
            $location.path('/list');
        };
        $scope.add = function () {
            ContactsFactory.add($scope.contact);
            $location.path('/list');
        };
    }]);
