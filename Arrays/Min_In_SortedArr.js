

function minimumNumber(arr) {
    let result = arr[0]
    // console.log(result)
    for(let i=0;i<arr.length;i++) {
        result = Math.min(result,arr[i])
    }
    return result
}

console.log(minimumNumber([5, 6, -1, 2, 1, 4]))