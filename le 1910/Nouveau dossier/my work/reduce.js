function each(coll, func) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   func(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   func(coll[key], key); 
             } 
       } 
 }



function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }




function product(numbers){
    return reduce(numbers, function(result, number){
    return result * number;
}, 1)
}





var arr = [1, 2, 3, 4, 5, 6, 7]








-------------------------------------------------------



function factorial(n){
    return reduce(range(1,n+1), function(result, number){
        return result * number
}, 1)
}








function averageAge (people){
    return reduce ( people , function(total,element){
        return (total +  element.age)  
    },0) / people.length
    
}


 function sumBy(numbers){
return reduce (numbers , function ( result,number){
return result+number 
}, 0)
 }





 function max (numbers){
 return reduce ( numbers , function (result , element ) {
 if (element > result ) {
    result = element
 }
    return  result; 
 }, numbers[0]);
}
