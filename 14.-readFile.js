const { readFile, writeFile } = require('fs')
console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, data)=> {
    if(err) {
      console.log(err);
      return
    }
    console.log('done with the task');
  })
  
}


)