const accountId = 144553
let accountEmail = "radheshyam33523@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

let accountState;

// accountId = 2 //not allowed

accountEmail = "radheshyam@gmail.com"
accountPassword = "12121212"
accountCity = "Bangaluru"

console.log(accountId)

/*
prefer not be use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])