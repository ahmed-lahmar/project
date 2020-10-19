---- week3, day1 ---------
15 h 41
1-------------------------
function squar(x){
    return x*x;
}
function funCaller(a){
 return callback(a);
}
2----------------------------------
function firstValue(tabs,cubes){
    return cubes(tabs[0]);
}
var tabs = [5,6,9,8,5]
function cubes(x){
    return x*x*x;
}
-----------
function firstVal(o,cube){
    return cube(o[0]);
}
undefined
function callCube(g){
    return g*g*g;
}
undefined
var t = [5,4,9]
1 More Practice----------------------------
function sumAll (a,b,sum){
 return sum(a,b)
}
undefined
function sum (x,y){
 return x+y
}
2-----------------------------
function addSs(s, call){
    return call(a,b);
}
undefined
function call(a,b){
    var b='s';
    return a+b;
}
function addS ( str , callTo) {
 return callTo (str)
}
undefined
function callTo (str) {
 return str + 's'
}
3------------------------
function ftoc(n,callTemp){
    return callTemp(n);
}
undefined
function callTemp(t){
    return (t-32)*5/9;
}
Advanced--------------------+
1----------------------------
function multiplyByThree(myArray,callback){
    return callback(myArray);
}
function callback(myArray){
    var total=[];
    for( var i=0; i<myArray.length; i++){
        total.push(myArray[i]*3);
    }return total;
console.log (total)
}
2--------------------------------------
function leapYears(arrayOfYears, callagain){
    return callagain(arrayOfYears);
}
var arrayOfYears=[1995,2008,2012,2016]
function callagain(arrayOfYears){
var total=[];
for(var i=0; i<arrayOfYears.length; i++){
    if(arrayOfYears[i]%4===0 || arrayOfYears[i]%400===0) {
        total.push(arrayOfYears[i]); console.log(arrayOfYears[i]);
        }
}  return total ;
}


















