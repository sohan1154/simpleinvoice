import React, { useEffect, useLayoutEffect } from 'react';
import styles from './styles';
import { SafeContainer, HelveticText } from '@components';
import { AddButton, InvoiceList } from './components';
import AddInvoice from '../addInvoice';
import { connect } from 'react-redux';
import * as actions from '@store/user/actions';
import * as invoiceActions from '@store/invoice/actions';

const Invoices = ({
  navigation,
  getAccessToken,
  getUserProfile,
  changeInvoiceModalVisibility,
  addInvoiceModalOpened,
}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: <HelveticText style={styles.headerTitle}>{'Invoices'}</HelveticText>,
      headerTitleAlign: 'center',
    });
  }, [])

  useEffect(() => {
    // getTokens()  // getUserProfile API not working
  }, [])

  const openAddInvoiceModal = () => changeInvoiceModalVisibility(true)
  const closeAddInvoiceModal = () => changeInvoiceModalVisibility(false)

  const getTokens = () => {
    getAccessToken()
      .then(response => {
        if (response?.payload?.data && response?.payload?.status === 200) {
          getUserProfile()
        }
      })
  }

  return (
    <SafeContainer
      safeStyle={styles.safeArea}
      containerStyle={styles.container}>
      {(addInvoiceModalOpened) && (
        <AddInvoice onPressClose={closeAddInvoiceModal} />
      )}
      <AddButton onPress={openAddInvoiceModal} />
      <InvoiceList navigation={navigation} />
    </SafeContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    addInvoiceModalOpened: state.invoice.addInvoiceModalOpened,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAccessToken: () => dispatch(actions.getAccessToken()),
    getUserProfile: () => dispatch(actions.getUserProfile()),
    changeInvoiceModalVisibility: (data) => dispatch(invoiceActions.changeInvoiceModalVisibility(data)),
  }
}

const InvoicesContainer = connect(mapStateToProps, mapDispatchToProps)(Invoices)

export default InvoicesContainer;
