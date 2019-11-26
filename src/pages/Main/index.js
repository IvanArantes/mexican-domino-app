import React, {useEffect} from 'react';

import Storage from '../../helpers/storage';

import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function Main() {
  useEffect(() => {
    const fncTest = async () => {
      // Update the document title using the browser API
      const arr = [
        {name: 'Joao', score: 5},
        {name: 'Marcia', score: 6},
        {name: 'Jose', score: 7},
      ];
      Storage.storeItem('@dataList', arr);
      const dataRet = await Storage.retrieveItem('@dataList');
      console.tron.log(`Data: ${JSON.stringify(dataRet)}`);
    };

    fncTest();
  }, []);

  return (
    <ImageBackground
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
      }}
      style={styles.container}
      resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Image
        source={{
          uri:
            'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.welcome}>Bem-vindo ao Template Básico!</Text>
      <Text style={styles.instructions}>
        Essa é a tela principal da sua aplicação =)
      </Text>
      <Text style={styles.instructions}>
        Você pode editar a tela no arquivo:
      </Text>
      <Text style={[styles.instructions, styles.fileName]}>
        src/pages/Main/index.js
      </Text>
    </ImageBackground>
  );
}

export default Main;
