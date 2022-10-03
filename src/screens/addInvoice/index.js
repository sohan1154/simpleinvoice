import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { BottomSheet, BottomSheetHeader, Box, Button, FloatingLabelTextInput, HelveticText } from '@components';
import styles from './styles';
import { validateInvoice } from './helpers/validation';
import { connect } from 'react-redux';
import * as actions from '@store/invoice/actions';

const AddInvoice = ({
  onPressClose,
  createInvoice,
}) => {

  const [state, setState] = useState({
    invoiceReference: '',
    invoiceNumber: '',
    description: '',
    customer: {
      firstName: '',
      lastName: '',
    },
  })

  const onChangeReference = text => setState(prev => ({ ...prev, invoiceReference: text }))
  const onChangeNumber = text => setState(prev => ({ ...prev, invoiceNumber: text }))
  const onChangeDescription = text => setState(prev => ({ ...prev, description: text }))
  const onChangeCustomerFirstname = text => setState(prev => ({ ...prev, customer: { ...prev.customer, firstName: text } }))
  const onChangeCustomerLastname = text => setState(prev => ({ ...prev, customer: { ...prev.customer, lastName: text } }))

  const onAddPress = () => {
    let isValidDetails = validateInvoice({ ...state });
    if (!isValidDetails) {
      return;
    }
    createInvoice({ ...state })
    Alert.alert('Success', 'Invoice added')
  }

  return (
    <BottomSheet>
      <BottomSheetHeader title={'Add Invoice'} onClose={onPressClose} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Box flex>
          <FloatingLabelTextInput
            label={'Invoice reference*'}
            value={state.invoiceReference}
            onChangeText={onChangeReference} />
          <FloatingLabelTextInput
            label={'Invoice number*'}
            value={state.invoiceNumber}
            onChangeText={onChangeNumber} />
          <FloatingLabelTextInput
            label={'Description*'}
            value={state.description}
            onChangeText={onChangeDescription} />
          <FloatingLabelTextInput
            label={'Customer firstname*'}
            value={state.customer.firstName}
            onChangeText={onChangeCustomerFirstname} />
          <FloatingLabelTextInput
            label={'Customer lastname'}
            value={state.customer.lastName}
            onChangeText={onChangeCustomerLastname} />
        </Box>
        <Button
          title={'Add'}
          onPress={onAddPress}
          loading={false}
          style={styles.saveButton}
          textStyle={styles.saveButtonText}
        />
      </ScrollView>
    </BottomSheet>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createInvoice: (data) => dispatch(actions.createInvoice(data)),
  }
}

const AddInvoiceContainer = connect(null, mapDispatchToProps)(AddInvoice)

export default AddInvoiceContainer;
