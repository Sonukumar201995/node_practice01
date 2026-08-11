const prompt=require('prompt-sync')();

let num=Number(prompt('Enter your number : '));
if(num%2==0)
{
    console.log("even")
}else
{
    console.log('odd')
}