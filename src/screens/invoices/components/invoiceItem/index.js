import React from 'react';
import { Box, HelveticText, Separator } from '@components';
import styles from '../../styles';
import { s, vs, ms } from 'react-native-size-matters/extend';
import moment from 'moment';
import theme from '@theme';
import { getFullName } from '@utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const InvoiceItem = ({ invoice, index, navigateToInvoiceDetails }) => {

  const onPress = () => navigateToInvoiceDetails(invoice)

  return (
    <Box isClickable bc={theme.colors.white} w={'90%'} as={'center'} mb={vs(18)} r={ms(6)} ph={s(12)} pv={vs(12)} elevation onPress={onPress}>
      <Box row ai={'center'}>
        <Ionicons name={'reader-outline'} size={s(36)} color={theme.colors.black} />
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
    </Box>
  );
};

export default InvoiceItem;
