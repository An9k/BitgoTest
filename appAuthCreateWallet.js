const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo();

if (process.argv.length < 6) {
    console.log('usage:\n\t' + process.argv[0] + ' ' + process.argv[1] + ' <user> <pass> <otp> <label> <backupXpub>');
    process.exit(-1);
}

const user = process.argv[2];
const password = process.argv[3];
const otp = process.argv[4];
const label = process.argv[5];

let backupXpub = null;
if (process.argv.length > 6) {
    backupXpub = process.argv[6];
}

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


    // Create Wallet
    var wallet;
    bitgo.wallets().createWalletWithKeychains({
        passphrase: password,
        label: label
    }, function (err, result) {
        wallet = result.wallet.wallet;
        console.dir(wallet);
        var userKeychain = result.userKeychain;
        var backupKeychain = result.backupKeychain;
        console.dir(userKeychain);
        console.log('\n');
        console.dir(backupKeychain);
        console.log("...........WALLET CREATED")

        // Get wallet list
        var wallets = bitgo.wallets();
        wallets.list({}, function callback(err, data) {
            // handle error, do something with wallets
            for (var id in data.wallets) {
                var wallet = data.wallets[id].wallet;
                console.log(JSON.stringify(wallet, null, 4));
                console.log(".......WALLETS LIST")
            }
        });

    });



});
