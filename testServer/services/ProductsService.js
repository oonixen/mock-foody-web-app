/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get category detail
*
* categoryId String 
* returns ProductsCategory
* */
const getProductsCategory = ({ categoryId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        categoryId,
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
* Get Products Extra
*
* returns GetProductsExtraResponse
* */
const getProductsExtra = () => new Promise(
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
* Get Products Main
*
* returns GetProductsMainResponse
* */
const getProductsMain = () => new Promise(
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
  getProductsCategory,
  getProductsExtra,
  getProductsMain,
};
