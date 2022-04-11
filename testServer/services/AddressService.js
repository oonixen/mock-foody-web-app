/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Address suggest
*
* getAddressSuggestRequest GetAddressSuggestRequest  (optional)
* returns List
* */
const addressSuggest = ({ getAddressSuggestRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        getAddressSuggestRequest,
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
* Address Verify
*
* addressVerifyRequest AddressVerifyRequest  (optional)
* returns Boolean
* */
const addressVerify = ({ addressVerifyRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        addressVerifyRequest,
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
* Pickup addresses
*
* returns List
* */
const pickupAddresses = () => new Promise(
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

module.exports = {
  addressSuggest,
  addressVerify,
  pickupAddresses,
};
