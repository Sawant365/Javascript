const prom=new Promise((resolve,reject)=>
{
setTimeout(()=>{
    let age=41;
    if(age>40)
    {
        resolve("suceess");
    }
    reject("error");
},2000)
})
prom.then((v)=>
{
    console.log(v);
}).catch((e)=>
{
    console.log(e);
}).finally(()=>
{
    console.log("done");
})


