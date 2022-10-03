import * as Storage from './storage'

export { Storage }

export function isValidEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function isValidPassword(password) {
  var Ps = /^[a-zA-Z0-9!@)#$%^&*]{8,24}$/;
  return Ps.test(password);
}

export function isValidUsername(username) {
  var Un = /^[a-zA-Z0-9#]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
  return Un.test(username);
}

export function isValidName(name) {
  var Un = /^([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+$/;
  return Un.test(name);
}

export function getFullName({ firstName, lastName }) {
  return lastName ? `${firstName} ${lastName}` : firstName;
}
