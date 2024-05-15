const https = require('http')
const fs = require('fs')
// const { hostname } = require('os')

const hostname = "127.0.0.1"
const port = '80'

const home = fs.readFileSync('index.html')
const about = fs.readFileSync('about.html')
const contact = fs.readFileSync('contact.html')
const other = fs.readFileSync('other.html')

const server = https.createServer((req, res) =>{
    const url = req.url

    console.log(url)
    res.statusCode = 200
    res.setHeader('Content-type', 'html')

    if (url === '/'){
        res.end(home)
    }

    else if(url === '/about'){
        res.end(about)
    }

    else if(url === '/contact'){
        res.end(contact)
    }

    else if(url === '/other'){
        res.end(other)
    }

    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }

})


server.listen(port, hostname, ()=>{
    console.log(`server is at http://${hostname}:${port}/`)
})