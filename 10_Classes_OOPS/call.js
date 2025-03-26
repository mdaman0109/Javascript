function setusername(username)
{
    this.username = username;
}

function createuser(username,email,password)
{
    setusername.call(this, username)      // call is used to send its current context to other function... here we are sending it's 'this' to store username that will be passed from setusername as once it is called setusername will be removed from the call stack hence it's this won't have any value
    this.email = email
    this.password = password
   
}


const user = new createuser("aman","aman@xyz","123")
console.log(user)


