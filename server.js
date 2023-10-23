import inquirer from "inquirer";
import qr_image from "qr-image";
import fs from "fs";

// 1) Use the npm inquirer package to get the user input.

inquirer
    .prompt([
        {
            "message" : "Type in your URL: ",
            "name" : "URL"
        }
    ])
    .then((answers) => {
        // storing the user input URL into variable url
        const url = answers.URL;

        // 2) Use teh qr-image npm package to turn the user enter URL into a QR code image.

        var img = qr_image.image(url);
        img.pipe(fs.createWriteStream("QR_img.png"));

        // 3) Create a txt file to save the user input using the native fs node module.
        
        fs.writeFile("URL.txt", url,(err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })
    .catch((error) => {

    });