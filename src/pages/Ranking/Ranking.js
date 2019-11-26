import React, {Component} from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  Left,
  Right,
  List,
  ListItem,
  Badge,
} from 'native-base';

import {Header, Footer} from '../../components';

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

class Ranking extends Component {
  getListItem = item => (
    <ListItem key={`${item.name}${item.score}`}>
      <Left>
        <Text>{item.name}</Text>
      </Left>
      <Right>
        <Badge primary>
          <Text>{item.score}</Text>
        </Badge>
      </Right>
    </ListItem>
  );

  render() {
    return (
      <Container>
        <Header title={'Ranking'} />

        <Content>
          <List>{mockJogadores.map(item => this.getListItem(item))}</List>
        </Content>

        <Footer />
      </Container>
    );
  }
}

export default Ranking;
