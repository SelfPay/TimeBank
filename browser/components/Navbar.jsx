import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router-dom';


const Dropdown = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link to='/FAQ'><MenuItem primaryText="FAQ" /></Link>
  </IconMenu>
);

export default (props) => {

  let version = ''
  if (props.version === '1') version = 'Mainnet'


return (<AppBar
  title="TimeBank"
  iconElementLeft={<Dropdown/>}
  iconElementRight={<div ><h1 style={{margin: 0, marginTop: 5, fontWeight: 400}}>{version || 'Not Connected to Mainnet'}</h1></div>}
/>)
}