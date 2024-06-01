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
import Hidden from '@material-ui/core/Hidden';
import logo from '../images/logo.png';  

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
    fontSize: 48,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  logo: {
    marginRight: theme.spacing(1),
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
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div>
        <div className={classes.toolbar} />
        <div className={classes.logoContainer}>
          <img src={logo} alt="Logo" className={classes.logo} />
          <Typography variant="h5" style={{ fontSize: '48px', fontWeight: 'bold' }}>DocChecker</Typography>
        </div>
        <List className={classes.navList}>
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><DescriptionIcon /></ListItemIcon>
            <ListItemText primary="Upload Document" />
          </ListItem>
        </List>
      </div>
      <div>
        <Divider />
        <div className={classes.userInfo}>
          <Avatar className={classes.avatar}>R</Avatar>
          <div className={classes.userNameEmail}>
            <Typography variant="body1">Rangoli</Typography>
            <Typography variant="body2">rkapil@gmail.com</Typography>
          </div>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
