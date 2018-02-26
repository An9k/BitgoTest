const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo();

const user = "allen@allennguyen.com";
const password = "bitgosechallenge1203";
const otp = "000000";

bitgo.authenticate({
    username: user,
    password: password,
    otp: otp
}, function (err, result) {
    if (err) {
        return console.dir(err);
        throw new Error('Could not authenticate!');
    }
    console.dir("...........AUTHENTICATION COMPLETED");

    //code
    var keychains = bitgo.keychains();
    keychains.list({}, function callback(err, keychains) {
        if (err) {
            // handle error
            console.log("……Keychains List error!");
        }
        console.dir(keychains);
    });
});

