import React from 'react';
import {Header, Body, Title} from 'native-base';

import styles from './Header.styles';

const CHeader = props => {
  return (
    <Header>
      <Body style={styles.headerBody}>
        <Title>{props.title}</Title>
      </Body>
    </Header>
  );
};

export default CHeader;
