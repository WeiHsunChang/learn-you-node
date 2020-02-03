const fs = require('fs')
const path = require('path')
const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function callback(err, list){
    if(err == null){
        list.forEach(function filter(file){
            if(path.extname(file) == ext){
                console.log(file)
            }
        })
    }
})