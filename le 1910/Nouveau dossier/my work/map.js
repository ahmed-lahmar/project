function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 
undefined
 function map(array, f) { 
       var acc = []; 
       each(array, function(element, i) { 
             acc.push(f(element, i)); 
       }); 
       return acc; 
 }




 var people = [ 
       {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
       {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
       {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
       {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
       {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
 ]; 




 function ages(people) { 
       return map(people, function(person) { 
             return person.age;}); 
 }



 function firstname (people){

return map(people,function(element,i){
return element.name.first;});
}





function lastname (people){

return map(people,function(element,i){
return element.name.last;});
}



function fullname(people){
return map(people,function(element,i){
return element.name.first + ' ' + element.name.last ;});
}


--------------------------------



function abs (arr) {
return map(arr,function(element,i){
      if (element >= 0) { 
             return element; 
       } 
       return - element; });
}








------------------------------------
function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 
 function map(array, f) { 
       var acc = []; 
       each(array, function(element, i) { 
             acc.push(f(element, i)); 
       }); 
       return acc; 
 }






 function maximums(sampleInput){
var arrray= [];
var tot =0
 return map(sampleInput , function( element,i){
//tot = Math.max    (element);

console.log (element)
});

return arrary
}