import axios from 'axios';
import Config from '@config';
import store from '@store/configureStore';
import qs from 'qs';

const instance = axios.create({
  baseURL: Config.SERVER_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

store.subscribe(async () => {
  var token = store.getState().user.token;
  var orgToken = store.getState().user.orgToken;
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  if (orgToken) {
    instance.defaults.headers.common['org-token'] = `${orgToken}`;
  }
});

export const API = {
  userApi: {
    getAccessToken: async () => {
      return instance
        .post(
          Config.GET_ACCESS_TOKEN,
          qs.stringify({
            client_id: Config.CLIENT_ID,
            client_secret: Config.CLIENT_SECRET,
            grant_type: 'password',
            scope: 'openid',
            username: Config.USERNAME,
            password: Config.PASSWORD
          }),
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        )
        .then(res => { return res; })
        .catch(err => { return err; });
    },
    getUserProfile: async () => {
      return instance
        .get(Config.GET_USER_PROFILE)
        .then(res => { return res; })
        .catch(err => { return err; });
    },
  },

  invoiceApi: {
    getInvoices: async () => {
      return instance
        .get(Config.GET_INVOICES)
        .then(res => { return res; })
        .catch(err => { return err; });
    },
    createInvoice: async (data) => {
      return instance
        .post(Config.CREATE_INVOICE, data)
        .then(res => { return res; })
        .catch(err => { return err; });
    },
  },
};

module.exports = API;