
//HELLO WORLD
/*console.log('HELLO', 'WORLD')*/

//BABY-STEP
/*let result = 0

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}
console.log(result)*/

// MT FIRST I/O

/*const fs = require('fs') //fs module available in a variable named fs

const contents = fs.readFileSync(process.argv[2])

//All synchronous (or blocking) filesystem methods in the fs module end with  
  //'Sync'. To read a file, you'll need to use fs.readFileSync('/path/to/file')


const lines = contents.toString().split('\n').length - 1
console.log(lines)*/

//FILTERED LS

/*const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})*/

//MAKE IT MODULER

/*const filterFn = require('./mymodule.js') // call module
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})*/


//HTTP JSON API SERVER 

//solution
/*const http = require('http')
const url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}*/
/*//json time
	 {  
       "hour": 14,  
       "minute": 23,  
       "second": 15  
     }
*/

/*function unixtime (time) {
  return { unixtime: time.getTime() }
}*/
/*unix time +  milliseconds
{ "unixtime": 1376136615474 }*/

/*const server = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true)
  const time = new Date(parsedUrl.query.iso)
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
*/


//HTTP UPPERCASERER
/*
const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))*/

//HTTP FILE SERVER
/*const http = require('http')
const fs = require('fs') 
     const server = http.createServer(function (req, res) {  
       // request handling logic...  
       res.writeHead(200, { 'content-type': 'text/plain'})

       fs.createReadStream(process.argv[3]).pipe(res)
     })
	server.listen(Number(process.argv[2]))*/




/*//TIME SERVER 
const net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const nd = new Date()
  return nd.getFullYear() + '-' +
    zeroFill(nd.getMonth() + 1) + '-' +
    zeroFill(nd.getDate()) + ' ' +
    zeroFill(nd.getHours()) + ':' +
    zeroFill(nd.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))*/


//JUGGLING ASYNC
/*const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}*/


/*const filterFn = require('./mymodule.js') // call module
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})

*/

//HTTP CLIENT
/*const http = require('http')


//Write the String contents of each  
//"data" event from the response to a new line on the console (stdout). 

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)*/

//



//HTTP COLLECT
/*const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})*/