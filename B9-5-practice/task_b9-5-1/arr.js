
function arrlen(name){ //function witch return lenght of array witn "name" as parametr
    return (name.length)
}

function arrobj(name, key){ //function witch return lenght of array with "name" and "key" as parametrs
    return (name[key])
}


var city = new Array ("Moskow", "New-York", "Paris", "Toronto", "Sydney"); //create array city

// add values to console log (for debug)
console.log(arrlen(city));
console.log(arrobj(city, 2));

var str_len = JSON.stringify(arrlen(city));
var str_obj = JSON.stringify(arrobj(city, 2));

confirm('Length of array is '+ str_len+ ' and object in position #2 is '+ str_obj);
