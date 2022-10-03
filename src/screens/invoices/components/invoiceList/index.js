import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import styles from '../../styles';
import { Loader, EmptyState } from '@components';
import InvoiceItem from '../invoiceItem';
import { connect } from 'react-redux';
import * as actions from '@store/invoice/actions';

const InvoiceList = ({
  navigation,
  getInvoices,
  invoices,
}) => {

  useEffect(() => {
    // getInvoicesFromServer(false)  // getUserProfile API not working
  }, [])

  const onRefresh = () => {
    // getInvoicesFromServer(true)  // getUserProfile API not working
  }

  const [state, setState] = useState({
    loading: false,
    refreshing: false,
  });

  const getInvoicesFromServer = isRefreshing => {
    (isRefreshing) ? setState(prev => ({ ...prev, refreshing: true })) : setState(prev => ({ ...prev, loading: true }))
    getInvoices()
      .then(() => {
        (isRefreshing) ? setState(prev => ({ ...prev, refreshing: false })) : setState(prev => ({ ...prev, loading: false }))
      })
  }

  const navigateToInvoiceDetails = invoice => navigation.navigate('invoiceDetails', { invoice })

  const renderItem = ({ item, index }) => {
    return (
      <InvoiceItem
        invoice={item}
        index={index}
        navigateToInvoiceDetails={navigateToInvoiceDetails} />
    )
  }

  return (
    <>
      <Loader loading={state.loading} />
      <FlatList
        data={invoices}
        keyExtractor={(item) => `${item?.invoiceNumber}`}
        refreshControl={<RefreshControl refreshing={state.refreshing} onRefresh={onRefresh} />}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
        ListEmptyComponent={() =>
          (state.loading) ? null : (
            <EmptyState title={'No invoice available'} />
          )
        }
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    invoices: state.invoice.invoices,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInvoices: () => dispatch(actions.getInvoices()),
  }
}

const InvoiceListContainer = connect(mapStateToProps, mapDispatchToProps)(InvoiceList)

export default InvoiceListContainer;
