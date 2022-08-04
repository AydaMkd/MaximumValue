
let x = 0;
let array = []

function add_numbers_to_array()
{
 // check if the input value is a number and not null
 let check =document.getElementById("text1").value;
 if (isNaN(check) == false && check != "undefined" && check != "" ){
// check if the input value is an integer

    if (Number.isInteger(+check) == true){
    
    number = document.getElementById("text1").value;
    
    array[x]= Number(number)
    x++;
    document.getElementById("text1").value = "";
    }
    // error message in case input is a number but not integer
else {
   
    document.getElementById("result").innerHTML = ' Please enter an integer';
 }}
 else {
    
    document.getElementById("result").innerHTML =' Please enter an integer';
 }
// Check if the array is not empty then display array values 
if (array.length>0){
    var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
 }
 else {
    document.getElementById("Result").innerHTML = "Please enter at least one value.";
 }

// error message in case input is not a number
 
  return array
}
// restart with an empty array
function deleteElements(){
   array= [];
  
   document.getElementById("Result").innerHTML = "Please enter at least one value.";
   
   document.getElementById("result").innerHTML = "";
}

function indexOfMax(){
let arr = add_numbers_to_array()
// check that array is not empty 
    if (arr.length>0){
    const max = Math.max(...arr);
    const index = arr.indexOf(max);
    let e = "Index of the first occurence of the highest value in this array is " +index + " (Index of value " + max + " ) "; 
    document.getElementById("result").innerHTML = e;
    }
// error message in case array is empty
    else {
        document.getElementById("result").innerHTML = " Please enter values in order to check for the maximum. Array can not be empty!"; 
    }

}

