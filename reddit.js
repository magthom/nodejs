const rp = require("request-promise"),
    fs = require("fs");

rp("https://reddit.com/r/popular.json")
    .then(res => JSON.parse(res))
    .then(data => {
        let articleArr = [];
        data.data.children.forEach(article => {
            let obj = {
                title: article.data.title,
                url: article.data.url,
                author: article.data.author
            }
            articleArr.push(obj);
        });
        fs.writeFile("./popular-articles.json", JSON.stringify(articleArr), (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })
    .catch(err => console.log(err));