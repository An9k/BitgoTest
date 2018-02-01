const ACCESS_TOKEN = 'v2xca997326dc2a12cc40448e29b1f189afb89a8b14da8257dd140538b844939a69';

const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo({
    env: 'test',
    accessToken: ACCESS_TOKEN
});

bitgo.wallets().get({
    type: 'bitcoin',
    id: '2MuECqLd1upKs4mxvTn8en7ewMpxdho9Mrj'
}, function (err, wallet) {
    wallet.sendCoins({
        address: '2My3Pnify5Hc1PMR6N8176h7izqhBESNS9y',
        amount: 100000000,
        walletPassphrase: 'sechallengegoodluck!',
        minConfirms: 0
    }, function (err, result) {
        console.dir(result);
    });
});
