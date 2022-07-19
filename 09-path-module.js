
const path = require('path')
console.log(path.sep)

const filePath = path.join('/contents', 'subfolder', 'test.txt') // you can use path.join to join multiple paths like ,'folder1', 'folder2', 'file.txt'
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(filePath); // absolute path is the path from the root of the drive
console.log(absolute);
const absolutePath = path.resolve('/contents', 'subfolder', 'test.txt');
console.log(absolutePath);

