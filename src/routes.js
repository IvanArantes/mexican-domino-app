import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Game from './pages/Game';
import Ranking from './pages/Ranking';

const StartStack = createStackNavigator({
  Main: { screen: Game, navigationOptions: { title: 'Novo Jogo' } },
  Play: { screen: Ranking, navigationOptions: { title: 'Ranking' } },
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
