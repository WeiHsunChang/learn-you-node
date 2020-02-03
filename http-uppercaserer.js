const map = require('through2-map')
const http = require('http')

const server = http.createServer(function (req, res) {
    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase()
    })).pipe(res)
    console.log(req)
})
server.listen(Number(process.argv[2]))