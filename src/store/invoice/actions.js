import * as types from './types';
import { invoiceApi } from '@services/api';

export function getInvoices() {
  return {
    type: types.GET_INVOICES,
    payload: invoiceApi.getInvoices(),
  }
}

export function createInvoices(data) {
  return {
    type: types.CREATE_INVOICES,
    payload: data,
  }
}

export function createInvoice(data) {
  return {
    type: types.CREATE_INVOICE,
    payload: data,
  }
}

export function changeInvoiceModalVisibility(data) {
  return {
    type: types.CHANGE_INVOICE_MODAL_VISIBILITY,
    payload: data,
  }
}
