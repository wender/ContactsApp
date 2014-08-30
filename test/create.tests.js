'use strict';

describe('Test for Create and Update contacts', function(){
    beforeEach(module('contactBook.controllers'));
    var ContactsFactory = {
            contacts : [],
            add : function(contact){
                this.contacts.push(contact);
            },
            getAll : function(){
                return this.contacts;
            },
            get : function(){
                return this.contacts[0];
            },
            setLocalStorage : function(){
                return true;
            },
            update : function(contact){
                this.contacts[0] = contact;
            }
        },
        location = {
            path: function(p){
                return p;
            }
    };

    it('should return 0 contacts initially and then add one',inject(function($rootScope, $controller) {
        var $scope = $rootScope.$new();

        $controller('createCtrl',{$scope:$scope, $location:location, ContactsFactory:ContactsFactory});

        // First check if there's no records on my mock
        expect(ContactsFactory.getAll().length).toBe(0);

        // Set scope data
        $scope.contact = {
            'id' : 1,
            'name' : 'Questrade',
            'address' : '5700 Yonge Street, Ground Floor – North Tower - Toronto, Ontario, Canada',
            'phone' : '1.888.783.7866'
        };

        // Call add
        $scope.add();

        // Check if we now have one record
        expect(ContactsFactory.getAll().length).toBe(1);

    }));

    it('Name should be "Questrade" and be updated to "QTG"',inject(function($rootScope, $controller) {
        var $scope = $rootScope.$new(),
            $routeParams = {id:1};

        $controller('editCtrl',{$scope:$scope, $routeParams:$routeParams.id, $location:location, ContactsFactory:ContactsFactory});

        // Check if name is Questrade
        expect(ContactsFactory.get($routeParams.id).name).toBe('Questrade');

        // Set scope with new name QTG
        $scope.contact = {
            'id' : 1,
            'name' : 'QTG',
            'address' : '5700 Yonge Street, Ground Floor – North Tower - Toronto, Ontario, Canada',
            'phone' : '1.888.783.7866'
        };

        // Call update
        $scope.updateContact();

        // Check if has been updated
        expect(ContactsFactory.get($routeParams.id).name).toBe('QTG');

    }));

});
