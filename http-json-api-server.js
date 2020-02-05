var http = require('http')
var url = require('url')

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time) {
    return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
    let parsedUrl = url.parse(req.url, true)
    let pathName = parsedUrl.pathname
    let time = new Date(parsedUrl.query.iso)
    let result

    switch (pathName){
        case '/api/parsetime':
            result = parsetime(time)
            break;
        case '/api/unixtime':
            result = unixtime(time)
            break;
    }

    if(result){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    }
    else{
        res.writeHead(404)
        res.end()
    }

})
server.listen(Number(process.argv[2]))