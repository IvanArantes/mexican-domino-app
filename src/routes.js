import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AddUser from './pages/Main/addUser';
import Main from '~/pages/Main';
import Ranking from './pages/Ranking/Ranking';

const StartStack = createStackNavigator({
  Main: {screen: AddUser, navigationOptions: {title: 'Jogadores'}},
  Play: {screen: Ranking, navigationOptions: {title: 'Ranking'}},
});

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main: StartStack,
    },
    {
      initialRouteName: 'Main',
    },
  ),
);

export default Routes;
