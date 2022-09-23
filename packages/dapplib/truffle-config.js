require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strategy dash mirror collect gown light army gate'; 
let testAccounts = [
"0xbf04209f4e3da779914f3a57f3eacb9affdd499e9773a527472254298b026e50",
"0x296430535ec51961d8442d992f38e7200f97e1936a3097f1d7a98591095dc623",
"0xa274a3e795537518e5d5ae08dfebddcd79ac2d71da0e8f89a9f40e06ac7541ea",
"0xf950ea334e260fabb56300b30e81155cbefa5abbdb14a6530e5ef1d7b287324f",
"0x757c6cd044c74758ec3478fbe25840307089596d6fcbe8cf238bb57bc282f2bf",
"0x92bbf1575d8882920773ac1adf3140c54d03c1f25e6e2f44a9853f1a6f44dccf",
"0x91b52af502ac0d8e25888d664e8a8801269eab8dbf2d72f73183f78ac893f3d1",
"0xa9bb9590dff0fe07be62e2510ac1ea5137ef834d544954c1c640e8665f2f0480",
"0x1c2a7ecb81f3bd582ad19e2c17135ea43436123f74ea23f33ddf3d32ad61ec83",
"0x966f83e5b25f1d06d119ee37ac334a5d6195b5aae85d0ed684f94c604843727d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

