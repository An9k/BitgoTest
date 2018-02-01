const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo();


if (process.argv.length < 5) {
    console.log('usage:\n\t' + process.argv[0] + ' ' + process.argv[1] + ' <user> <pass> <otp> <id>');
    process.exit(-1);
}

const user = process.argv[2];
const password = process.argv[3];
const otp = process.argv[4];
const id = process.argv[5];

console.log('BitGoJS library version: ' + bitgo.version());
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

    bitgo.wallets().get({ "id": id }, function callback(err, wallet) {
        if (err) {
            throw err;
        }
        wallet.createAddress({ "chain": 0 }, function callback(err, address) {
            console.dir(address);
        });

        console.log("...........WALLET ADDRESS CREATED")
    });



});



