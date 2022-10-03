import * as types from './types';
import { userApi } from '@services/api';

export function getAccessToken() {
  return {
    type: types.GET_ACCESS_TOKEN,
    payload: userApi.getAccessToken(),
  }
}

export function getUserProfile() {
  return {
    type: types.GET_USER_PROFILE,
    payload: userApi.getUserProfile(),
  }
}

export function logout() {
  return {
    type: types.LOGOUT,
    payload: true,
  }
}
