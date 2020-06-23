const rp = require("request-promise"),
    fs = require("fs"),
    path = require("path");

rp("https://reddit.com/r/popular.json")
    .then(res => JSON.parse(res))
    .then(data => {
        data.data.children.forEach(article => {
            if (path.extname(article.data.url) === '.jpg') {
                const options = {
                    uri: article.data.url,
                    encoding: "base64"
                };
                rp(options)
                    .then(res => {
                        fs.appendFile(`./downloads/${article.data.id}.jpg`, res, "base64", (err) => {
                            if (err) throw err;
                            console.log('The "data to append" was appended to file!');
                        });
                    });
            }
        });
    })
    .catch(err => console.log(err));