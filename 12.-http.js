const http = require('http')

const server = http.createServer((req, res)=> {
  if (req.url === '/') {
    res.end('Welcome to our homepage')
    return
  }
  if (req.url === '/about') {
    res.end(`<h1>about us </h1>`)
    return
  }
  
    res.end(`
    <h1>Ooops !</h1>
    <p>We can't find that page</p>
    <a href='/'>back home</a>`)


})
server.listen(5000)
