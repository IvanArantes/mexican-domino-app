/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Input,
  Right,
  Icon,
  Left,
  Item,
  Button,
  Title,
} from 'native-base';

import styles from './addUser.style';

let list = [
    {name: 'Jogador 1', score: 10},
    {name: 'Jogador 12', score: 12},
];

export default class AddUser extends Component {

  state = { nomeJogador: ''}


  render() {
    return (
      <Container>
      <Header />
      <Item>
      <Input placeholder='Nome do jogador' onChangeText={(text) => this.setState({nomeJogador: text})}/>
      <Icon active name='person' />
    </Item>

          <Button iconLeft
            onPress={ (e) => {
              alert(JSON.stringify(this.state.nomeJogador));
          } }>
            <Icon
              ios="ios-add"
              android="md-add"
              style={{fontSize: 20, color: 'blue'}}
              />
          </Button>
        <Content>
          <List>
            {list.map(user => (
                <ListItem>
                    <Left>
                    <Text>
                      {user.name} ------- {user.score}
                    </Text>
                  </Left>
                  <Right>
                    <Icon name="minus" />
                  </Right>
                </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
