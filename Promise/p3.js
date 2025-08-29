const prom=Promise.reject(100);
const prom2=Promise.reject(150);
const prom3=Promise.reject(200);

Promise.all([prom,prom2,prom3]).then((v)=>
{
    console.log(v);
}).catch((v)=>
{
    console.log(v);
})