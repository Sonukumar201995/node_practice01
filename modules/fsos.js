let fs=require('fs');
let os=require('os');

let user=os.userInfo();
console.log(user);
console.log(user.username);


fs.appendFile('creating.txt','hi'+user.username+'!',()=>{
    console.log('file is generated');
})

