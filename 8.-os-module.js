const os = require('os')
const user = os.userInfo()
console.log(user);
//console.log(`The system Uptime is ${os.uptime()} seconds`);
const currentOS = {
  name: os.type(),
  relese: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOS);
console.log(currentOS.totalMem/1000000);