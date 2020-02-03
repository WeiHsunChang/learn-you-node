const net = require('net')
const strftime = require('strftime')
const server = net.createServer(function (socket){
    socket.write(strftime('%F %H:%M'))
    socket.end('\n')
})
server.listen(Number(process.argv[2]))
//console.log(strftime('%F %H:%M'))