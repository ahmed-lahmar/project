function reverseStr(str){
    var array = []
    var lastSpace = 0
    var word = ''
    var result = ''
    for(var i = 0; i < str.length; i++) {
        if(str[i] == ' ' || i === str.length-1) {
            if(i == str.length-1) {
                word = str.slice(lastSpace,i+1)
                array.unshift(word)
            } else {
                word = str.slice(lastSpace,i)
                array.unshift(word)
            }
            lastSpace = i
        }
    }
    for(var i = 0; i < array.length; i++) {
        result += array[i]
    }
    return result
}
