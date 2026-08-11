function callback(){
    console.log('this is call back function')
}

let add=(a,b)=>{
    let res= a+b;
    console.log(res)
    callback();
}
add(10,20,callback);
