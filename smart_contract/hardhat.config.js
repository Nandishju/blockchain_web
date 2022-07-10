// https://eth-rinkeby.alchemyapi.io/v2/b9t8e_Swzo7LzH13kUtuFFzhS04whphw

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/b9t8e_Swzo7LzH13kUtuFFzhS04whphw',
      accounts:['4f306f44df59a4419ab0f53bd9c0b4c3106ae103006f087df3ac6251398a9ea4']
    }
    // ropsten: {
    //   url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
    //   accounts: ['2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3'],
    // },
  },
};