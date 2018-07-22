'use strict';

var myAPP = angular.module('myAPP', ['ngRoute', 'jsonFormatter']);

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
