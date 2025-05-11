//Using Try catch and finally Also throw exception

function divid(a,b){
    if(b==0){
        throw new Error("Can't divid by zero ");
    }
    return a/b;
}
try{
console.log(divid(12,0));
}
catch(error){
console.log("chought the error "+error);
}
finally{
    console.log("I am finally block");
}

//Example of asyn
async function getdata() {
    try{
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    }
    catch(error){
console.log("Error in data fetching "+ error);

    }
    finally{
console.log("I am finally block");
    }
}
getdata();
