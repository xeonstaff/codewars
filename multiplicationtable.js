//make a 2D array multiplication table matrix of size 'size'

function multiplicationTable(size) {
    let masterarray = []
    for(i=1; i<=size; i++){
        subarray = []
        for(j=1; j<=size; j++){
            subarray.push(i*j)
        }
        masterarray.push(subarray)
    }
    return masterarray
}
