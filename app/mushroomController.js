"use strict";

app.controller("mushroomCtrl", function($scope, mushroomFactory){

    // putting scope in a variable
    // so i don't have to type '$scope' all the damn time
    const vm = $scope;

    
    // get the shrooms
    const getShrooms = function(){
        mushroomFactory.loadShrooms()
            .then((data)=> {
                console.log("data", data);
                vm.mushrooms = data;
                console.log("vm.mushrooms", vm.mushrooms);
            });
    };

    getShrooms();

});