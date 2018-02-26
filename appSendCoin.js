const ACCESS_TOKEN = 'v2xcd8e80019dd985688a65f7884add069e4228eac7d0a850a0a99d6d247cc26a01';

const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo({
    env: 'test',
    accessToken: ACCESS_TOKEN
});

bitgo.wallets().get({
    type: 'bitcoin',
    id: '2NBfVBYdSKMkEWdXy5tghKxNNbKPPN8qtXd'
}, function (err, wallet) {
    wallet.sendCoins({
        address: '2MwHF32YNGHaw239UujeMHVDdYFrKkkFmqg',
        amount: 1000000,
        walletPassphrase: 'sechallengegoodluck!',
        minConfirms: 0
    }, function (err, result) {
        console.dir(result);
    });
});


