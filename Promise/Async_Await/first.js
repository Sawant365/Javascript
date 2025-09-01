function checkage(){
let age =21;

const prom=new Promise((resolve,reject)=>
{
   setTimeout(()=>{
    if(age>18){
        return resolve("eligible");
    }
     return reject("not eligible");
   },3000)
})
    return prom;
}
    checkage().then((v)=>
    {
        console.log(v);
    }).catch((e)=>
        {
     console.log(e);
    })


    console.log("************");












