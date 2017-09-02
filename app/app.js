"use strict";

var app = angular.module('mushroomApp', ['ngRoute']);

app.config(($routeProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'partials/mushroom-list.html',
            controller: 'mushroomCtrl'
        })
        .otherwise('/');

});

