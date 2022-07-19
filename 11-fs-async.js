const { readFile, writeFile } = require('fs');
console.log("starting...");
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log("first-error=>" + err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log("second-error=>" + err);
            return;
        }
        const second = result;        

        writeFile(
            './content/result-async.txt', 
            `The result is: \n${first},\n${second} `,
            {flag: 'a'},
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log('Done with one task');
            }
        );

    });
    
});
console.log('Staring the next one');
