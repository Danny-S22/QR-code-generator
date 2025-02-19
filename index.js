import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([{
    message: 'Put your URL here: ',
    name: 'url'
    },
 ])
  .then((answers) => {
    const url = answers.url;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('your_qr.png'));
    console.log('QR code generated successfully!');
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});