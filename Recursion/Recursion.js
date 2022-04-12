// using Recursion

// function countDown(num) {
//     if (num <= 0) {
//         console.log("All is Done");
//         return;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }
//   var c =   countDown(3);
//   console.log(c);


// using iterative function
// function countDown(num){
//     for(var i = num; i > 0; i--){
//         console.log(i);
//     }
//     console.log("All done!")
// }


// second recursive function 

// function sumRange(num){
//     if(num === 1) return 1; 
//     return num + sumRange(num-1);
//  }
 
//  var s= sumRange(4)
//  console.log(s);
                   
// //  factorial iteratively
// function factorial(num){
//     let total = 1;
//     for(let i = num; i > 1; i--){
//         total *= i
//     }
//     return total;
// }
// var s= factorial(40)
//  console.log(s);

// factorial recursively

// function factorial(num){
//     if(num === 1) return 1;
//     return num * factorial(num-1);
// }
// var s= factorial(14)
//  console.log(s);

// Helper method recursion
// function collectOddValues(arr){
    
//     let result = [];

//     function helper(helperInput){
//         if(helperInput.length === 0) {
//             return;
//         }
        
//         if(helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }
        
//         helper(helperInput.slice(1))
//     }
    
//     helper(arr)

//     return result;
// }

//  var cov =   collectOddValues([1,2,3,4,5,6,7,8,9])
//  console.log(cov);


// recursive 
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

var c = collectOddValues([1,2,3,4,5])
        console.log(c);                                
                                                                
                                                                             
                            
            