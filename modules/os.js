let fs = require('fs');

fs.appendFile("creating.txt", "hi !", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('file is generated');
});