1-------week3-day2--------
var cube = function(x){
return x*x*x;
}



var fullname= function (first, last){
return firt+' '+last;}
undefined
var power= function (base,exp){
if(exp===0){
return 1;
}
return base*power(base,exp-1);
}


var sumCubes=function (numbers){
var total=0;
for(var i=0; i<numbers.length; i++){
total=total+cube(numbers[i]);
}
return total;
}
2----------------------------
function each(array, func) {
       for (var i = 0; i < array.length; i++) {
             func(array[i]);
       }
 }
 3-------------------------------------------
  function each(array, func) {
       for (var i = 0; i < array.length; i++) {
             func(array[i]);
       }
 }
 function sumSquares(array) {
       var total = 0;
       each(array, function(element,i) {
         total=total+(element*element)})
       return total;
 }
4----------------------------------
 function each(array, func) {
       for (var i = 0; i < array.length; i++) {
             func(array[i]);
       }
 }
  function sumCubes(array) {
       var total = 0;
       each(array, function(element,i) {
             total = total + cube(element)})
       return total;
}
5---------------------------------------
function each(array, func) {
       for (var i = 0; i < array.length; i++) {
             func(array[i]);
       }
 }
function product(array){
    var total = 1;
       each(array, function(element,i) {
         total=total*(element)})
       return total;
 }
6----------------------------------
function each(array, func) {
       for (var i = 0; i < array.length; i++) {
             func(array[i]);
       }
 }
function cubeAll(array) {
       var total = 0;
        var arr=[];
       each(array, function(element,i) {
         total=total+(element*element*element)
        arr.push(total)})
       return arr;
 }
 -------------Evening Lecture-------------
 1-----------
function each(array, func) {
       for (var i = 0; i < array.length; i++) {
             func(array[i], i);
       }
 }
 function indexedExponentials(array) {
var arr =[];
var total=0 ;
 each(array, function (element,i){
 total = (element**i)
 arr.push(total)
 })
return arr
}
2----------
function each(array, func) {
       for (var i = 0; i < array.length; i++) {
             func(array[i], i);
       }
 }
function evenIndexedOddNumbers(array) {
var arr =[];
 for (var i=0; i<array.length; i++){
if(i%2===0){
 arr.push(array[i])
 }
 }return arr
}