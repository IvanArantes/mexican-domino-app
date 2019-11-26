import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Left,
  Icon,
  Body,
  Title,
  Right,
  Footer,
  List,
  ListItem,
} from 'native-base';

import styles from './Ranking.styles';

const mockJogadores = [
  {name: 'jogador 1', score: '0'},
  {name: 'jogador 2', score: '4'},
  {name: 'jogador 3', score: '5'},
  {name: 'jogador 4', score: '7'},
  {name: 'jogador 5', score: '8'},
  {name: 'jogador 6', score: '9'},
  {name: 'jogador 7', score: '11'},
  {name: 'jogador 8', score: '7'},
  {name: 'jogador 9', score: '7'},
  {name: 'jogador 10', score: '7'},
  {name: 'jogador 11', score: '7'},
  {name: 'jogador 12', score: '7'},
  {name: 'jogador 13', score: '7'},
  {name: 'jogador 14', score: '7'},
  {name: 'jogador 15', score: '7'},
];

export default class Ranking extends Component {
  getListItem = item => (
    <ListItem>
      <Left>
        <Text>
          {item.name} ------- {item.score}
        </Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Ranking</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>{mockJogadores.map(item => this.getListItem(item))}</List>
        </Content>

        <Footer style={{backgroundColor: 'white'}}>
          <Button
            style={{marginBottom: 10, marginRight: 10}}
            iconLeft
            onPress={() => this._deckSwiper._root.swipeLeft()}>
            {/* <Icon name="arrow-back" /> */}
            <Text>Nova Rodada</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            {/* <Icon name="arrow-forward" /> */}
            <Text>Fim</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}
