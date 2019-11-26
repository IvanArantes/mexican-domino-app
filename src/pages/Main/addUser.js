/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Title,
  Input,
  Form,
  Icon,
} from 'native-base';

import styles from './addUser.style';

let list = [
    {name: 'Jogador 1', score: 10},
    {name: 'Jogador 12', score: 12},
];

export default class AddUser extends Component {

  addUser = user => {
    this.list.push(user);
  };

  render() {
    return (
      <Container>
        <Title>Novo Jogo - Adicione os jogadores</Title>

        <Form>
          <Input
            autoCaptalize="none"
            autoCorrect={false}
            placeHolder="Nome do jogador"
          />
          <Submit onPress={(e) => {}}>
            <Icon
              ios="ios-add"
              android="md-add"
              style={{fontSize: 20, color: 'blue'}}
            />
          </Submit>
        </Form>

        <Header />
        <Content>
          <List>
            {list.map(user => (
                <ListItem>
                    <Text>{user.name}</Text>
                </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
