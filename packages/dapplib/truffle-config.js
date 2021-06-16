require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stomach crawl scrub exchange include end army gaze'; 
let testAccounts = [
"0xc8fa9bbe74413006eb37b459d8a6a43016acc9955ff7ea6820186639124f4272",
"0x5ed07def4d5ad15a950baee3d584ff229186c20f667d712230d80e23c70ec9de",
"0xf30e0560c41bd4721474e42579656803d7ede5d110070126f530cbea3578d6e9",
"0x11c76cc4c7c72b3ec261dc25a3537961722298adc12d87d7a047aa78f9527ffa",
"0xd58385f6dfdc7650b4a641d99077799e150b8da3ece6e79ae7409c259b09c192",
"0xe86bd55e3cb090df4fe19cc603b97e37369081d1f2cc1147efed98f9b47ddcd4",
"0x91b1290c1f6b2696a16788a245bc3cc2e9b403973ef4cc2a73bfdcff07209a24",
"0x88178c5d5358f3e802c573ca17d9f84fc5cf29cd0e639f5547a5b5893c684e22",
"0x4bf48a444667e1e068630c2307d7e202393a5de55d2db58982315120456ea28a",
"0x2b1d4ef4832ac9db0ae0e4bbf6b78ea18e9b33380bbfd536db3caa6630770023"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

