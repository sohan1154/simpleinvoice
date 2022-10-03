import Config from "react-native-config";

const SERVER_HOST = Config.STAGING_SERVER_HOST;
const CLIENT_ID = Config.CLIENT_ID;
const CLIENT_SECRET = Config.CLIENT_SECRET;
const USERNAME = Config.USERNAME;
const PASSWORD = Config.PASSWORD;

const GET_ACCESS_TOKEN = `${SERVER_HOST}/token`;
const GET_USER_PROFILE = `${SERVER_HOST}/membership-service/1.2.0/users/me`;

const GET_INVOICES = `${SERVER_HOST}/invoice-service/1.0.0/invoices`;
const CREATE_INVOICE = `${SERVER_HOST}/invoice-service/2.0.0/invoices`;

const config = {
  SERVER_HOST,
  CLIENT_ID,
  CLIENT_SECRET,
  USERNAME,
  PASSWORD,
  GET_ACCESS_TOKEN,
  GET_USER_PROFILE,
  GET_INVOICES,
  CREATE_INVOICE,
};

export default config;