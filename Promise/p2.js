const prom=Promise.resolve(100);
const prom2=Promise.reject("Wrong");

prom.then((v)=>
{
    console.log(v);
})
prom2.catch((v)=>
{
    console.log(v);

})