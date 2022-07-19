const { readFileSync, writeFileSync } = require('fs');
console.log("starting...");

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt', 
    `The result is: \n${first},\n${second} `,
    {flag: 'a'} //flag is used operation to append, write, create

);

console.log('Done with one task');
console.log('Staring the next one');
