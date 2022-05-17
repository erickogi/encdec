const crypto = require('crypto');
const fs = require('fs');

const algo = 'AES256';
const secret = 'cQfThWmZq4t7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3t6v9y$B&E)H@McQfTjWnZr4u7x!z%C*F-JaNdRgUkXp2s5v8y/B?D(G+KbPeShVmYq3t6w9z$C';
var input = '';

var ENC_DEC = function(){
    var self = this;
    ENC_DEC.prototype.encode = function(inputFileName, outputFileName, callback){
        input = fs.readFileSync(inputFileName);
        var encoded = self.encodeText(input);
        fs.writeFileSync(outputFileName, encoded.content);
        callback(encoded);
    };

    ENC_DEC.prototype.decode = function(inputFileName, callback){
        input = fs.readFileSync(inputFileName);
        var decoded = self.decodeText({content:input.toString()});
        callback(decoded);
    };

    ENC_DEC.prototype.encodeText = function (text) {
        var cipher = crypto.createCipher(algo, secret)
        var encrypted = cipher.update(text, 'utf8', 'hex')
        encrypted += cipher.final('hex');
        return {
            content: encrypted,
        };
    }

    ENC_DEC.prototype.decodeText = function(encrypted) {
        var decipher = crypto.createDecipher(algo, secret)
        var dec = decipher.update(encrypted.content, 'hex', 'utf8')
        dec += decipher.final('utf8');
        return dec;
    }

   
};
module.exports = ENC_DEC;