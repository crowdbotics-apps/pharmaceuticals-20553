import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps105287Navigator from '../features/Maps105287/navigator';
import Add-Item105286Navigator from '../features/Add-Item105286/navigator';
import Maps105282Navigator from '../features/Maps105282/navigator';
import UserProfile105278Navigator from '../features/UserProfile105278/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps105287: { screen: Maps105287Navigator },
Add-Item105286: { screen: Add-Item105286Navigator },
Maps105282: { screen: Maps105282Navigator },
UserProfile105278: { screen: UserProfile105278Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
