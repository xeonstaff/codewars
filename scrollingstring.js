//given a string input, returns an array of strings of length length(string) where each 
//successive string rotates the first letter to the last place

function rotate(str){
    let scrollarray = []
    let currentstring = str
    for(i=0; i<str.length; i++){
        currentstring = currentstring.slice(1,).concat(currentstring.slice(0,1))
        scrollarray.push(currentstring)
    }
    return scrollarray
    
}
