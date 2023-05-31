//returns the first longest string of combination of k substrings from array strarr

function longestConsec(strarr, k) {
    //check for bad data
    if(!strarr.length || k > strarr.length || k<=0){return ''}

    // make a new array of k-merged elements
    const kmerge = []
    function kstrmerge(arr,num){
        for(i=0; i<=arr.length-num; i++){
            let kstring = ''
            for(j=i; j<i+num; j++){
                kstring += strarr[j]
            }
            kmerge.push(kstring)
        }
    }
    kstrmerge(strarr,k)

    function longestString(karray){
        let strlength = 0
        karray.forEach(str => strlength = str.length > strlength ? str.length : strlength )
        let thestrings = []
        karray.forEach(targetstr => {if(targetstr.length === strlength){thestrings.push(targetstr)}})
        return thestrings[0]
    }
    return(longestString(kmerge))
}


//test cases

//should return 'folingtrashy'
longestConsec(strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)

//should return 'abigailtheta'
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
