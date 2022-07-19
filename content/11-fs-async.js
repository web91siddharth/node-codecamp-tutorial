const { readFile, writeFile } = require('fs');

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
                console.log('done with this task')
            }
        );

    });
    
});
