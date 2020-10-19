



function removeBook(array,title1){
for ( var i = 0; i<array.length; i++){
if ( array[i].title === title1){
array.splice(i, 1);
return array;
}
}
    return ' couldnt find ' + title1;
}











function displayMovie (movie){
return movie.title +' '+ movie.duration+ ' '+movie.actor
}



var array= []






function put(array,obj){
array.push(obj)
}



function displayMovies (array){
var result = "";
for (var i = 0; i<array.length; i++){
result = result + array[i].title + ' ' + array[i].duration + ' ' + array[i].actor + ' ' + array[i].rple + '\n';
}
return result;
}











function averageLength(array){
var result1 = 0;
for(var i = 0; i<array.length; i++){
result1 = result1 + array[i].duration; 
}
return result1/i;
}










function searchMovies(array, blind){
debugger
for (i = 0; i<array.length; i++){
    if ( array[i].title.substr(0,blind.length)=== blind.toLowerCase()){
    return array[i].title;
    }
}
return 'we cant find it'
}