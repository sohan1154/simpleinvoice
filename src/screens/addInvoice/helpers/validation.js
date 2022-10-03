import { Alert } from 'react-native';
import { isValidUsername } from '@utils';

export const validateInvoice = (invoice) => {
  const { invoiceReference, invoiceNumber, description, customer } = invoice;

  if (invoiceReference?.trim()?.length == 0) {
    Alert.alert('Please enter invoice reference', 'invoice reference can not be empty');
    return false;
  } else if (invoiceReference && !isValidUsername(invoiceReference)) {
    Alert.alert('Invalid invoice reference', 'enter a valid invoice reference');
    return false;
  } else if (invoiceNumber?.trim()?.length == 0) {
    Alert.alert('Please enter invoice number', 'invoice number can not be empty');
    return false;
  } else if (invoiceNumber && !isValidUsername(invoiceNumber)) {
    Alert.alert('Invalid invoice number', 'enter a valid invoice number');
    return false;
  } else if (description?.trim()?.length == 0) {
    Alert.alert('Please enter description', 'description can not be empty');
    return false;
  } else if (customer?.firstName?.trim()?.length == 0) {
    Alert.alert('Please enter customer firstname', 'customer firstname can not be empty')
    return false;
  } else if (customer?.firstName && !isValidUsername(customer?.firstName)) {
    Alert.alert('Invalid customer firstname', 'enter a valid firstname');
    return false;
  } else {
    return true;
  }
};
