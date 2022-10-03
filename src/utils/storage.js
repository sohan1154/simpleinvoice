import AsyncStorage from '@react-native-async-storage/async-storage';

export const IS_LOGGED_IN = 'IS_LOGGED_IN';
export const USER = 'USER';
export const SIMPLE_INVOICE_TOKEN = 'SIMPLE_INVOICE_TOKEN';

export const get = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.error(e);
  }
};

export const save = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('error saving in storage: ', e);
  }
};

export const deleteItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('error removing in storage: ', e);
  }
};

export const clear = async (key, value) => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error('error clearing in storage: ', e);
  }
};
