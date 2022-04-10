// // linear Search
// function LinearSearch(arr, val){
//     for (var i = 0; i < arr.length; i++) { 
//       if (arr[i] === val) return 1;
//     }
//     return -1;
// }
//   var Ls = LinearSearch([12,34,56,78,90,124,333], 11);
//   console.log(Ls);

// BinarySearch
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === elem ? middle : -1;
// }
//  var bs = binarySearch([12,32,45,65,67], 65)
//  console.log(bs);






function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)

// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)

function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}
var ns = naiveSearch("lorie loled", "lol")
console.log(ns);