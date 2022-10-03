import React, { useLayoutEffect } from 'react';
import { SafeContainer, Box, HelveticText, Separator } from '@components';
import styles from './styles';
import theme from '@theme';
import { getFullName } from '@utils';
import { s, vs } from 'react-native-size-matters/extend';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const Field = ({ field, value }) => {
  return (
    <HelveticText numberOfLines={1} style={styles.field}>
      {field}
      <HelveticText numberOfLines={2} style={styles.value}>
        {value}
      </HelveticText>
    </HelveticText>
  )
}

const InvoiceDetails = ({ navigation, route }) => {
  let { invoice } = route?.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: <HelveticText style={styles.headerTitle}>{'Invoice Details'}</HelveticText>,
      headerTitleAlign: 'center',
    });
  }, [])

  return (
    <SafeContainer
      safeStyle={styles.safeArea}
      containerStyle={styles.container}>
      <Box row ai={'center'}>
        <Ionicons name={'reader-outline'} size={s(42)} color={theme.colors.black} />
        <Box flex ml={s(8)}>
          <Field
            field={'Invoice reference: '}
            value={invoice?.invoiceReference} />
          <Field
            field={'Invoice number: '}
            value={invoice?.invoiceNumber} />
        </Box>
      </Box>
      <Separator mv={vs(8)} />
      <Field
        field={'Description: '}
        value={invoice?.description} />
      <Field
        field={'Date: '}
        value={moment(invoice?.invoiceDate).format('YYYY-MM-DD')} />
      <Field
        field={'Due date: '}
        value={moment(invoice?.dueDate).format('YYYY-MM-DD')} />
      <Field
        field={'Customer: '}
        value={getFullName(invoice?.customer)} />
      {(invoice?.customer?.contact?.email) && (
        <Field
          field={'Customer email: '}
          value={invoice?.customer?.contact?.email} />
      )}
      {(invoice?.customer?.contact?.mobileNumber) && (
        <Field
          field={'Customer contact no: '}
          value={invoice?.customer?.contact?.mobileNumber} />
      )}
    </SafeContainer>
  )
}

export default InvoiceDetails;
