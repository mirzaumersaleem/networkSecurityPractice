var login =function(user,password){

    console.log(user,password)
    if(user==="mirza@gmail.com" && password==="mirza"){
        return true;
    }
    else{
        return false;
    }
}

module.exports=login;