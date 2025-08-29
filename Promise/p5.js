const p1=Promise.resolve("Hello");
const p2=Promise.resolve("Kay re");
const p3=Promise.reject("Zal ka");
const p4=Promise.reject("Done");

Promise.any([p3,p4]).then((v)=>
{
    console.log(v);
})
.catch((v)=>
{
    console.log(v);
})