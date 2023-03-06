//given a 2D array of arrays of numbers, return a flattened and sorted (low to high) array

function flattenAndSort(array) {
    let flatarray = array.reduce((a,b) => a.concat(b),[])
    return flatarray.sort(function(a,b){return a-b});
}
