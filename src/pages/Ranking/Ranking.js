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
import {retrieveData} from '../../services/storage-service';
import styles from './Ranking.styles';

class Ranking extends Component {
  jogadores = [];

  getJogadores() {
    this.jogadores = JSON.parse(retrieveData('jogadores'));
    if (this.jogadores.length > 0) {
      return this.jogadores.map(item => this.getListItem(item));
    }
  }

  getListItem = item => (
    <ListItem key={`${item.name}`}>
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
        {/*<Header title={'Ranking'} />*/}

        <Content>
          <List>{this.getJogadores()}</List>
        </Content>

        <Footer />
      </Container>
    );
  }
}

export default Ranking;
