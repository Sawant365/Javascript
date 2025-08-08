// functiona scope

// function demo()
// {
//   var number=100;
  
//   console.log(number);
// }
// demo();



// block level scope
// function demo()
// {
    
//     if(true){
//         var num=200; 
//         console.log(num);
//     }
    
// }

// demo();


// global scope
var number=300;
function demo(){
    console.log(number);
}
demo();
if (true)
{
    number=20;
}

console.log(number);

