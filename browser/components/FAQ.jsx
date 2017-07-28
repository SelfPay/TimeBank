import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

const FAQ = (props) => {
  console.log('FAQprops', props)

  return <div >
    <h1 className="FAQ">FAQ</h1>
    <div style={{backgroundColor:'#39528b', padding: 3, paddingLeft:3, paddingRight: 10, margin: 2}}>

    <h4 className="FAQ">How do I use the app?</h4>
    <p>You need to be connected to the live Ethereum network. Easiest way is to have the Chrome Extension Metamask installed, make sure you have Mainnet selected and just press Command + Shift + R (refreshes page and clears cache) on the
      homepage if it says 'Not Connected to Mainnet'.</p>
    <p>If you don't have Injected Web3 like Metamask, then it will attempt to connect to a local node running on
      localhost:8545</p>

    <p>And of course this website component is only providing a friendly UI for interacting with the smart contract, you can always transact with the smart contract directly.</p>

    <h4 className="FAQ">Where are the contracts?</h4>
      <p>Here verified on Etherscan: <a href="https://etherscan.io/address/0x459f90b6e8dc23bbf1ff4c2f22aa2149b4bd4cff">ETH Contract</a>,
        and <a href="https://etherscan.io/address/0x18ce0b9fedceb66e9fb7783bbddb4565232a9c22">Token Contract</a>.
      </p>

    <h4 className="FAQ">Anything else I should know?</h4>
      <p>Make sure you always have enough ETH in your account to pay for gas for each transaction, and of course use the same address to withdraw as you did to deposit.</p>
    <p>Not a need to know, but you can deposit multiple times to the smart contract and it will update the stored balance but
      still keep the original withdrawal date.</p>
    <p>And also as a safety check for bad user inputs (like someone putting an extra digit), the smart contract will not accept
    future dates of more than 5 years from the time of the transaction.</p>

    </div>
    <h1 className="FAQ">About</h1>
    <div style={{backgroundColor:'#39528b', padding: 5}}>


    <p>I'm a Fullstack Developer with a passion for decentralized applications and it's power to change the world.</p>
    <p>Reach me at isaac@eyezick.com</p>
    </div>
  </div>
};

export default muiThemeable()(FAQ);