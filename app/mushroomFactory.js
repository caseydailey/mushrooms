"use strict";

app.factory("mushroomFactory", function($q, $http, fbCreds){

    const url = fbCreds.databaseURL;

    const arrayFrom = function(obj){
        return Object.keys(obj).map((key)=> obj[key]);
    }

    const loadShrooms = function(){
        return $q((resolve, reject)=>{
            $http.get(`${url}/mushrooms.json`)
                .then((data)=> resolve(arrayFrom(data.data)));
        });
    };

    return {loadShrooms};

});