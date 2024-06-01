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

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    backgroundColor: '#f5f5f5', // Customize background color
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  toolbar: theme.mixins.toolbar,
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  userInfo: {
    padding: theme.spacing(2),
    textAlign: 'center',
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
        <List>
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
          <Typography variant="body1">Rangoli</Typography>
          <Typography variant="body2">rkapil@gmail.com</Typography>
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
