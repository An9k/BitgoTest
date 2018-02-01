const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo();

if (process.argv.length < 2) {
    console.log('usage:\n\t' + process.argv[0] + ' ' + process.argv[1] + ' <transactionId>');
    process.exit(-1);
}

let txId = 'cdc88dc15d75b9b93b6111db59c21c47c63a1d55199db2015a5dfc7b60a4330c';
if (process.argv.length > 2) {
    txId = process.argv[2];
}

// Now get the Address information
bitgo.blockchain().getTransaction({ id: txId }, function(err, response) {
    if (err) { console.log(err); process.exit(-1); }
    console.log('Transaction info: ');
    console.log(JSON.stringify(response, null, 4));
});
