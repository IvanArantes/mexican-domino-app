import React from 'react';
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
    Input,
    Item
} from 'native-base';

const Round = () => {
    const mockJogadores = [
        { name: 'jogador 1qqq', score: '0' },
        { name: 'jogador 2', score: '4' },
        { name: 'jogador 3', score: '5' },
        { name: 'jogador 4', score: '7' },
        { name: 'jogador 5', score: '8' },
        { name: 'jogador 6', score: '9' },
        { name: 'jogador 7', score: '11' },
        { name: 'jogador 8', score: '7' },
        { name: 'jogador 9', score: '7' },
        { name: 'jogador 10', score: '7' },
        { name: 'jogador 11', score: '7' },
        { name: 'jogador 12', score: '7' },
        { name: 'jogador 13', score: '7' },
        { name: 'jogador 14', score: '7' },
        { name: 'jogador 15', score: '7' },
    ];

    getListItem = item => (
        <ListItem key={item.name}>
            <Left>
                <Text>
                    {item.name}
                </Text>
            </Left>
            <Right>
                <Item regular>
                    <Input onChange={this.change} />
                </Item>
            </Right>
        </ListItem>
    );

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Nova rodada</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <List>{mockJogadores.map(item => this.getListItem(item))}</List>
            </Content>

            <Footer style={{ backgroundColor: 'white' }}>
                <Button
                    style={{ marginBottom: 10, marginRight: 10 }}
                    iconLeft
                    onPress={() => this._deckSwiper._root.swipeLeft()}>
                    <Text>Fim Rodada</Text>
                </Button>
            </Footer>
        </Container>
    );
}

export default Round;