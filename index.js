var async2 = require('async')
var fs = require('fs')

function readFile(readFileCallback) {
    fs.readFile('package.json', function (error, file) {
        if (error) {
            readFileCallback(error);
        } else {
            readFileCallback(null, file);
        }
    });
}

function processFile(file, processFileCallback) {
    var stocksJson = JSON.parse(file);
    if (stocksJson['author'] != null) {
        stocksJson.author = 'nvovap';
        fs.writeFile('stocktest.json', JSON.stringify(stocksJson, null, 4), function (error) {
            if (!err) {
                console.log("File successfully written");
            }
            processFileCallback(err);
        });
    }
    else {
        console.log(ticker + " doesn't exist on the json");
        processFileCallback(null);
    }
}

async2.waterfall([
    readFile,
    processFile
], function (error) {
    if (error) {
        //handle readFile error or processFile error here
    }
});


function readFileAsync() {
    var promise = new Promise((resolve, reject) => {
        fs.readFile('package.json', function (error, file) {
            if (error) {
                reject(error);
            } else {
                resolve(file);
            }
        });
    })

    return promise
}

function processFileAsync(file) {
    var stocksJson = JSON.parse(file);
    if (stocksJson['author'] != null) {
        stocksJson.author = 'nvovap 2';
        fs.writeFile('stocktest.json', JSON.stringify(stocksJson, null, 4), function (error) {
            if (!err) {
                console.log("File successfully written");
            }
            return err;
        });
    }
    else {
        console.log(" doesn't exist on the json");
        return null;
    }
}


executionAwait = async () => {
    try {


        file = await readFileAsync();
        processFileAsync(file);

    } catch (e) {
        console.log(e)
    }
    
}

executionAwait();


