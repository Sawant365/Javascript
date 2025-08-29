const prom=Promise.resolve("Hii");
const prom2=Promise.resolve("Bye");
const prom3=Promise.resolve("Done");
const prom4=Promise.reject("Error");

Promise.allSettled([prom3,prom,prom2,prom4]).then((v)=>
{
    console.log(v);
})