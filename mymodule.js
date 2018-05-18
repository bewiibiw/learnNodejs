const fs = require('fs')
const path = require('path')
// 3 arugreement, export sigle function, 
module.exports = function (dir, filterStr, callback) {

	//error  fs.readdir
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }


    //the data will be your filtered list of files, as an Array
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}


/*You must write a module file to do most of the work. The module must  
  export a single function that takes three arguments: the directory name,  
  the filename extension string and a callback function, in that order. The  
  filename extension argument must be the same as what was passed to your  
  program. Don't turn it into a RegExp or prefix with "." or do anything  
  except pass it to your module where you can do what you need to make your  
  filter work*/