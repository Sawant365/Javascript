function sum(a,b,...arr){
    let total=arr.reduce((a,b)=>{
        n=a+b;
        return n;
    });
    console.log(a+b+total);
}
sum(10,20,50);
sum(10,20,30);
sum(10,20);
// console.log(total);
