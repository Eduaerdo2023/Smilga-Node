
// const _ = require('lodash')
// const items = [1, [2,3], [4, 5], 6]

// const newItems = _.flattenDeep(items)

// console.log(newItems);
// console.log('hello world');
/*
console.log('first task');
for (let index = 0; index < 2000; index++) {
console.log(index);
  
}
console.log('last task');



console.log('first task');
setInterval(() => {
  console.log('second task');
}, 5000);
console.log('hello');
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

*/

const http = require('http')

const server = http.createServer((req, res) => {
  for (let index = 0; index < 10; index++) {
    console.log(index);
    res.write(`${index}
    
    `)
    
  }
  console.log('finito');
  res.end('finale')
})
console.log('hello');
server.listen(5000, ()=> {
  console.log('server listening on port 5000');
})

console.log('bye');