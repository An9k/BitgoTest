const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo();

if (process.argv.length < 6) {
    console.log('usage:\n\t' + process.argv[0] + ' ' + process.argv[1] + ' <user> <pass> <otp> <walletId> <url>');
    process.exit(-1);
}

const user = process.argv[2];
const password = process.argv[3];
const otp = process.argv[4];
const walletId = process.argv[5];
const url = process.argv[6];


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


    bitgo.wallets().get({ "id": walletId }, function(err, wallet) {
        wallet.addWebhook({ url: url, type: 'transaction' }, function callback(err, result) {
            console.dir(result);
            console.dir("...........ADD WEBHOOK COMPLETED");
        });
    });

});
