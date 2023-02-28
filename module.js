/** 
 * Global variables in node
 * __dirname = path to current directory
 * __filename = file name
 * require = functionto use modules (common js)
 module = info about current module(file)
 process = info about env where the program is being executed
 */

//modules
const names = require('./names')
const sayHi = require('./display')
require('./function.js')

for(items in names){
    sayHi(items)
}
