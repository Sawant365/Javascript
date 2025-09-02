
// Anynomus function - taking function without any function name
let v= function()
{
    console.log("Welcome");
}
v();



// Anynomus callback function - withou function name call the function as call back

let arr=[10,20,30,40,50];
let arr2=arr.filter(
    function(i){
        return i>20;
    })
 console.log(arr2);
