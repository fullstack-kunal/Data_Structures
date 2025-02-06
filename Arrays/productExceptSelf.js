
// Given an array arr[] of n integers, construct a product array res[] (of the same size) such 
// that res[i] is equal to the product of all the elements of arr[] except arr[i]. 




function productExceptSelf(arr) {

    let arr1 = new Array(arr.length).fill(1);

    // console.log(arr1)

    

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(i,j)
        if(i !== j) {
            arr1[i] = arr1[i] * arr[j]
        }
    }
  }

  return arr1;
}

console.log(productExceptSelf([10, 3, 5, 6, 2]));
