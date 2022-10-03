import React, { useEffect } from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ms, s, vs } from 'react-native-size-matters/extend';
import theme from '@theme';

import Invoices from '@screens/invoices';
import InvoiceDetails from '@screens/invoiceDetails';

import { connect } from 'react-redux';
import * as actions from '@store/invoice/actions';
import { LIST_OF_INVOICES } from '@mock/invoiceData';

const themeDefault = {
  dark: false,
  colors: {
    background: '#fff'
  }
}
const Stack = createStackNavigator();

const MainNavigator = ({
  createInvoices,
}) => {

  useEffect(() => {
    createInvoices(LIST_OF_INVOICES)
  }, [])

  const HeaderGoBack = () => {
    return (
      <Image
        style={(Platform.OS === 'ios') ? styles.backIconIos : styles.backIcon}
        source={require('@assets/images/global/backicon.png')}
        resizeMode={"contain"}
      />
    );
  };

  return (
    <NavigationContainer theme={themeDefault}>
      <Stack.Navigator
        initialRouteName={"invoices"}
        screenOptions={{
          headerBackTitleVisible: false,
          headerStyle: styles.header,
          headerBackImage: (props) => <HeaderGoBack />,
          headerTintColor: theme.colors.black,
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: {},
          gestureEnabled: false
        }}>
        <Stack.Screen name="invoices" component={Invoices} />
        <Stack.Screen name="invoiceDetails" component={InvoiceDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createInvoices: (data) => dispatch(actions.createInvoices(data)),
  }
}

const MainNavigatorContainer = connect(null, mapDispatchToProps)(MainNavigator)

export default MainNavigatorContainer;

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.gray,
    shadowOpacity: 0,
    elevation: 0,
    height: Platform.OS == 'ios' ? vs(90) : vs(60),
  },
  headerTitle: {
    fontSize: ms(14),
    color: theme.colors.white,
    letterSpacing: s(0.29),
    fontFamily: theme.fonts.helveticaRegular,
  },
  backIcon: {
    height: vs(16),
    width: s(30),
  },
  backIconIos: {
    height: vs(16),
    width: s(30),
    resizeMode: 'contain',
    marginHorizontal: s(14),
  },
});
