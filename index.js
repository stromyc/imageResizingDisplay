const util = require('util');

let Client = require('ftp');

const fs = require('fs');

const sharp = require('sharp');

const screenshot = require('screenshot-desktop');

const jimp = require('jimp');

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const express = require('express');

const app = express();

// screenshot.all().then((imgs) => {
//   // imgs: an array of Buffers, one for each screen
//   // console.log(imgs)
// })

// screenshot.listDisplays().then((displays) => {
//   // displays: [{ id, name }, { id, name }]
//   screenshot({ screen: displays[displays.length - 1].id })
//     .then((img) => {
//
//       console.log(screenshot)
//       // img: Buffer of screenshot of the last display
//     });
// })

//The path to where the image is saved.
// screenshot({ filename: 'shot.jpg' }).then((imgPath) => {
//   // imgPath: absolute path to screenshot
//   // created in current working directory named shot.png
//   console.log('Screenshot taken.')
//   console.log(imgPath)
// });

jimp
  .read('cn_waukesha_wide_18_0531.jpg')
  .then((croppedShot) => {
    return (
      croppedShot
        .crop(30, 200, 433, 200)
        //.resize(256, 256) // resize
        //.quality(60) // set JPEG quality
        //.greyscale() // set greyscale
        .write('nAckervilleNsussex.jpg')
    ); // save
  })
  .catch((err) => {
    console.error(err);
  });

const ackervilleSussexReg = { left: 30, top: 200, width: 433, height: 200 };
const sussexWaukeshaReg = { left: 433, top: 200, width: 433, height: 200 };
const waukeshaVernonReg = { left: 866, top: 200, width: 433, height: 200 };
sharp('cn_waukesha_wide_18_0531.jpg')
  .extract(sussexWaukeshaReg)
  .toFile('output1.jpg', function (err) {
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });

sharp('cn_waukesha_wide_18_0531.jpg')
  .extract(ackervilleSussexReg)
  .toFile('output2.jpg', function (err) {
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });

sharp('cn_waukesha_wide_18_0531.jpg')
  .extract(waukeshaVernonReg)
  .toFile('output3.jpg', function (err) {
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });
// let configFTP = {
//   host:"ftp.chrisstromberg.com",
//   user:"layout@chrisstromberg.com",
//   passworkd:"layout20"
// };

// use npm ftp to get directory of ftpserver
// let c = new Client();

//   c.on('ready', function() {

//     c.list(function(err, list) {
//       if (err) throw err;
//       console.dir(list);
//       c.end();
//     });
//   });

//   c.on('ready', function() {

//       c.put('cropedSHot-small-bw.jpg', 'shotTestFTp.jpg', function(err) {

//         if (err) throw err;
//         c.end();
//       });

//     });

//   // connect to localhost:21 as anonymous
// c.connect({
//   host: 'ftp.chrisstromberg.com',
//   user: 'layout@chrisstromberg.com',
//   password: 'layout20',
// });

app.listen(process.env.PORT || 8080, function () {
  console.log('Server started on port 8080');
});
