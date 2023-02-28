//os modules

// const os = require('os')

//info about current user

// const user = os.userInfo();
// console.log(`The uptime is ${os.uptime()} seconds`);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalmemory: os.totalmem(),
//     freememory: os.freemem(),
// }
// console.log(currentOS);




//path module

// const path = require(`path`)
// console.log(path.sep);
// const filepath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filepath)

// const base = path.basename(filepath)
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')    
// console.log(absolute);

//fs module

// const fs = require('fs')

// const first = fs.readFileSync('./content/subfolder/text.txt', 'utf8')
// console.log(first);

// const don = fs.writeFileSync('./content/subfolder/like.txt', 'Here is the result')
// fs.readFile('./content/subfolder/text.txt',  'utf8' , (err, result)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// })

const http = require('http')
 const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
        // res.end()
        // return
        return
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
        // res.end()
        // return
        return
    }
    else{
        res.end(`<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>`)
        // res.end()
        return
    }
 })

 server.listen(5000)