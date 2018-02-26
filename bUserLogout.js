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
    bitgo.logout({}, function callback(err) {
        if (err) {
            // handle error
            console.dir("...........log out Error");
        }
        // the user is now logged out.
        console.dir("...........the user is now logged out");
    });
});

