import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  static storeItem = (key, item) => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      if (__DEV__) {
        console.tron.log(error.message);
      }
    }
  };

  static retrieveItem = async key => {
    try {
      let retrievedItem = await AsyncStorage.getItem(key);
      if (retrievedItem === null) {
        return [];
      }

      return JSON.parse(retrievedItem);
    } catch (error) {
      if (__DEV__) {
        console.tron.log(error.message);
      }
    }
    return;
  };
}

export default Storage;
