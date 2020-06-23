const fs = require("fs"),
    path = require("path");


let chirps = [
    {
        "name": "maggie",
        "message": "what"
    },
    {
        "name": "charlie",
        "message": "huh"
    },
    {
        "name": "lucie",
        "message": "i was gonna say that"
    },
    {
        "name": "lucie",
        "message": "the amateur thing"
    },
    {
        "name": "josh",
        "message": "mute ur mics"
    },
];

const chirpsData = JSON.stringify(chirps);
fs.writeFile("./chirps.json", chirpsData, () => console.log("done"));

fs.readFile("./chirps.json", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
});