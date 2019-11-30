import {AsyncStorage} from '@react-native-community/async-storage';


export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
};

export const retrieveData = async item => {
  try {
    const value = await AsyncStorage.getItem(item);
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

