/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Container,
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
  Toast,
  Root,
} from 'native-base';

import {storeData} from '../../services/storage-service';
import styles from './addUser.style';

export default class AddUser extends Component {

  state = {
    nomeJogador: '',
    jogadores: [],
  }

  addJogador() {
    if (this.state.nomeJogador) {
      this.setState((prevState) => ({
        jogadores: prevState.jogadores.concat({ name: this.state.nomeJogador.trim(), score: 0 }),
      }));

      Toast.show({
        text: 'Jogador adicionado!',
        buttonText: 'Okay',
        position: 'bottom',
        type: 'success',
        duration: 3000,
      });
    }
  }

  jogar() {
    storeData('jogadores', JSON.stringify(this.state.jogadores));
    this.props.navigation.navigate('Play');
  }

  render() {
    return (
      <Root>
        <Container>
          <Content>

            <Item>
              <Left>
                <Input placeholder="Nome do jogador" onChangeText={(text) => this.setState({ nomeJogador: text })} />
              </Left>
              <Right>
                <Button iconRight
                  onPress={() => this.addJogador()}>
                  <Text>Adicionar</Text>
                  <Icon
                    name="add"
                    style={{ fontSize: 20, color: 'white' }}
                  />
                </Button>
              </Right>
            </Item>

            <List>
              {this.state.jogadores.map(user => (
                <ListItem key={user.name}>
                  <Left>
                    <Text>
                      {user.name}
                    </Text>
                  </Left>
                  <Right>
                    <Button
                      onPress={() => alert('removido')}
                    >
                      <Icon
                        ios="ios-remove"
                        android="md-remove"
                        style={{ fontSize: 20, color: 'white' }}
                      />
                    </Button>
                  </Right>
                </ListItem>
              ))}
            </List>

            <Button
            onPress={() => this.jogar()} >
            <Text>Jogar</Text>
            </Button>
          </Content>
        </Container>
      </Root>
    );
  }
}
