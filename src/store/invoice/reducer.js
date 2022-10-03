import * as types from './types';
import _ from "lodash";

const initialState = {
  addInvoiceModalOpened: false,
  invoices: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INVOICES: {
      if (action?.payload?.data && action?.payload?.status === 200) {
        let data = action.payload.data;
        return {
          ...state,
          invoices: data,
        };
      } else {
        return { ...state }
      }
    }

    case types.CREATE_INVOICES: {
      if (action?.payload?.length > 0) {
        let data = action.payload;
        return {
          ...state,
          invoices: data,
        };
      } else {
        return { ...state }
      }
    }

    case types.CREATE_INVOICE: {
      if (action?.payload) {
        let data = action.payload;
        return {
          ...state,
          invoices: [...state.invoices, data],
          addInvoiceModalOpened: false,
        };
      } else {
        return { ...state }
      }
    }

    case types.CHANGE_INVOICE_MODAL_VISIBILITY: {
      return {
        ...state,
        addInvoiceModalOpened: action.payload,
      };
    }

    case types.LOGOUT: {
      return { ...initialState }
    }

    default: {
      return { ...state };
    }
  }
};

export default reducer;
