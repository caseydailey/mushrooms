"use strict";

app.factory("mushroomFactory", function($q, $http){

    const loadShrooms = function(){
        return $q((resolve, reject)=>{
            $http.get()
        })
    }

});