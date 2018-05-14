'use strict';

var myAPP = angular.module('myAPP', ['ngRoute', 'ngMdMultiLevelMenu']);

myAPP.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/Home.html',
            controller: 'HomeController'
        }).when('/students', {
            templateUrl: 'school/students/Student.html',
            controller: 'StudentController'
        }).when('/students/:sid', {
            templateUrl: 'school/students/Student.html',
            controller: 'StudentController'
        }).when('/teachers', {
            templateUrl: 'school/teachers/Teacher.html',
            controller: 'TeacherController'
        }).otherwise({
            redirectTo: '/home'
        });
    }]);

myAPP.config(['menuProvider', function(menuProvider) {
    menuProvider.items([{
        label: 'Item 1',
        icon: 'amazon',
        items: [{
            label: 'Item 1.1',
            link: 'item-1-1',
            icon: 'apple'
        }, {
            label: 'Item 1.2',
            link: 'item-1-2',
            icon: 'facebook'
        }]
    }, {
        label: 'Item 2',
        link: 'item-2',
        icon: 'windows'
    }, {
        label: 'Item 3',
        icon: 'google-plus',
        items: [{
            label: 'Item 3.1',
            link: 'item-3-1',
            icon: 'twitter'
        }, {
            label: 'Item 3.2',
            icon: 'github-box',
            items: [{
                label: 'Item 3.2.1',
                link: 'item-3-2-1',
                icon: 'whatsapp'
            }, {
                label: 'Item 3.2.2',
                icon: 'office',
                items: [{
                    label: 'Item 3.2.2.1',
                    link: 'item-3-2-2-1',
                    icon: 'hangouts'
                }]
            }]
        }]
    }, {
        label: 'Item 4',
        link: 'item-4',
        icon: 'linkedin',
        hidden: false
    }]);
}]);

myAPP.controller('Controller', ['$menu', function($menu) {
    $menu.callback(function(item) {
        console.log('You are going to', item.link);
    });
}]);