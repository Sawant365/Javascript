const p1=Promise.resolve("hii");
const p2=Promise.resolve(404);
const p3=Promise.reject(403);

Promise.race([p2,p3,p1]).then((v)=>
{
    console.log(v);

}).catch((v)=>
{
    console.log(v);
})