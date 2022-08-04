// Check for Index of first occurence
function indexOfMax(arr){

    const max = Math.max(...arr);
    
    const index = arr.indexOf(max);
    return index
    
    }

    let maxIndex = indexOfMax([1,2,4,2,4])

    console.log("index of the highest value in the array is "+ maxIndex);

//Find all the indexes ,in case the highest value has more than one occurence within the array
    
    function indexOfMaximums(arr){
        let maxi = []
    
        const max = Math.max(...arr);
        
      
        for ( const num of arr){
            if (num == max){
                maxi.push(arr.indexOf(num))
            }
    
        }
        return maxi
        
        }
    let maxIndexes = indexOfMaximums([1,2,4,2,4])

    console.log("index(es) of the highest value in the given array is (are) "+ maxIndexes);