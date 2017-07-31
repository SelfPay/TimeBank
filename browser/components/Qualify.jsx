import React, {Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable'

import RaisedButton from 'material-ui/RaisedButton';

class Qualify extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div id="insideQualify">
        <br/>
        <br />
        <RaisedButton label="Get info on current deposit" className='qualifyButton' primary={true} onClick={() =>this.props.choose('getInfo')}/>
        <br/>
        <br/>
        <RaisedButton label="Deposit ETH for a fixed time" className='qualifyButton' primary={true} onClick={() =>this.props.choose('depositFunds')}/>
        <br/>
        <br/>
        <RaisedButton label="Deposit Tokens for a fixed time" className='qualifyButton' primary={true} onClick={() =>this.props.choose('depositTokens')}/>
        <br/>
        <br/>
        <RaisedButton label="Withdraw Assets" className='qualifyButton' primary={true} onClick={() =>this.props.choose('withdrawFunds')}/>
      </div>
    )
  }
}

export default muiThemeable()(Qualify)