import React, {Component} from 'react';
//Material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';


class HomeScreen extends Component {
    componentDidMount(){
        document.body.style.html = '100%';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundImage = 'linear-gradient(to bottom, white 00%, lightgray 100%)';
        
    }

    handleClick(){
        alert('Test');
    }

    render(){
        return(
            <div>
                <div >
                    {/* Navbar */}
                    <AppBar  style={{backgroundColor: 'rgba(255,157,56,1)'}}>
                        <Toolbar>
                        <Typography variant="h5" color="inherit">
                            DonateNow
                        </Typography>
                        </Toolbar>
                    </AppBar>

                    {/* DonateNow + Search Bar */}
                    <div style={{alignContent: 'center', marginTop: '150px',}}>
                        <p style={{alignItems: 'center', textAlign: 'center', fontSize: 50, textDecoration: 'none'}}>DonateNow</p>
                        <div style={{display: 'flex', justifyContent: 'center', marginLeft: -500, marginTop: -15}}>
                            <Chip label="Option 1" style={{ marginLeft: 5, marginRight: 10}} onClick={this.handleClick}/>
                        </div>
                        <Paper style={{padding: '2px 4px',display: 'flex',alignItems: 'center',width: 600,  marginTop:10,marginLeft: 'auto', marginRight: 'auto', borderRadius: 10}}  elevation={1}>
                            
                            <InputBase  placeholder="Search to Donate" style={{width: 600, marginLeft: 15}} />

                            <Divider styles={{width: 1,height: 28,margin: 4,}} />
                            <IconButton color="primary"  >
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>

                    {/* Categories */}
                    <div style={{alignContent: 'center', marginTop: '30px',}}>
                        <p style={{textAlign: 'center', fontSize: 18, textDecoration: 'none', opacity: 0.5}}>Categories:</p>
                        <div style={{display: 'flex',justifyContent:'center' ,alignContent: 'center', alignSelf: 'center',alignItems:'center',marginLeft:'auto', marginRight: 'auto'}}>
                            <Chip label="Option 1" style={{marginLeft: 5, marginRight: 10}} onClick={this.handleClick}/>
                            <Chip label="Option 2" style={{marginLeft: 5, marginRight: 10}} onClick={this.handleClick}/>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default HomeScreen;