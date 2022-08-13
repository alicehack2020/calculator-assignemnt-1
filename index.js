const Random = require('crypto-random');

const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});

 

readline.question('',value=>{
   
    var all=value.split(" ")

    var action=all[0]
    var num1=+all[1]
    var num2=+all[2]

    // console.log(action,num1,num2);

    if(action==="add")
    {
        console.log(num1+num2)
    }
    else if(action==="sub")
    {
        console.log(num1-num2);
    }
    else if(action==="mult")
    {
        console.log(num1*num2)
    }
    else if(action==="divide")
    {
        console.log(num1/num2);
    }
    else if(action==="sin")
    {
       console.log(Math.sin(num1)) 
    }
    else if(action==="cos")
    {
        console.log(Math.cos(num1)) 
    }
    else if(action==="tan")
    {
        console.log(Math.tan(num1)) 
    }
    else if(action==="random")
    {
        console.log(Random.value());   
    }
    
     
    readline.close();
})