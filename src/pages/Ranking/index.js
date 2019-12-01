import React from 'react';

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
  Footer
} from 'native-base';

import Storage from '../../helpers/storage';

import styles from './styles';

const Ranking = () => {

  getJogadores = async () => {
    const jogs = await Storage.retrieveItem('jogadores');
    if (jogs) {
      const jogadores = JSON.parse(jogs);
      return jogadores.map(item => this.getListItem(item));
    }
  };

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

  return (
    <Container>
      {/*<Header title={'Ranking'} />*/}

      <Content>
        <List>{this.getJogadores()}</List>
      </Content>

      <Footer style={styles.footer}>
        <Button
          style={styles.buttonNovaRodada}
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

export default Ranking;
