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

    //Unlock Session
    bitgo.unlock({otp: otp}, function callback(err) {
        if (err) {
            // handle error
            console.log("………Session Unlocked error");
        }
        // etc
        console.log("………Session Unlocked");
    });


    //Lock Session
    bitgo.lock({}, function callback(err) {
        // ...
        console.log("………Session Locked");
    });

});
