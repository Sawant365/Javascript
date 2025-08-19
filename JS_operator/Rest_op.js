let obj={
    name:"piya",
    email:"piya@gmail.com",
    pin:411030,
    city:"pune"
}

let {name,email,...obj1}=obj;
console.log(name);
console.log(email);
console.log(obj1);




