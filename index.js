var ENC_DEC = require('./enc_dec');
var enc_dec = new ENC_DEC();

let encoded_file = "newecodedfile.enc";

// ENCODE A FILE
var inputFileName = 'rawfile.env';
var outputFileName = 'newecodedfile.enc';
enc_dec.encode(inputFileName, outputFileName, function (data) {
    console.log("*************** Encoded output *****************");
    console.log(data);
});

// DECODE A FILE
enc_dec.decode(__dirname + '/' + encoded_file, function (data) {
    console.log("*************** Decoded output *****************");
    console.dir(data);
});