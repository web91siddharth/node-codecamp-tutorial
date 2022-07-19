const os = require('os')

//info about current system user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOsDetails = {
    name: os.type(),
    relese: os.release(),
    TotalMemory: os.totalmem(),
    FreeMemory: os.freemem(),
}
console.log(currentOsDetails);