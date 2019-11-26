import React from 'react';
import {View} from 'react-native';
import {Button, Text, Footer} from 'native-base';

import styles from './Footer.styles';

const CFooter = props => {
  return (
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
  );
};

export default CFooter;
