const request = require("request");
const { exec } = require("child_process");

const imagePath = "/Users/alexulanch/Developer/RandoCat/catPics/cat.jpg";
const appleScriptFilePath = "/Users/alexulanch/Developer/RandoCat/RandoCat.scpt";

let imageURL;

request("https://api.thecatapi.com/v1/images/search", (err, res, body) => {
  imageURL = JSON.parse(body)[0].url;
  console.log(err || imageURL);

  exec(`curl ${imageURL} -o ${imagePath}`, (err, stdout, stderr) => {
    if (err) {
      console.error("fucked up");
      console.error(stderr);
    } else {
      console.log("done");
      exec(`osascript ${appleScriptFilePath}`);
    }
  });
});
