import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import logo from '../images/logo.png';  
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      width: 200,
    },
  },
  drawerPaper: {
    width: 240,
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: 200,
    },
  },
  toolbar: theme.mixins.toolbar,
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    fontWeight: 'bold',
    fontSize: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  logo: {
    marginRight: theme.spacing(1),
    width: '3rem',
    height: '3rem'
  },
  avatar: {
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  userNameEmail: {
    display: 'flex',
    flexDirection: 'column',
  },
  navList: {
    flex: 1,
  },
  clickable: {
    cursor: 'pointer',
    // display: 'flex',
    // alignItems: 'center',
    // textDecoration: 'none',
    // color: 'inherit',
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()

  const handleHomeClick = () => {
    if(user.role === 'customer') {
      navigate('/customer-home')
    }
    if(user.role === 'moderator') {
      navigate('/expert-home')
    }
    // if(user.role === 'admin') {
    //   navigate('/admin-home')
    // }
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Logo" className={classes.logo} />
          <Typography variant="h5" style={{ fontSize: '24px', fontWeight: 'bold' }}>DocChecker</Typography>
        </div>
        <List className={classes.navList}>
          <div className={classes.clickable} onClick={handleHomeClick}>
            <ListItem >
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </div>
          
        </List>
      </div>
      <div>
        <Divider />
        <div className={classes.userInfo}>
          <Avatar className={classes.avatar}>{user?.firstname?.charAt(0).toUpperCase()}</Avatar>
          <div className={classes.userNameEmail}>
            <Typography variant="body1">{user?.username}</Typography>
            <Typography variant="body2">{user?.emailId}</Typography>
          </div>
        </div>
        <Divider />
        <List>
          <div className={classes.clickable} >
            <ListItem>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </div>
          <div className={classes.clickable} >
            <ListItem>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItem>
          </div>
        </List>
      </div>
    </Drawer>
   
  );
};

export default Sidebar;
