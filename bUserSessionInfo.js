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

    //Session info
    bitgo.session({}, function callback(err, session) {
        if (err) {
            // handle error
            console.log("………Error getting session");
        }
        console.dir(session);
    });


});


