'use strict';
/* Services */

var services = angular.module('contactBook.services', []);

services.factory('ContactsFactory', function () {
    return {
        setLocalStorage : function(){
            if(typeof localStorage.contactList === "undefined"){
                var contactStruct = [{
                    'id' : 1,
                    'name' : 'Questrade',
                    'address' : '5700 Yonge Street, Ground Floor – North Tower - Toronto, Ontario, Canada',
                    'phone' : '1.888.783.7866'
                }];
                localStorage.setItem('contactList',JSON.stringify(contactStruct));
            }
        },
        getAll : function(){
            return JSON.parse(localStorage.contactList);
        },
        get : function(c){
            var contacts = JSON.parse(localStorage.contactList);
            for(var a in contacts){
                if(contacts[a].id == c.id){
                    return contacts[a];
                    break;
                }
            }
        },
        update : function(scope){
            var contacts = JSON.parse(localStorage.contactList);
            for(var a in contacts){
                if(contacts[a].id == scope.id){
                    contacts[a] = scope;
                }
            }
            localStorage.setItem('contactList',JSON.stringify(contacts));
        },
        add : function(scope){
            var contacts = JSON.parse(localStorage.contactList);
            var contact = {
                'id' : contacts.length?contacts[contacts.length-1].id+1:1,
                'name' : scope.name,
                'address' : scope.address,
                'phone' : scope.phone
            };
            contacts.push(contact);
            localStorage.setItem('contactList',JSON.stringify(contacts));
        },
        remove : function(c){
            var contacts = JSON.parse(localStorage.contactList);
            for(var a in contacts){
                if(contacts[a].id == c.id){
                    contacts.splice(a,1);
                }
            }
            localStorage.setItem('contactList',JSON.stringify(contacts));
        }

    }
});
