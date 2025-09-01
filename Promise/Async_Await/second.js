function checkname(...names){
    const prom=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            if(names.includes("abc"))
            {
              return resolve("user found");
            }
            return reject("user not found");
        },3000)
    })

        return prom;
    }

    async function handlename()
    {
        let result=await checkname("abc","bcd","dcb");
        console.log(result);
    }


handlename();