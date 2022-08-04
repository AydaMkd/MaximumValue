// Check for Index of first occurence
function indexOfMax(arr){
    // check that the array has at least one first value
    if (arr[0] == null){
        console.log("Array can not be null!");
        return
    }
    //check that all array elements are integers
    for (let i = 0 ; i<arr.length; i++){

        if (Number.isInteger(arr[i])== false){
            console.log(arr[i]+ " is not an integer, please make sure all array elements are ints")
            return
        }
        
    }
    const max = Math.max(...arr);
    
    const index = arr.indexOf(max);
    console.log("index of the highest value in the array is "+ index);
    
    
    }
indexOfMax([0,6])


   

//Find all the indexes ,in case the highest value has more than one occurence within the array
    
    function indexOfMaximums(arr){
        // check that the array has at least one first value
    if (arr[0] == null){
        console.log("Array can not be null!");
        return
    }
    //check that all array elements are integers
    for (let i = 0 ; i<arr.length; i++){

        if (Number.isInteger(arr[i])== false){
            console.log(arr[i]+ " is not an integer, please make sure all array elements are ints")
            return
        }
        
    }
        let maxi = []
    
        const max = Math.max(...arr);
        
      
        for ( const num of arr){
            if (num == max){
                maxi.push(arr.indexOf(num))
            }
    
        }
       
    console.log("index(es) of the highest value in the given array is (are) "+ maxi);
        
        }
  indexOfMaximums([1, 2, 8])
