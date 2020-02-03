const mymodule = require('./myModule.js')
const path = process.argv[2]
const ext = process.argv[3]
let filterFn = function(err, list){
    if(err){
        return console.log(err)
    }
    list.forEach(function (file){
        console.log(file);
    })
}

mymodule(path, ext, filterFn);