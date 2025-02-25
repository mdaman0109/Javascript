const accountId = 144553  //won't change ever as it is constant
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //it will also work but kabhi use mt krna
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])  //used to print multiple varibles at once in a tbular format