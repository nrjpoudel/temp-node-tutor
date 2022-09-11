const http = require('http')

const server = http.createServer((req, res) => 
{
    console.log(req)
    res.write('welocome to your homepage')
    res.end()
})

server.listen(5001)

