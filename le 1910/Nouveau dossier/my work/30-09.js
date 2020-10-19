var obj ={name:'ahmed',age:20};
undefined


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
undefined



function values(obj){
var arr=[] ;
each (obj,function(element,key) {
arr.push(element)});
return arr
    
}