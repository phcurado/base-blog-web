import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import AuthService from '../../services/authService';

const NavigationLinks = {
  main: {
    title: 'Principal',
    links: [
      { to: '/', title: 'Home', icon: <HomeIcon /> },
      { to: '/posts', title: 'Posts', icon: <ListIcon /> }
    ]
  },
  bottom: {
    links: [
      { to: '/login', title: 'Sair', icon: <NotInterestedIcon />, action: AuthService.logout }
    ]
  }
};

export default NavigationLinks;
