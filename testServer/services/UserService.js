/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create user address
*
* createUserAddressRequest CreateUserAddressRequest  (optional)
* returns UserAddress
* */
const createUserAddress = ({ createUserAddressRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createUserAddressRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get current user
*
* returns User
* */
const getCurrentUser = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get user address
*
* addressId String 
* returns UserAddress
* */
const getUserAddress = ({ addressId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        addressId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* User addresses
*
* returns GetUserAddressesResponse
* */
const getUserAddresses = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Remove user address
*
* addressId String 
* returns RemoveUserAddressResponse
* */
const removeUserAddress = ({ addressId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        addressId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update current user
*
* updateUserRequest UpdateUserRequest  (optional)
* returns User
* */
const updateUser = ({ updateUserRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        updateUserRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update user address
*
* addressId String 
* updateUserAddressRequest UpdateUserAddressRequest  (optional)
* returns UserAddress
* */
const updateUserAddress = ({ addressId, updateUserAddressRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        addressId,
        updateUserAddressRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createUserAddress,
  getCurrentUser,
  getUserAddress,
  getUserAddresses,
  removeUserAddress,
  updateUser,
  updateUserAddress,
};
