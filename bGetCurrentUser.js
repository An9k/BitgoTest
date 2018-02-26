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
    console.dir(result);
    console.dir("...........AUTHENTICATION COMPLETED");

    bitgo.me({}, function callback(err, user) {
        if (err) {
            // handle error
            console.log('Error retrieving current user: ');
        }
        // etc
    });

});
