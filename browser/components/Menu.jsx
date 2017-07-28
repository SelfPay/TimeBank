import React, {Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import PublicIcon from 'material-ui/svg-icons/social/public'
import Snackbar from 'material-ui/Snackbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';


class Menu extends Component {
  constructor(props) {
    super(props)


    this.state = {
      time: null,
      text: 'Use this input or slider',
      snackOpen: false,
      liveABI: [{"constant":false,"inputs":[],"name":"withdrawFunds","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_withdrawTime","type":"uint256"}],"name":"depositFunds","outputs":[{"name":"_fundsDeposited","type":"uint256"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"}],
      liveContractAddress: '0x459F90b6e8dc23bBF1fF4c2F22aa2149b4bd4CFf',
      liveTokenABI:[{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"withdrawTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_time","type":"uint256"},{"name":"_amount","type":"uint256"}],"name":"depositTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_holder","type":"address"}],"name":"getInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"}],
      liveContractTokenAddress: '0x18Ce0b9FeDCeB66e9fB7783BbdDB4565232a9c22',
      fundsToDeposit: 0,
      info: '',
      tokenInfo:'',
      depositTransaction: '',
      withdrawTransaction:'',
      authorizeTransaction:'',
      depositTokenTransaction:'',
      withdrawTokenTransaction:'',
      disabledDeposit: false,
      disabledTokenDeposit: false,
      selectedToken:'ANT',
      selectedTokenInfo:'ANT',
      selectedTokenWithdraw: 'ANT',
      tokenAmount:'',
      tokenTime: '',
      tokenText:'',
      ERC20ABI:[
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_from",
              "type": "address"
            },
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "name": "",
              "type": "uint8"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "version",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "name": "balance",
              "type": "uint256"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            },
            {
              "name": "_extraData",
              "type": "bytes"
            }
          ],
          "name": "approveAndCall",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            },
            {
              "name": "_spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "name": "remaining",
              "type": "uint256"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "_initialAmount",
              "type": "uint256"
            },
            {
              "name": "_tokenName",
              "type": "string"
            },
            {
              "name": "_decimalUnits",
              "type": "uint8"
            },
            {
              "name": "_tokenSymbol",
              "type": "string"
            }
          ],
          "type": "constructor"
        },
        {
          "payable": false,
          "type": "fallback"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_spender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
      ],
      tokens: {
        ANT: '0x960b236A07cf122663c4303350609A66A7B288C0',
        BAT: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
        BNT: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
        ICN: '0x888666CA69E0f178DED6D75b5726Cee99A87D698',
        REP: '0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5',
        SNT: '0x744d70fdbe2ba4cf95131626614a1763df805b9e'
      },
      allowance: 'Allowance Of',
      ABIResult: '',
      stepIndex: 0,
      BIGABI: [
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_from",
              "type": "address"
            },
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "name": "balance",
              "type": "uint256"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            },
            {
              "name": "_spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "name": "remaining",
              "type": "uint256"
            }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "setBalance",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "type": "function"
        }
      ],
    }

    this.handleSlider = this.handleSlider.bind(this)
    this.handleTokenSlider = this.handleTokenSlider.bind(this)
    this.handleText = this.handleText.bind(this)
    this.handleTokenText = this.handleTokenText.bind(this)
    this.handleETH = this.handleETH.bind(this)
    this.getInfoClick = this.getInfoClick.bind(this)
    this.depositFundsClick = this.depositFundsClick.bind(this)
    this.withdrawFundsClick = this.withdrawFundsClick.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTokenChoice = this.handleTokenChoice.bind(this)
    this.handleTokenInfoChoice = this.handleTokenInfoChoice.bind(this)
    this.handleTokenWithdrawChoice = this.handleTokenWithdrawChoice.bind(this)
    this.handleTokenAmount = this.handleTokenAmount.bind(this)
    this.handleAuthorizeClick = this.handleAuthorizeClick.bind(this)
    this.depositTokensClick = this.depositTokensClick.bind(this)
    this.getInfoTokenClick = this.getInfoTokenClick.bind(this)
    this.withdrawTokensClick = this.withdrawTokensClick.bind(this)

    this.getInfo = this.getInfo.bind(this)
    this.checkAuthorization = this.checkAuthorization.bind(this)
    this.depositFunds = this.depositFunds.bind(this)
    this.withdrawFunds = this.withdrawFunds.bind(this)
    // this.depositTokens = this.depositTokens.bind(this)

    this.testing = this.testing.bind(this)
  }

  handleSlider(event, value) {
    let days = (value * Date.now() / 40000 / 86400).toFixed(2)

    this.setState({time: days * 86400, text: (value ? (days + ' days from now') : ' '), disabledDeposit: false})
  }

  handleTokenSlider(event, value) {
    let days = (value * Date.now() / 40000 / 86400).toFixed(2)

    this.setState({tokenTime: days * 86400, tokenText: (value ? (days + ' days from now') : ' '), disabledTokenDeposit: false})
  }

  handleText(event) {
    let num = Number((event.target.value.trim()).split(' ')[0])

    this.setState({
      text: event.target.value,
      time: Math.ceil(num * 86400),
      disabledDeposit: !(typeof num === 'number' && num > 0)
    })
  }

  handleTokenText(event) {
    let num = Number((event.target.value.trim()).split(' ')[0])

    this.setState({
      tokenText: event.target.value,
      tokenTime: Math.ceil(num * 86400),
      disabledTokenDeposit: !(typeof num === 'number' && num > 0)
    })
  }

  handleETH(event) {
    this.setState({
      fundsToDeposit: window.web3.toWei(Number(event.target.value), 'ether'),
      disabledDeposit: !(event.target.value > 0)
    })
  }


  getInfoClick() {
    window.web3.eth.contract(this.state.liveABI).at(this.state.liveContractAddress).getInfo({from: window.web3.eth.accounts[0]}, (err, result) => {
      var result = result.toString().split(',')
      var futureDays
      if (!Number(result[1])) futureDays = 0
      else futureDays = ((result[1]-(Date.now()/1000))/86400).toFixed(2)

      this.setState({info: Number(window.web3.fromWei((result[0]), 'ether')).toFixed(4) + ' ETH, ' + futureDays + ' days from now'})
    })
  }

  getInfoTokenClick() {
    window.web3.eth.contract(this.state.liveTokenABI).at(this.state.liveContractTokenAddress).getInfo(
      this.state.tokens[this.state.selectedTokenInfo],
      window.web3.eth.accounts[0],
      (err, result) => {
      var result = result.toString().split(',')
        // console.log('Info Result:', result)
      var futureDays
      if (!Number(result[1])) futureDays = 0
      else futureDays = ((result[0]-(Date.now()/1000))/86400).toFixed(4)

      this.setState({tokenInfo: Number(parseFloat(result[1] / 10 ** 18).toPrecision(15)) + ' ' + this.state.selectedTokenInfo + ', ' + futureDays + ' days from now'})
    })

  }

  withdrawTokensClick() {

    window.web3.eth.contract(this.state.liveTokenABI).at(this.state.liveContractTokenAddress).withdrawTokens(this.state.tokens[this.state.selectedTokenWithdraw],{from:window.web3.eth.accounts[0]},
      (err,result)=>{
        if (result) this.setState({withdrawTokenTransaction:result,snackOpen:true})
        else console.log('Error Message:', err)
      })

  }

  depositFundsClick() {

    // console.log('Time', Math.ceil(Date.now() / 1000) + this.state.time)
    // console.log('Wei', this.state.fundsToDeposit)

    window.web3.eth.contract(this.state.liveABI).at(this.state.liveContractAddress).depositFunds(Date.now()/1000 + this.state.time,{from:window.web3.eth.accounts[0],value:this.state.fundsToDeposit},
      (err,result)=>{
        if (result) this.setState({depositTransaction:result, snackOpen:true})
        else console.log('Error Message:', err)
    })

  }

  withdrawFundsClick() {

    window.web3.eth.contract(this.state.liveABI).at(this.state.liveContractAddress).withdrawFunds({from:window.web3.eth.accounts[0]},
      (err,result)=>{
        if (result) this.setState({withdrawTransaction:result,snackOpen:true})
        else console.log('Error Message:', err)
      })
  }

  getInfo() {
    return <div>
      <RaisedButton label="ETH Info" primary={true} style={{marginRight: 5}} onClick={this.getInfoClick}/>
      <TextField
        disabled={true}
        floatingLabelText="ETH stored and future time"
        style={{flex: 1}}
        value={" ex: 23.022345 ETH, 1497476174" && this.state.info}
      />
      <br/>
      <RaisedButton label="Token Info" primary={true} style={{marginRight: 5}} onClick={this.getInfoTokenClick}/>
      <TextField
        disabled={true}
        hintText="0.0000 TOK, 0 days from now"
        style={{flex: 1}}
        value={this.state.tokenInfo}
      />

      <DropDownMenu id='dropdownTokenInfo'
                    style={{marginBottom:55, overflow: 'visible'}}
                    value={this.state.selectedTokenInfo}
                    onChange={this.handleTokenInfoChoice}
                    anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                    targetOrigin={{vertical: 'top', horizontal: 'left'}}>
        <MenuItem value={'ANT'} primaryText="ANT"/>
        <MenuItem value={'BAT'} primaryText="BAT"/>
        <MenuItem value={'BNT'} primaryText="BNT"/>
        <MenuItem value={'ICN'} primaryText="ICN"/>
        <MenuItem value={'REP'} primaryText="REP"/>
        <MenuItem value={'SNT'} primaryText="SNT"/>
      </DropDownMenu>
    </div>
  }

  depositFunds() {
    return <div>
      <RaisedButton label="Store ETH" primary={true} disabled={this.state.disabledDeposit} style={{marginRight: 5}}
                    onClick={this.depositFundsClick}/>
      <TextField
        hintText={this.state.text || 'Use this input or slider'}
        value={this.state.text}
        floatingLabelText="Days to access withdrawal"
        floatingLabelFixed={true}
        style={{marginLeft: 5}}
        onChange={this.handleText}
        onFocus={() => this.setState({text: ' ', time: 0})}
      />
      <TextField
        hintText="Amount of ETH to store"
        floatingLabelText="Doesn't include gas cost"
        floatingLabelFixed={true}
        style={{marginLeft: 5}}
        onChange={this.handleETH}
      />
      {this.state.depositTransaction ?
        <a href={'https://etherscan.io/tx/' + this.state.depositTransaction} target="_blank"><PublicIcon
          style={{verticalAlign: 'middle', marginLeft: 5}}/></a> : <div></div>}

      <Slider defaultValue={0.5} step={0.0000625} sliderStyle={{marginBottom: 10}}
              onChange={(event, value) => this.handleSlider(event, value)}/>
    </div>
  }

  depositTokens() {
    const {stepIndex} = this.state;

    return <div>
      <div style={{maxHeight: 400, marginLeft: 0}}>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
              <h4>Select your token</h4>
            </StepButton>
            <StepContent>
              <DropDownMenu value={this.state.selectedToken}
                            onChange={this.handleTokenChoice}
                            anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                            targetOrigin={{vertical: 'top', horizontal: 'left'}}>
                <MenuItem value={'ANT'} primaryText="ANT"/>
                <MenuItem value={'BAT'} primaryText="BAT"/>
                <MenuItem value={'BNT'} primaryText="BNT"/>
                <MenuItem value={'ICN'} primaryText="ICN"/>
                <MenuItem value={'REP'} primaryText="REP"/>
                <MenuItem value={'SNT'} primaryText="SNT"/>
              </DropDownMenu>
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
              <h4>Authorize TimeBank to withdraw token amount on your behalf</h4>
            </StepButton>
            <StepContent>
              <RaisedButton label="Authorize" primary={true} style={{marginRight: 5}} onClick={this.handleAuthorizeClick}/>
              <TextField
                hintText='Amount of tokens'
                floatingLabelText="Token Amount ex: 345.6789"
                style={{flex: 1}}
                onChange={this.handleTokenAmount}
                value={this.state.tokenAmount}
              />

              {this.state.authorizeTransaction ?
                <a href={'https://etherscan.io/tx/' + this.state.authorizeTransaction} target="_blank"><PublicIcon
                  style={{verticalAlign: 'middle', marginLeft: 5}}/></a> : <div style={{position:'absolute'}}></div>}

            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
              <h4>Confirm authorization before depositing</h4>
            </StepButton>
            <StepContent>
                <RaisedButton label="Confirm authorization" primary={true} style={{marginRight: 5}} onClick={this.checkAuthorization}/>
                <TextField
                  hintText='Returns authorized amount'
                  disabled={true}
                  floatingLabelText="Wait for authorization to complete"
                  style={{flex: 1}}
                  value={" ex: 23.022345 ETH, 1497476174" && `${this.state.allowance} Tokens`}
                />
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 3})}>
              <h4>Complete Deposit</h4>
            </StepButton>
            <StepContent>
              <RaisedButton label="Store Tokens" primary={true}
                            disabled={(this.state.allowance == 0 || typeof this.state.allowance == 'string') || this.state.disabledTokenDeposit}
                            style={{marginRight: 5}}
                            onClick={this.depositTokensClick}
              />
              <TextField
                hintText={this.state.tokenText || 'Use this input or slider'}
                value={this.state.tokenText}
                floatingLabelText="Days to access withdrawal"
                floatingLabelFixed={true}
                style={{marginLeft: 5}}
                onChange={this.handleTokenText}
                onFocus={() => this.setState({tokenText: ' ', tokenTime: 0})}
              />
              <TextField
                disabled={true}
                floatingLabelText={`Amount of ${this.state.selectedToken}`}
                floatingLabelFixed={true}
                style={{marginLeft: 5}}
                value={Number(this.state.allowance) > 0 ? this.state.allowance : 'Confirmation Required'}
              />
              {this.state.depositTokenTransaction ?
                <a href={'https://etherscan.io/tx/' + this.state.depositTokenTransaction} target="_blank"><PublicIcon
                  style={{verticalAlign: 'middle', marginLeft: 5}}/></a> : <div></div>}

              <Slider defaultValue={0.5} step={0.0000625} sliderStyle={{marginBottom: 10}}
                      onChange={(event, value) => this.handleTokenSlider(event, value)}/>
            </StepContent>
          </Step>
        </Stepper>
      </div>

      {/*<div>*/}
        {/*<h5 className="depositToken">4. Testinggg</h5>*/}
        {/*<RaisedButton label="Test ABI Supply" primary={true} style={{marginRight: 5}} onClick={this.testing}/>*/}
        {/*<TextField*/}
          {/*id="testingfield"*/}
          {/*disabled={true}*/}
          {/*style={{flex: 1}}*/}
          {/*value={this.state.ABIResult || 'supply here'}*/}
        {/*/>*/}
      {/*</div>*/}


    </div>
  }

  withdrawFunds() {
    return <div>
      <br/>
      <br/>
      <RaisedButton className="withdrawButton" label="Withdraw Funds" primary={true} onClick={this.withdrawFundsClick}/>

      {this.state.withdrawTransaction ?
        <a href={'https://etherscan.io/tx/' + this.state.withdrawTransaction} target="_blank"><PublicIcon
          style={{verticalAlign: 'middle', marginLeft: 5}}/></a> : <div style={{position:'absolute'}}></div>}

          <br/>

      <RaisedButton className="withdrawButton" label={`Withdraw ${this.state.selectedTokenWithdraw}`} primary={true} onClick={this.withdrawTokensClick}/>
      <DropDownMenu id='dropdownTokenInfo'
                    style={{marginBottom:55, overflow: 'visible'}}
                    value={this.state.selectedTokenWithdraw}
                    onChange={this.handleTokenWithdrawChoice}
                    anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                    targetOrigin={{vertical: 'top', horizontal: 'left'}}>
        <MenuItem value={'ANT'} primaryText="ANT"/>
        <MenuItem value={'BAT'} primaryText="BAT"/>
        <MenuItem value={'BNT'} primaryText="BNT"/>
        <MenuItem value={'ICN'} primaryText="ICN"/>
        <MenuItem value={'REP'} primaryText="REP"/>
        <MenuItem value={'SNT'} primaryText="SNT"/>
      </DropDownMenu>

      {this.state.withdrawTokenTransaction ?
        <a href={'https://etherscan.io/tx/' + this.state.withdrawTokenTransaction} target="_blank"><PublicIcon
          style={{verticalAlign: 'middle', marginLeft: 5}}/></a> : <div style={{position:'absolute'}}></div>}

    </div>

  }

  welcomeDiv() {
    return <div><h1 style={{color:'#FFFFFF',fontFamily:'Roboto, sans-serif'}}>Welcome To TimeBank!</h1></div>
  }

  handleRequestClose(){
    this.setState({
      snackOpen: false,
    });
  };

  handleTokenChoice(event, index, value){
    this.setState({selectedToken:value})
  }

  handleTokenInfoChoice(event, index, value){
    this.setState({selectedTokenInfo:value})
  }

  handleTokenWithdrawChoice(event, index, value){
    this.setState({selectedTokenWithdraw:value})
  }

  handleTokenAmount(event) {
    this.setState({tokenAmount: event.target.value})
  }

  handleAuthorizeClick() { //sends authorize
    // console.log('selected',this.state.tokens[this.state.selectedToken], this.state.tokenAmount)
    // console.log('1.', this.state.tokenAmount)
    // console.log('2.', (Number(this.state.tokenAmount) * 10 ** 18))
    // console.log('3.', (this.state.tokenAmount * 10 ** 18).toPrecision(15))

    window.web3.eth.contract(this.state.ERC20ABI).at(this.state.tokens[this.state.selectedToken]).approve(
      this.state.liveContractTokenAddress,
      (this.state.tokenAmount * 10 ** 18).toPrecision(15),
      {from:window.web3.eth.accounts[0]},
      (err,result)=>{
        if (result) this.setState({authorizeTransaction:result,snackOpen:true})
        else console.log('Error Message:', err)
      })
    // console.log('authorizeTransaction:', this.state.authorizeTransaction)
  }

  depositTokensClick() {

    // console.log('Time Chosen', Math.ceil(Date.now() / 1000) + this.state.tokenTime)
    // console.log('Time Now',Math.ceil(Date.now() / 1000))
    // console.log('Token Allowance', this.state.allowance)
    // console.log('Token Allowance Precision', (this.state.allowance * 10 ** 18).toPrecision(15))
    // console.log('Runway time', this.state.tokenTime)

    window.web3.eth.contract(this.state.liveTokenABI).at(this.state.liveContractTokenAddress)
      .depositTokens(
        this.state.tokens[this.state.selectedToken],
        Math.ceil(Date.now() / 1000) + this.state.tokenTime,
        (this.state.allowance * 10 ** 18).toPrecision(15),
        {from: window.web3.eth.accounts[0]},

        (err, result) => {
          if (result) this.setState({depositTokenTransaction: result, snackOpen: true})
          else console.log('Error Message:', err)
        })

  }

  checkAuthorization() { //checks authorize after it was sent
    window.web3.eth.contract(this.state.ERC20ABI).at(this.state.tokens[this.state.selectedToken])
      .allowance(window.web3.eth.accounts[0],this.state.liveContractTokenAddress, (err, result) => {
      this.setState({allowance:Number(parseFloat(result / 10 ** 18).toPrecision(15))})

      // console.log('allowance',this.state.allowance)

    })

  }

  testing(){
    console.log('selectedtokenTesting', this.state.tokens[this.state.selectedToken])
    window.web3.eth.contract(this.state.BIGABI).at(this.state.tokens[this.state.selectedToken]).setBalance(
      (500 * 10 ** 18),
      {from:window.web3.eth.accounts[0]},
      (err,result)=>{
        console.log('Error:',err,'Result:',result)
        if (result) this.setState({ABIResult:result.toString()})
        else console.log('Error Message:', err)
      })
  }

  render() {

    return (
      <div id="insideMenu">

        {this[(this.props.choice || 'welcomeDiv')]()}
        <Snackbar
          open={this.state.snackOpen}
          message="New transaction generated! See Globe for details."
          autoHideDuration={7000}
          onRequestClose={this.handleRequestClose}
          bodyStyle={{backgroundColor:'#3b4095'}}
        />
      </div>
    )
  }
}

export default muiThemeable()(Menu)