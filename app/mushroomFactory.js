"use strict";

app.factory("mushroomFactory", function($q, $http, fbCreds){

    const url = fbCreds.databaseURL;

    // a utility to pull the values for each shroom from the array of objects
    // whose one property is that mushroom's name and whose remaining values are yet another layer deep in their own object
    // to do this, it maps each mushroom's values to a new array, assigning it a name property
    // corresponding to it's original key
    const getShrooms = data => {
        return data.map((mushroom)=> {
            mushroom[Object.keys(mushroom)[0]].name = Object.keys(mushroom)[0];
            return mushroom[Object.keys(mushroom)[0]];
        });
    };

    const loadShrooms = function(){
        return $q((resolve, reject)=>{
            $http.get(`${url}/mushrooms.json`)
                .then((data)=> {
                    console.log("data.data", data.data);
                    resolve(getShrooms(data.data));
                });
        });
    };

    return {loadShrooms};

});